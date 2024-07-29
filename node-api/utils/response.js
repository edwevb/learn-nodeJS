const success = async (
  statusCode = 200,
  data = [],
  message = 'Success',
  res
) => {
  await res.status(statusCode).json([
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
}
const failed = (
  statusCode = 500,
  serverMessage = ' ',
  message = 'Failed',
  res
) => {
  res.status(statusCode).json([
    {
      serverMessage,
      message,
    },
  ])
}

module.exports = { success, failed }
