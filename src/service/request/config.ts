let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  // BASE_URL = 'http://123.207.32.32:8000/'
  BASE_URL = '/api'
  // BASE_NAME = 'dev'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'httpbin.com/prod'
  // BASE_NAME = 'prod'
} else {
  BASE_URL = '/api'
  // BASE_NAME = 'test'
}

export { BASE_URL, TIME_OUT }
