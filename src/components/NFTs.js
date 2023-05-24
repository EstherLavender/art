import NftError from "./NFTError";
import { useState } from "react";
import { useRouter } from "next/router";

export default function NFTs({ loadSignerItemsOnly }) {
  const nftItems = [
    {
      tokenId: 1,
      name: 'My First Ape',
      href: '#',
      image: '/NFTs/fake-boredapel.jpg',
      price: '35.32454356',
      ownerAddress: '0x4711',
      isListedForSale: true,
      isOwnedBySigner: true,
      hasValidSalesOrder: false
    },
    {
      tokenId: 2,
      name: 'My Second Ape',
      href: '#',
      image: '/NFTs/fake-boredapel.jpg',
      price: '35.3245356',
      ownerAddress: '0x4711',
      isListedForSale: true,
      isOwnedBySigner: true,
      hasValidSalesOrder: false
    }
  ];

  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const errorHandling = (error) => {
    if (error) {
      if (!error.data) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(error.data.message);
      }
    }
  };

  const updateState = (nftItem) => {
    const index = nftItems.findIndex((item) => item.tokenId === nftItem.tokenId);
    if (index !== -1) {
      const updatedNftItems = [...nftItems];
      updatedNftItems[index] = nftItem;
      setNftItems(updatedNftItems);
    }
  };

  const sellNFT = async (nftItem) => {
    router.push({ pathname: '/createAndSell', query: nftItem });
  };

  const delistFromSale = async (nftItem) => {
    try {
      errorHandling(null);
      // await interfaceMarketplace.delistFromSale(nftItem);
      nftItem = { ...nftItem, isListedForSale: false };
      updateState(nftItem);
    } catch (error) {
      errorHandling(error);
    }
  };

  const buyNFT = async (nftItem) => {
    try {
      errorHandling(null);
      // await interfaceMarketplace.buy(nftItem);
      nftItem = { ...nftItem, isOwnedBySigner: true, isListedForSale: false, price: 0 };
      updateState(nftItem);
    } catch (error) {
      errorHandling(error);
    }
  };

  const buyDelistFromSalesOrder = async (nftItem) => {
    try {
      errorHandling(null);
      // await interfaceMarketplace.buyFromSalesOrder(nftItem);
      nftItem = { ...nftItem, isMinted: true, isOwnedBySigner: true, isListedForSale: false };
      updateState(nftItem);
    } catch (error) {
      errorHandling(error);
    }
  };

  const delistFromSalesOrder = async (nftItem) => {
    try {
      errorHandling(null);
      // await interfaceMarketplace.delistFromSalesOrder(nftItem);
      nftItem = { ...nftItem, delistFromSale: true };
    } catch (error) {
      errorHandling(error);
    }
  };

  if (errorMessage) {
    return <NftError errorMessage={errorMessage} />;
  }

  if (loadingInfo) {
    return <NftError errorMessage={loadingInfo} />;
  }

  if (!nftItems) {
    return <div className="bg-black h-96"></div>;
  }

  return (
    <div className="bg-black">
      <NftError errorMessage={errorMessage} />
      <div className="max-w-2x1 mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7x1 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {nftItems.map((nftItem) => (
            <div key={nftItem.tokenId} className="group relative">

                <div className="rounded-x1 bg-gradient-to-r p-[6px] from-[]#6EE787 via-[#8EE878]" />
                  <img
                  src={nftItem.image}
                  alt={nftItem.name}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full" 
                  />
                  <div>
                  <div className="mt-4 flex justify-between">  
                 
              {/* Render the content for each nftItem */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}