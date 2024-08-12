const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.DB_NAME || 'learn-express',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',
    dialect: process.env.DB_DIALECT || 'mysql',
  }
)

try {
  await sequelize.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

export default sequelize
