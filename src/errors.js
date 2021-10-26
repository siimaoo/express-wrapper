function generateErrors(name, message, status, err) {
  this.name = name;
  this.message = message;
  this.status = status;
  this.error = err;
  const error = new Error(this.message);
  error.name = this.name;
  error.status = this.status;
  error.error = err;
  this.stack = error.stack;
}

function BadRequest(message, error) {
  const errors = new generateErrors("BadRequest", message || "Bad Request", 400, error);
  this.name = errors.name;
  return errors;
}

function Unauthorized(message, error) {
  const errors = new generateErrors("Unauthorized", message || "Unauthorized", 401, error);
  this.name = errors.name;
  return errors;
}

function Forbidden(message, error) {
  const errors = new generateErrors("Forbidden", message || "Forbidden", 403, error);
  this.name = errors.name;
  return errors;
}

function NotFound(message, error) {
  const errors = new generateErrors("NotFound", message || "Not Found", 404, error);
  this.name = errors.name;
  return errors;
}

function Conflict(message, error) {
  const errors = new generateErrors("Conflict", message || "Conflict", 409, error);
  this.name = errors.name;
  return errors;
}

function Gone(message, error) {
  const errors = new generateErrors("Gone", message || "Gone", 410, error);
  this.name = errors.name;
  return errors;
}

function UnprocessableEntity(message, error) {
  const errors = new generateErrors("UnprocessableEntity", message || "Unprocessable Entity", 422, error);
  this.name = errors.name;
  return errors;
}

function TooManyRequests(message, error) {
  const errors = new generateErrors("TooManyRequests", message || "Too Many Requests", 429, error);
  this.name = errors.name;
  return errors;
}
 
function ErrorHandler(err, req, res, next) {
  res.status(err?.status || 500).send({
    statusCode: err?.status || 500,
    message: err?.message || "Internal Server Error",
    error: err?.error || undefined,
    timestamp: new Date().getTime(),
  });
}

BadRequest.prototype = Object.create(Error.prototype);
Unauthorized.prototype = Object.create(Error.prototype);
Forbidden.prototype = Object.create(Error.prototype);
NotFound.prototype = Object.create(Error.prototype);
Conflict.prototype = Object.create(Error.prototype);
Gone.prototype = Object.create(Error.prototype);
UnprocessableEntity.prototype = Object.create(Error.prototype);
TooManyRequests.prototype = Object.create(Error.prototype);

export { 
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  Conflict,
  Gone,
  UnprocessableEntity,
  TooManyRequests,
  ErrorHandler 
};
