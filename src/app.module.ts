import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventsModule } from './events/events.module';
import configuration from './config/configuration';
import { environment } from './config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environment[process.env.NODE_ENV] || '.env',
      load: [configuration],
      isGlobal: true,
      cache: true,
    }),
    DatabaseModule,
    EventsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
