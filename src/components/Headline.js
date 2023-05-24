const Headline = ({title,subTitle}) => {
    return (
        <div className="bg-gray-800 shadow">
            <div className="max-w-7x1 mx-auto py-8 px-4 sm:px-6 lg:py-8 lg:px-8 lg:flex lg:it">
                <span className="block">{title}</span>
                <span className="block text-white">{subTitle}</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inLine-flex  rounded-md shadow">
                        <a
                        href="/createAndSell"
                        className="inLine-flex items-centre justify-centre px-5 py-3 border border">
                            Create and sell your NFT
                        </a>
                    </div>
                    <div className="ml-3 inLine-flex rounded-md shadow">
                    </div>
            </div>
        </div>
    )
}