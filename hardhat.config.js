const fs = require('fs');
require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    goerli: {
      url: process.env.NEXT_PUBLIC_ALCHEMY_URL,
      accounts: [privateKey],
    },
  },
  solidity: '0.8.4',
};
