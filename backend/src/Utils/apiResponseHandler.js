class apiResponse {
      constructor(statusCode, data, message) {
            this.statusCode = statusCode;
            this.data = data;
            this.message = message;
            this.success = statusCode >= 100 && statusCode < 500;
      }
}

export { apiResponse };