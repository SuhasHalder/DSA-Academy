/** Internal codes only — never send these strings to clients. */
const DB_ERROR_CODES = {
  NOT_CONFIGURED: 'DB_NOT_CONFIGURED',
  PLACEHOLDER_URI: 'DB_PLACEHOLDER_URI',
  CONNECTION_FAILED: 'DB_CONNECTION_FAILED'
};

function createDbError(code) {
  const err = new Error(code);
  err.code = code;
  return err;
}

module.exports = { DB_ERROR_CODES, createDbError };
