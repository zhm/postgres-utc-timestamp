var test = require('tape');
var parse = require('./');

test('timestamp parser', function(t) {
  t.equal(
    parse('2010-12-11 09:09:04').getTime(),
    new Date('2010-12-11T09:09:04Z').getTime()
  )

  t.equal(
    parse('2016-04-13 18:02:47.117').getTime(),
    new Date('2016-04-13T18:02:47.117Z').getTime()
  )

  t.end()
})
