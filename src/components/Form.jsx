import React from 'react'


const Form = () => {
    return(
        <div id="form">
            <p className="text-center uppercase pt-20 text-3xl font-bold tracking-tight">
                Start your project
            </p>
            <div className="w-5/6 mx-auto mt-12">
                <form action="">
                    <div className="flex">
                        <div className="w-full">
                            <input
                                className="w-full bg-transparent py-2 px-3 border border-gray-400"
                                type="text"
                                placeholder="Your full name"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex my-5">
                        <div className="w-1/2 pr-2">
                            <input
                                type="email"
                                className="w-full bg-transparent py-2 px-3 border border-gray-400"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="w-1/2 pl-2">
                            <input
                                type="text"
                                className="w-full bg-transparent py-2 px-3 border border-gray-400"
                                placeholder="Phone"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-full">
                            <textarea
                                placeholder="Describe your project"
                                className="bg-transparent w-full border border-gray-400 px-3 py-2"
                                name="form-area"
                                rows="7"
                                required
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-full">
                            <input
                                type="text"
                                className="w-full bg-transparent py-2 px-3 border border-gray-400 mt-4 mb-16"
                                placeholder="Value"
                            />
                        </div>
                    </div>
                    <div className="w-full text-center pb-16">
                        <button
                            type="submit"
                            className="uppercase rounded-full py-3 px-5 button-form hover:bg-teal-400 text-white text-sm"
                        >
                            Send request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Form
