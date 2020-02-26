import React from 'react'


const GridCart = () => {

    const testTabs = [ 'un', 'deux' ]

    return(
        <div className="bg-white pt-32">
            <div className="flex px-4 py-4 mx-10 border border-gray-400">
                <div className="w-1/5"></div>
                <div className="w-1/5">
                    <p>Product</p>
                </div>
                <div className="w-1/5">
                    <p>Price</p>
                </div>
                <div className="w-1/5">
                    <p>Quantity</p>
                </div>
                <div className="w-1/5">
                    <p>Total</p>
                </div>
            </div>
            { testTabs.map(( element, index ) =>
                <div className="flex mx-10 py-4 px-4 border-b border-r border-l h-40 border-gray-400">
                    <div className="w-1/5 flex items-center">
                        <button className="text-red-400 ">x</button>
                        <div className="h-32 w-32 ml-8 product-cart-1"></div>
                    </div>
                    <div className="w-1/5 flex items-center">
                        <p>Kettle</p>
                    </div>
                    <div className="w-1/5 flex items-center">
                        <p>€60</p>
                    </div>
                    <div className="w-1/5 flex items-center">
                        <input
                            type="number"
                            className="w-24 h-12 border border-gray-300 shadow-sm text-center rounded-sm"
                            defaultValue={ 1 }
                        />
                    </div>
                    <div className="w-1/5 flex items-center">
                        <p>€60</p>
                    </div>
                </div>
            )}
            <div className="mt-20 mx-10 pb-8">
                <p className="font-medium mb-6">Cart Totals</p>
                <div className="flex justify-between border border-gray-400 py-5 px-4">
                    <p className="pl-4 font-medium">Total</p>
                    <p className="pr-4 font-semibold">€900</p>
                </div>
            </div>
            <div className="flex justify-end px-10 pb-12">
                <button className="border border-gray-800 py-3 px-6 bg-gray-800 text-white uppercase ml-5 rounded-sm text-sm hover:text-black hover:bg-white">
                    Proceed to checkout
                </button>
            </div>
        </div>
    )
}


export default GridCart
