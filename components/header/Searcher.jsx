

const Searcher = () => {
    return (
        <div className="relative mt-1">

            <div className="absolute top-2 left-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>

            <input type="text" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-gray-500 focus:border-gray-500 rounded-md" placeholder="search..."/>

        </div>
    )
}

export default Searcher;