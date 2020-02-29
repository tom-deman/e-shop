import React from 'react'

const pClass = 'text-white font-light m-1'
const tooLong = 'py-2 px-6 border border-gray-100 rounded-full text-white mt-8 hover:bg-white hover:text-black text-sm font-light'

const City = ( props ) => 
    <div className={ props.myClass }>
        <h3 className="text-3xl text-white uppercase font-bold mt-16">
            { props.city }
        </h3>

        <hr className="w-24 m-auto h-2 my-8" />

        <p className={ pClass }>
            { props.addressOne }
        </p>
        <p className={ pClass }>
            { props.addressTwo }
        </p>
        <p className={ pClass }>
            { props.phone }
        </p>
        <button className={ tooLong }>
            Contact
        </button>
    </div>


export default City
