import React from 'react'
import { motion as m } from 'framer-motion'

// Components
import MapCard from '../Components/MapCard/MapCard'

// Images
import canadaMap from '../assets/locations/tablet/image-map-canada.png'
import australiaMap from '../assets/locations/tablet/image-map-australia.png'
import ukMap from '../assets/locations/tablet/image-map-uk.png'

function Locations() {
  return (
    <div className='main__locations'>
      <MapCard className={'locations__container'}>
        <div className='map'>
          <img src={canadaMap} alt='Canada Map' className='map__img' />
        </div>
        <div className='locations__text__container'>
          <div className='locations__text__col'>
            <h2 className='locations__title'>Canada</h2>
            <p className='locations__text bold'>Designo Central Office</p>
            <p className='locations__text'>3886 Wellington Street</p>
            <p className='locations__text'>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className='locations__text__col'>
            <p className='locations__text bold'>Contact </p>
            <p className='locations__text'>P : +1 253-863-8967</p>
            <p className='locations__text'>M : contact@designo.co</p>
          </div>
        </div>
      </MapCard>

      <MapCard className={'locations__container'}>
        <div className='map'>
          <img src={australiaMap} alt='Australia Map' className='map__img' />
        </div>
        <div className='locations__text__container'>
          <div className='locations__text__col'>
            <h2 className='locations__title'>Australia</h2>
            <p className='locations__text bold'>Designo AU Office</p>
            <p className='locations__text'>19 Balonne Street</p>
            <p className='locations__text'>New South Wales 2443</p>
          </div>
          <div className='locations__text__col'>
            <p className='locations__text bold'>Contact </p>
            <p className='locations__text'>P : (02) 6720 9092</p>
            <p className='locations__text'>M : contact@designo.au</p>
          </div>
        </div>
      </MapCard>

      <MapCard className={'locations__container'}>
        <div className='map'>
          <img src={ukMap} alt='United Kingdom Map' className='map__img' />
        </div>
        <div className='locations__text__container'>
          <div className='locations__text__col'>
            <h2 className='locations__title'>United Kingdom</h2>
            <p className='locations__text bold'>Designo UK Office</p>
            <p className='locations__text'>13 Colorado Way</p>
            <p className='locations__text'>Rhyd-y-fro SA8 9GA</p>
          </div>
          <div className='locations__text__col'>
            <p className='locations__text bold'>Contact </p>
            <p className='locations__text'>P : 078 3115 1400</p>
            <p className='locations__text'>M : contact@designo.uk</p>
          </div>
        </div>
      </MapCard>
    </div>
  )
}

export default Locations
