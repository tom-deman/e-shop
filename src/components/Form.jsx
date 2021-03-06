import React from 'react'

const inputClass = 'w-full bg-transparent py-2 px-3 border border-gray-400'


const Form = () => 
    <div id="form">
        <p className="text-center uppercase pt-20 text-3xl font-bold tracking-tight">
            Start your project
        </p>
        <div className="w-5/6 mx-auto mt-12">
            <form>
                <div className="flex">
                    <div className="w-full">
                        <input
                            className   = { inputClass }
                            type        = "text"
                            placeholder = "Your full name"
                            required
                        />
                    </div>
                </div>

                <div className="flex flex-wrap my-5">
                    <div className="md:w-1/2 w-full md:pr-2 pr-0 md:mb-0 mb-5">
                        <input
                            type        = "email"
                            className   = { inputClass }
                            placeholder = "Your Email"
                            required
                        />
                    </div>
                    <div className="md:w-1/2 w-full md:pl-2 pl-0 md:py-0">
                        <input
                            type        = "text"
                            className   = { inputClass }
                            placeholder = "Phone"
                            required
                        />
                    </div>
                </div>

                <div className="flex">
                    <div className="w-full">
                        <textarea
                            placeholder = "Describe your project"
                            className   = { inputClass }
                            name        = "form-area"
                            rows        = "7"
                            required
                        />
                    </div>
                </div>

                <div className="flex">
                    <div className="w-full">
                        <input
                            type        = "text"
                            className   = {`${ inputClass } mt-4 mb-16`}
                            placeholder = "Value"
                        />
                    </div>
                </div>

                <div className="w-full text-center pb-16">
                    <button
                        type      = "submit"
                        className = "uppercase rounded-full py-3 px-5 bg-teal-500 hover:bg-teal-400 text-white text-sm"
                    >
                        Send request
                    </button>
                </div>
            </form>
        </div>
    </div>


export default Form
