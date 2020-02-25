import React from 'react'

import { socialTabs } from '../assets/js/sidebarsTabs.js'


const Details = () => {
    return(
        <div
            className="bg-white w-full p-12 flex"
            id="product"
        >
            <div className="w-1/2 mt-4">
                <div className="img-product"></div>
            </div>

            <div className="w-1/2 mt-4 px-8 py-2">
                <p className="text-4xl font-semibold text-gray-800">Product Name</p>
                <p className="text-3xl font-semibold text-gray-800">€100</p>
                <p className="text-sm text-gray-700 font-light tracking-tight mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ab labore nostrum, quidem dolor sed recusandae eaque reprehenderit, quis veniam maxime dolorum cumque facere tenetur assumenda, harum sit animi iusto beatae accusamus quisquam voluptatem rerum amet totam. Voluptate soluta, doloremque corporis beatae perferendis molestiae error vitae aut distinctio officia quod!
                </p>
                <div className="flex mt-6">
                    <input
                        type="number"
                        className="w-24 h-12 border border-gray-300 shadow-sm text-center rounded-sm"
                        defaultValue={ 1 }
                    />
                    <button className="border border-gray-800 px-6 bg-gray-800 text-white uppercase ml-5 rounded-sm text-sm hover:text-black hover:bg-white">
                        Add to cart
                    </button>
                </div>

                <hr className="my-8" />

                <div className="flex">
                    <p className="w-1/5">SKU</p>
                    <p className="w-3/5 font-light text-gray-700 ml-4">026895</p>
                </div>
                <div className="flex">
                    <p className="w-1/5">Categories</p>
                    <p className="w-3/5 font-light text-gray-700 ml-4">Woman, Clothing</p>
                </div>
                <div className="flex">
                    <p className="w-1/5">Tags</p>
                    <p className="w-3/5 font-light text-gray-700 ml-4">Denim, Jacket</p>
                </div>

                <hr className="my-8" />

                <div className="flex">
                    <p className="w-1/5">Share</p>
                    <div className="w-3/5">
                        <ul className="flex">
                            { socialTabs.map(( element, index ) => 
                                <li
                                    key={ index }
                                    className=""
                                >
                                    <a
                                        href={ element.href }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className={ `${ element.icon } m-2 text-sm` } />
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Details
