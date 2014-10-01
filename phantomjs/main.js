//#console

    console.log('stdout')

//#webpage

    var webpage = require('webpage')

    var page = webpage.create()
    page.content = '<!DOCTYPE html><title></title>'
      + '<body style="background-color:white;">'
      + '  <h1>Rendered by PhantomJS</h1>'
      + '  <p>Paragraph.</p>'
      + '  <p style="color:red;">Red paragraph.</p>'
      + '</body>'
    page.render('render.png')

  // Download webpage from URL.

    var page = webpage.createp
    page.open('http://www.phantomjs.org/', function (status) {
      if (status !== 'success') {
        console.log('failed to load page')
      } else {
        console.log(page.content)
      }
    })

//#exit

  // Mandatory, or else program will not exit.

    phantom.exit();
