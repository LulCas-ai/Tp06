import pkg, { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Rember",
  password: "root",
  port: 5432,
});
