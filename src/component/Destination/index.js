import React from 'react';
import ProvinceCard from '../ProvinceCard';
import './destination.css';

const Destination = () => {
  return (
    <div className='destination container'>
          <div className='row highlight-wrapper'>
            <h2 className='col'>Destination Highlight</h2>
          </div>
          <p className='text-center desc-highlight mb-5'>Free yourself, explore and enjoy Indonesian nature tourism</p>

          <div className='row section-province-wrapper responsive-wrapper row-cols-5 d-flex'>
            <div className='col px-0 mb-0'>
              <ProvinceCard
                province='Sumatra'
                url='/'
                bg_image='box-overlay bg-sumatra'
              />
            </div>
            <div className='col px-0 mb-0'>
              <ProvinceCard
                province='Jawa Barat'
                url='/'
                bg_image='box-overlay bg-jawabarat'
              />
            </div>
            <div className='col px-0 mb-0'>
              <ProvinceCard
                province='Jawa Tengah'
                url='/'
                bg_image='box-overlay bg-bg-jawatengah'
              />
            </div>
            <div className='col px-0 mb-0'>
              <ProvinceCard
                province='Jawa Timur'
                url='/'
                bg_image='box-overlay bg-jawatimur'
              />
            </div>
            <div className='col px-0 mb-0'>
              <ProvinceCard
                province='Bali'
                url='/'
                bg_image='box-overlay bg-bali'
              />
            </div>
            <div className='col px-0 mb-0'>
              <ProvinceCard
                province='Kalimantan Timur'
                url='/'
                bg_image='box-overlay bg-kaltim'
              />
            </div>
            <div className='col px-0 mb-0'>
              <ProvinceCard
                province='Lombok'
                url='/'
                bg_image='box-overlay bg-lombok'
              />
            </div>
            <div className='col px-0 mb-0'>
              <ProvinceCard
                province='Sulawesi'
                url='/'
                bg_image='box-overlay bg-sulawesi'
              />
            </div>
            <div className='col px-0'>
              <ProvinceCard
                province='Nusa Tenggara Timur'
                url='/'
                bg_image='box-overlay bg-ntt'
              />
            </div>
            <div className='col px-0 mb-0'>
              <ProvinceCard
                province='Maluku'
                url='/'
                bg_image='box-overlay bg-maluku'
              />
            </div>
          </div>
    </div>
  )
}

export default Destination;
