import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import axios from 'axios';
import { create as ipfsHttpClient } from 'ipfs-http-client';

import { MarketAddress, MarketAddressAbi } from './constants';

const client = ipfsHttpClient('/ip4/127.0.0.1/tcp/5002/http');
export const NFTContext = React.createContext();

export const NFTProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const nftCurrency = 'MATIC';
  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return alert('Please install metamask');

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });

    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    } else {
      console.log('No accounts found');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) return alert('Please install metamask');

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    setCurrentAccount(accounts[0]);

    window.location.reload();
  };

  const uploadToIpfs = async (file, setFileUrl) => {
    try {
      const added = await client.add({ content: file });
      console.log(added);
      const url = `/ip4/127.0.0.1/tcp/5002/http/${added.path}`;
      return url;
    } catch (error) {
      console.log('error uploading file to ipfs');
    }
  };

  return (
    <NFTContext.Provider value={{ nftCurrency, connectWallet, currentAccount, uploadToIpfs }}>
      {children}
    </NFTContext.Provider>
  );
};
