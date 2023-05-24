const NftError = ({errorMessage}) => {
    if (!errorMessage) return null;
    return (
        <div className="bg-black">
            <div className="px-4 sm:px-6 lg:px-8">
                <h1 className="text-x1 font-bold text-red-500 inLine">{errorMessage}</h1>
            </div>
        </div>
    )
}
export default NftError;