import React from 'react'

import City from './City'


const Location = () => {
    return(
        <div className="flex">
            <div className="w-2/4 bg-blue-400">
                <iframe
                    title="map"
                    className="my-map"
                    src="https://maps.google.com/maps?q=Place%20de%20la%20Minoterie%2010%201080%20Molenbeek-Saint-Jean%2C%20Belgique&t=&z=19&ie=UTF8&iwloc=&output=embed" 
                />
            </div>

            <City
                city="Brussels"
                addressOne="94 Academy Street"
                addressTwo="Barrington, London"
                phone="+123 456 789"
            />

            <City
                city="Brussels"
                addressOne="94 Academy Street"
                addressTwo="Barrington, London"
                phone="+123 456 789"
            />
        </div>
    )
}


export default Location
