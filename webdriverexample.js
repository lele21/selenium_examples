var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
client
    .init()
    .url('https://duckduckgo.com/')
    .pause(2000)
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .pause(1000)
    .click('#search_button_homepage')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
        // outputs:
        // "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
    .pause(2000)
    .end();