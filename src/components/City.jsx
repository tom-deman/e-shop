import React from 'react'

const City = ( props ) => 
    <div className={ props.myClass }>
        <h3 className="text-3xl text-white uppercase font-bold mt-16">
            { props.city }
        </h3>

        <hr className="w-24 m-auto h-2 my-8" />

        <p className="text-white font-light m-1">
            { props.addressOne }
        </p>
        <p className="text-white font-light m-1">
            { props.addressTwo }
        </p>
        <p className="text-white font-light m-1">
            { props.phone }
        </p>
        <button className="py-2 px-6 border border-gray-100 rounded-full text-white mt-8 hover:bg-white hover:text-black text-sm font-light">
            Contact
        </button>
    </div>


export default City
