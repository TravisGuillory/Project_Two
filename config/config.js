// const fs = require('fs');

// module.exports = {
//   development: {
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWD,
//     database: process.env.JAWS_DB_DB,
//     host: process.env.HEROKU_API_KEY,
//     dialect: 'mysql'
//   },
//   test: {
//     username: 'database_test',
//     password: null,
//     database: 'database_test',
//     host: '127.0.0.1',
//     dialect: 'mysql'
//   },
//   production: {
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWD,
//     database: process.env.JAWS_DB_DB,
//     host: process.env.HEROKU_API_KEY,
//     dialect: 'mysql',
//     dialectOptions: {
//       ssl: {
//         ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
//       }
//     }
//   }
// };