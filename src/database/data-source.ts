import { join } from 'path';
import { DataSourceOptions, DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.dev.env' });

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  logging: true,
  synchronize: false,
  entities: [join(__dirname, '../**/*.entity.ts')],
  migrations: [join(__dirname, '../../migrations/*.ts')],
  migrationsTableName: 'migrations',
  timezone: '-5:00',
};

const AppDataSource = new DataSource(dataSourceOptions);
export default AppDataSource;
