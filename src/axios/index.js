import JsonP from 'jsonp'
export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: 'callback'
      }, function(error, response) {
        if (error) {
          reject(error)
        } else {
          resolve(response)
        }
      })
    })
  }
}