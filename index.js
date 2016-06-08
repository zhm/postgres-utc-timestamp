var TIMESTAMP_WITHOUT_TIMEZONE = /^(\d{4})-(\d\d)-(\d\d) (\d\d):(\d\d):(\d\d)(\.\d+)?$/;

module.exports = function(value) {
  if (value == null) {
    return null;
  }

  var matches = TIMESTAMP_WITHOUT_TIMEZONE.exec(value);

  if (matches.length === 8) {
    var ms = matches[7] ? +matches[7] * 1000 : 0;

    var date = Date.UTC(matches[1] | 0, (matches[2] | 0) - 1, matches[3] | 0,
                        matches[4] | 0, matches[5] | 0, matches[6] | 0,
                        ms);

    if (date != null) {
      return new Date(date);
    }
  }

  return null;
}
