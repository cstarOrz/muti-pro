// 通用响应
class Response {
  constructor() {
    this.code = 200;
    this.data = '';
    this.message = 'ok';
    this.result = true;
  }
  setResponse(code, result, message, data = '') {
    this.setCode(code);
    this.setResult(result);
    this.setMessage(message);
    this.setData(data);
  }
  setCode(code) {
    this.code = code || this.code;
  }
  setResult(result) {
    this.result = result || this.result;
  }
  setMessage(message) {
    this.message = message || this.message;
  }
  setData(data) {
    this.data = data || this.data;
  }
}

module.exports = Response;
