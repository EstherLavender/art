import Headline from "../components/Headline";

const Home = () => {
    const title = "NFT Marketplace with Lazy Minting";
    const subTitle = "Fullstack Tutorial.";

    const loadSignerItemsOnly = false

    return (
        <div className="bg-black">
            <Headline title={title} subTitle={subTitle}/>
            <NFTs loadSignerItemsOnly={loadSignerItemsOnly} />
        </div>
    );
}
export default Home