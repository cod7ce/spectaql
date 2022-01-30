// Determine if a value is a JSON-schema version of a MutationPayload
module.exports = (value) => {
  return  value.indexOf('MutationPayload') > 0
}
