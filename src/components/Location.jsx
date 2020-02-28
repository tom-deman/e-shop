import React from 'react'

import City from './City'


const Location = () => 
    <div className="flex">
        <div className="w-2/4 bg-blue-400">
            <iframe
                title="map"
                className="my-map bg-white"
                src="https://maps.google.com/maps?q=Place%20de%20la%20Minoterie%2010%201080%20Molenbeek-Saint-Jean%2C%20Belgique&t=&z=19&ie=UTF8&iwloc=&output=embed"
            />
        </div>

        <City
            myClass="w-1/4 city-1 text-center"
            city="Brussels"
            addressOne="Rue royale"
            addressTwo="Brussels, Belgium"
            phone="+123 456 789"
        />

        <City
            myClass="w-1/4 city-2 text-center"
            city="London"
            addressOne="86  Nenthead Road"
            addressTwo="High Green, London"
            phone="+123 456 789"
        />
    </div>


export default Location
