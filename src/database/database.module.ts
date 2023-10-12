import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../config/configuration';
import { join } from 'path';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: async (configService: ConfigType<typeof config>) => {
        const {
          host,
          port,
          name: database,
          username,
          password,
        } = configService.database;

        return {
          type: 'mysql',
          host,
          port,
          username,
          password,
          database,
          entities: [join(__dirname, '/**/*.entity{.ts,.js}')],
          synchronize: true,
          autoLoadEntities: true,
          timezone: '-5:00',
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
