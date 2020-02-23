import React from 'react'


const Footer = () => {
    return(
        <div
            id="footer"
            className="p-24 flex"
        >
            <div className="w-1/4">
                <div className="select-none w-12 h-12 rounded-full m-auto px-2 pb-2 pt-1 border-2 border-gray-300 text-center">
                    <h1 className="text-2xl font-medium text-gray-300">T</h1>
                </div>
            </div>
            <div className="w-1/4 px-8">
                <div className="text-white">
                    <p className="mb-8 font-bold text-lg">Headquarter</p>
                    <p className="font-thin text-sm">Headquarter 9876 Design Blvd, Suite 543, Beverly Hills, CA 90212</p>
                </div>
            </div>
            <div className="w-1/4 px-8">
                <div className="text-white">
                    <p className="mb-6 font-bold text-lg">Customer Services</p>
                    <ul>
                        <li>
                            <button className="font-thin text-sm m-1 hover:text-gray-400">
                                Opening your account
                            </button>
                        </li>
                        <li>
                            <button className="font-thin text-sm m-1 hover:text-gray-400">
                                How to shop
                            </button>
                        </li>
                        <li>
                            <button className="font-thin text-sm m-1 hover:text-gray-400">
                                Shippings
                            </button>
                        </li>
                        <li>
                            <button className="font-thin text-sm m-1 hover:text-gray-400">
                                Track your order
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-1/4 px-8">
                <div className="text-white">
                    <p className="mb-8 font-bold text-lg">Refunds and Returns</p>
                    <p className="text-white text-sm font-thin m-1">Refunds and Returns Monday – Friday, 9 am to 18 pm</p>
                    <button className="text-white text-sm font-thin m-1 hover:text-gray-400">test@test.com</button>
                    <p className="text-white text-sm font-thin m-1">+123 456 789</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
