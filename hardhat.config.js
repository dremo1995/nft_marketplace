const fs = require('fs');
require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    goerli: {
      url: NEXT_PUBLIC_ALCHEMY_URL,
      account: [privateKey],
    },
  },
  solidity: '0.8.4',
};
