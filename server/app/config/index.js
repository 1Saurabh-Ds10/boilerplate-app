


module.exports = {
  env: process.env.NODE_ENV || 'development',
  port:  process.env.PORT || 8000,
  database: {
    url: process.env.DATABASE_URL
  }
};