class ApiResposne {
  constructor(statusCode, data, message = 'Success') {
    this.statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}
