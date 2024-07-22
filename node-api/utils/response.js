const response = (statusCode, data, message, res) => {
  res.status(statusCode).json([
    {
      payload: {
        data,
        message,
      },
      metadata: {
        next: '',
        prev: '',
        current: '',
        max: '',
      },
    },
  ])
  res.end()
}

module.exports = response
