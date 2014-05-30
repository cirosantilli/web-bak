// Make assertions and show useful fail information on top of the web page.

var error_message = ''

function report_error(extra) {
  var err = new Error('AssertFailed')
  error_message += '<h1 style="background-color:red;">ASSERT FAILED</h1><pre>'
    + err.stack + '</pre>' + String(extra)
}

function report_error_eq(actual, expect) {
  report_error("<pre>actual = " + actual + "\nexpect = " + expect + "</pre>")
}

function assert(tf) {
  if (!tf) {
    report_error()
  }
}

function assert_eq(actual, expect) {
  if (actual !== expect) {
    report_error_eq(actual, expect)
  }
}

function assert_neq(actual, expect) {
  if (actual === expect) {
    report_error_eq(actual, expect)
  }
}

// Test our asserts.
assert(true)
//assert(false)
assert_eq(0, 0)
//assert_eq(0, 1)
assert_neq(0, 1)

document.addEventListener(
  'DOMContentLoaded',
  function() {
    var body = document.getElementsByTagName('body')[0]
    if (error_message) {
      body.innerHTML = error_message + body.innerHTML
    } else {
      body.innerHTML = '<h1 style="background-color:green;">ALL ASSERTS PASSED</h1>' + body.innerHTML
    }
  },
  true
)
