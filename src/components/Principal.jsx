import React from 'react'
import Img from './Img'
import Enlace from './Enlace'
import Btn from './btn'
import Cuadros from './cuadros'

const Principal = () => {
  return (
    <div className='principal'>
        <section className='cont-left'>
          <div id='img-left-top'>
            <Img/>
          </div>
            <Enlace/>
            <Enlace/>
            <Enlace/> 
          <div className='img-infe-left'>
            <Img/>
          </div>
          <div className='img-infe-left'>
            <Img/>
          </div>
          <div className='img-infe-left'>
            <Img/>
          </div>
        </section>
        <section className='cont-right'>
          <Btn/>
          <section className='cuadros-centro'>
            <Cuadros/>
            <Cuadros/>
            <Cuadros/>
            <Cuadros/>
          </section>
        </section>
        
    </div>
  )
}

export default Principal