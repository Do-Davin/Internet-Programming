// import { DataSource } from 'typeorm';
// import { dirname, join } from 'path';
// import { fileURLToPath } from 'url';

// const __dirname = dirname(fileURLToPath(import.meta.url));

// export default new DataSource({
//   type: 'postgres',
//   host: process.env.DB_HOST || 'localhost',
//   port: Number(process.env.DB_PORT) || 5433,
//   username: process.env.DB_USER || 'postgres',
//   password: process.env.DB_PASS || 'postgres',
//   database: process.env.DB_NAME || 'order-worker',
//   entities: [join(__dirname, '/../**/*.entity.{ts,js}')],
//   migrations: [join(__dirname, '/../migrations/*.{ts,js}')],
// });
