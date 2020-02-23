import React from 'react'


const Newsletter = () => {
    return(
        <div
            className="flex py-16"
            id="newsletter"
        >
            <p className="text-white text-3xl tracking-tighter font-bold ml-32">
                Sign up to our newsletter
            </p>
            <form>
                <input
                    type="email"
                    className="newsletter-input border-b border-red-500 rounded w-64 pl-4 text-white ml-40 p-2"
                    placeholder="Your email"
                    required
                />
                <button
                    type="submit"
                    className="bg-red-500 rounded py-2 px-4 text-white hover:bg-red-400"
                >
                    Sign
                </button>
            </form>
        </div>
    )
}


export default Newsletter
