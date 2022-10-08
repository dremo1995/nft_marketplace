const fs = require('fs');
require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/UJlWqdNcmLoZvYIumIotFJg6O_iGTrwy',
      accounts: [privateKey],
    },
  },
  solidity: '0.8.4',
};
