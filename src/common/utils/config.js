
console.log(PATH_ENV)

const BASEURL = {
  prod: 'http://123.57.176.198:3000',
  pre: 'http://123.57.176.198:3000',
  test: 'http://123.57.176.198:3000',
  dev: 'http://123.57.176.198:3000'
}

const host = BASEURL[PATH_ENV]

export default {
  host
}
