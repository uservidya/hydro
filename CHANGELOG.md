
0.6.1 / 2013-12-07
==================

  * Introduce conditional test skipping
  * Tests run in their own context
  * Make the async test timeout configurable
  * tags -> meta
  * Add pre/post require test hooks

0.6.0 / 2013-12-07
==================

  * Add support for nested suites
  * Initial plugin support
  * Enable creation of DSL methods
  * Always require a test suite
  * Run async tests with domains
  * Move the callsite functionality to a plugin
  * Set `NODE_ENV` to test if none
  * Handle errors in the bootstrap file
  * Initial tag support

0.5.1 / 2013-12-03
==================

  * Fix some plugin hooks
  * Expose `_hydro`

0.5.0 / 2013-12-02
==================

 * Extract the base formatter and its related to a module
 * Change the default glob pattern to test/*.js
 * There is no need hydro-silent to be a core dependency
 * Initial plugin architecture
 * Introduce a test dispatcher
 * Suite is now running its tests
 * Move Formatter#displayGroup to the list formatter
 * Introduce skipped tests
 * bin: use v8-argv to allow harmony and other v8 args

0.4.0 / 2013-12-02
==================

  * Move all formatters outside of the module

0.3.0 / 2013-12-02
==================

  * mini -> hydro
  * Improve the result format
  * Export ms for formatters
  * Introduce a new default formatter
  * Remove --formatters

0.2.0 / 2013-12-01
==================

  * Introduce base formatter

0.1.2 / 2013-12-01
==================

  * Fix dependency mess

0.1.1 / 2013-12-01
==================

  * Expose the binary

0.1.0 / 2013-12-01
==================

  * Initial implementation
