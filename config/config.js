module.exports = 
  {
    "development": {
      "username": "root",
      "password": "password",
      "database": "choosedb",
      "host": "127.0.0.1",
      "port": 3306,
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": process.env.JAWSDB_USERNAME,
      "password": process.env.JAWSDB_PASSWORD,
      "database": "choosedb_production",
      "host": process.env.JAWSDB_HOST,
      "dialect": "mysql"
    }
  }
