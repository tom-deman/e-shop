import React from 'react'


const Grid = () => {
    const count = 1
    return(
        <>
            <div className="flex flex-wrap">
                <div className="w-2/4 product-1"></div>
                <div className="w-1/4 product-2"></div>
                <div className="w-1/4 product-3"></div>
                <div className="w-1/4 product-4"></div>
                <div className="w-1/4 product-5"></div>
                <div className="w-2/4 product-6"></div>
            </div>
            <div className={ count > 0 ? 'h-4 w-4 bottom-0 mb-10 right-0 mr-10 fixed z-50' : 'hidden' }>
                    <a
                        href='#header'
                        className='z-50'
                    >
                        <i class='fas fa-chevron-up text-white absolute hover:text-gray-500 z-50 p-3 to-top' />
                    </a>
            </div>
        </>
    )
}


export default Grid
