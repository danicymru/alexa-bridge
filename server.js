var bridge = require("./lib/alexaBridge.js");

function main() {
  const appInsights = require('applicationinsights');
  appInsights.setup('5d89c01a-ba2f-42e0-9db0-2dfc30c850e5').start();
  console.log('Starting...');
  bridge.start();
}

main();
