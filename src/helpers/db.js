require('dotenv').config();
const mariadb = require('mariadb');
const local = process.env.ENV_LOCAL;

const pool = mariadb.createPool({
     host:      local === 'TRUE' ? process.env.PC_HOST_LOCAL: process.env.PC_HOST,
     port:      3306,
     user:      local === 'TRUE' ? process.env.PC_USER_LOCAL: process.env.PC_USER,
     database:  local === 'TRUE' ? process.env.PC_DBNAME_LOCAL: process.env.PC_DBNAME,
     password:  local === 'TRUE' ? process.env.PC_PSSWD_LOCAL: process.env.PC_PSSWD,
     connectionLimit: 150,
     queueLimit: 300,
     multipleStatements:true
});
module.exports = pool;
