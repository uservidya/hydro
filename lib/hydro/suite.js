/**
 * Test suite.
 *
 * @param {String} title
 * @constructor
 */

function Suite(title, parent) {
  this.title = title;
  this.parent = parent;
  this.tests = [];
  this.suites = [];
}

/**
 * Register test `fn` with `title`.
 *
 * @param {Test} test
 * @api public
 */

Suite.prototype.addTest = function(test) {
  this.tests.push(test);
};

/**
 * Add a child `suite`.
 *
 * @param {Suite} suite
 * @api public
 */

Suite.prototype.addSuite = function(suite) {
  this.suites.push(suite);
};

/**
 * Run the test suite.
 *
 * @param {Object} events
 * @param {Function} fn
 * @api public
 */

Suite.prototype.run = function(events, fn) {
  var self = this;
  var runnable = this.tests.slice(0).concat(this.suites.slice(0));
  var current = null;

  function next() {
    if (current = runnable.shift()) return current.run(events, next);
    events.emit('post:suite', self, function() { fn(self); });
  }

  events.emit('pre:suite', this, next);
};

/**
 * Primary export.
 */

module.exports = Suite;
