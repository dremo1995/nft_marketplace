export const getCreators = (nfts) => {
  const creators = nfts.reduce((creatorObj, nft) => {
    (creatorObj[nft.seller] = creatorObj[nft.seller] || []).push(nfts);
    return creatorObj;
  }, {});
  console.log(Object.entries(creators));

  return Object.entries(creators).map((creator) => {
    const seller = creator[0];
    const sum = creator[1].map((item, i) => Number(item[i].price)).reduce((prev, curr) => prev + curr, 0);
    return ({ seller, sum });
  });
};
