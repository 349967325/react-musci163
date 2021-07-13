
console.log(PATH_ENV)

const BASEURL = {
  prod: 'http://39.102.36.212:3000',
  test: 'http://39.102.36.212:3000',
  dev: 'http://39.102.36.212:3000'
}

const host = BASEURL[PATH_ENV]

export default {
  host
}
