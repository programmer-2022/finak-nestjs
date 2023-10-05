// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
// import { DataSource, DataSourceOptions } from 'typeorm';
// import { environment } from './environments';

// ConfigModule.forRoot({
//   envFilePath:
//     process.env.NODE_ENV === 'production' ? '.env' : environment['dev'],
// });

// const config = new ConfigService();

// export const DataSourceConfig: DataSourceOptions = {
//   type: 'mysql',
//   host: config.get('DATABASE_HOST'),
//   port: config.get('DATABASE_PORT'),
//   username: config.get('DATABASE_USERNAME'),
//   password: config.get('DATABASE_PASSWORD'),
//   database: config.get('DATABASE_NAME'),
//   entities: [__dirname + '/--/**/**/*.entity{.ts,.js}'],
//   migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
//   synchronize: true,
//   migrationsRun: true,
//   logging: false,
//   namingStrategy: new SnakeNamingStrategy(),
// };

// export const AppDS = new DataSource(DataSourceConfig);
