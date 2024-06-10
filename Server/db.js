const { Pool } = require('pg');

const pool = new Pool({
  user: 'taha',
  host: '192.168.79.146',
  database: 'app',
  password: 'secret123',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
