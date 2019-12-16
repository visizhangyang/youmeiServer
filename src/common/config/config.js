// default config
module.exports = {
  default_module: 'api',
  weixin: {
    appid: 'wx9b31141e49ce78f9', // 小程序 appid
    secret: 'd7c5b8d9af4cdd879a3be083b6692aad', // 小程序密钥
    mch_id: '1561414331', // 商户帐号ID
    partner_key: 'rLdTXmP8n9a5GBNe1onyclQJi8JMwI7l', // 微信支付密钥
    notify_url: 'https://www.nideshop.com/api/pay/notify' // 微信异步通知，例：https://www.nideshop.com/api/pay/notify
  },
  express: {
    // 快递物流信息查询使用的是快递鸟接口，申请地址：http://www.kdniao.com/
    appid: '', // 对应快递鸟用户后台 用户ID
    appkey: '', // 对应快递鸟用户后台 API key
    request_url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx'
  }
};
