
console.log(PATH_ENV)

var hostArr = window.location.host.split('.')

if (hostArr[0] === 'mall') {
  hostArr[0] = 'shop'
} else {
  hostArr[0] = 'mall'
}

const _url = hostArr.join('.')

const BASEURL = {
  prod: `https://${_url}`,
  pre: `https://${_url}`,
  test: `http://${_url}`,
  dev: 'http://mall.nanjingsaas.cn:8080'
}

// http://192.168.1.104:8100

// 家荣本地 http://mall.iiasaas-dev.com

// pre环境 https://mall.china-iia.net

// 测试环境 http://mall.mall.com

// 穿透测试环境 http://mall.nanjingsaas.cn:8080

const host = BASEURL[PATH_ENV]

export default {
  host
}
