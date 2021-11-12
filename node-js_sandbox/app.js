'use strict';

const data        = require('./data'),
      packageJson = require('./package'),
      showMessage = require('./showMessage');

showMessage(`${packageJson.name} ${packageJson.version}`);

showMessage(data.text);