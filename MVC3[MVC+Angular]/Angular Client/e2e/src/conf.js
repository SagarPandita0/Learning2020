exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    SELENIUM_PROMISE_MANAGER: false,
    
    highlightDelay: 300,
    directConnect: false

  }