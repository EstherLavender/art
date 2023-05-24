import Headline from "../components/Heasline";
import NFTs from "../components/NFTs";

const MyNFTs = () => {
    const title = "NFT Marketplace with lazy Minting";
    const subTitle = "All In One.";

    const loadSignerItemsOnly = true;

    return (
        <div className="bg-black">
            <Headline title={title} subTitle={subTitle}/>
            <NFTs loadSignerItemsOnly={loadSignerItemsOnly} />
        </div>
    );
}