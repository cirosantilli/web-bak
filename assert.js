var all_asserts_passed = true

function assert(tf) {
  if (!tf) {
    all_asserts_passed = false
    document.write("<h1>ASSERT FAILED</h1>")
    var err = new Error('AssertFailed')
    document.write("<pre>" + err.stack + "</pre>")
    throw err
  }
}

function assert_eq(actual, expect) {
  if (! (actual === expect)) {
    all_asserts_passed = false
    document.write("<h1>ASSERT FAILED</h1>")
    var err = new Error('AssertFailed')
    document.write("<pre>" + err.stack + "</pre>")
    document.write("<pre>actual = " + actual + "\nexpect = " + expect + "</pre>")
    throw err
  }
}

function assert_neq(actual, expect) {
  if (actual === expect) {
    all_asserts_passed = false
    document.write("<h1>ASSERT FAILED</h1>")
    var err = new Error('AssertFailed')
    document.write("<pre>" + err.stack + "</pre>")
    document.write("<pre>actual = " + actual + "\nexpect = " + expect + "</pre>")
    throw err
  }
}

// Test our asserts.

assert(true)
//assert(false)
assert_eq(0, 0)
//assert_eq(0, 1)
assert_neq(0, 1)
