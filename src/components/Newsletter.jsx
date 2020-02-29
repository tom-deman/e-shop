import React from 'react'


const Newsletter = () => 
    <div
        className="md:flex block py-20 md:text-left text-center"
        id="newsletter"
    >
        <p className="text-white text-3xl tracking-tighter font-bold md:ml-32">
            Sign up to our newsletter
        </p>
        <form>
            <input
                type="email"
                className="newsletter-input border-b border-teal-500 rounded md:w-64 w-48 pl-4 text-white md:ml-40 ml-0 p-2 md:mt-0 mt-12"
                placeholder="Your email"
                required
            />
            <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-400 rounded py-2 px-4 text-white"
            >
                Sign
            </button>
        </form>
    </div>


export default Newsletter
