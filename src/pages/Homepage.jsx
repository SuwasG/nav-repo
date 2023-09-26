import React from 'react'
import Cards from '../components/navbar/Cards'
import Carousel from '../components/navbar/Carousel'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
const Homepage = () => {
  return (
    <>
    <Helmet>
        <title>Voyage au Nepal, Trek au Nepal- Au Coeur Du Nepal Treks and Expeditions </title>
        </Helmet>


        <div>
      <h1>{t('welcome')}</h1>
      <Carousel/>
<Cards/>
    </div>


    </>
  )
}

export default Homepage