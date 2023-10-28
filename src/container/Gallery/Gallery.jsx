import React from 'react';
import {SubHeading} from '../../components';
import {images} from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'; 
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
    const scrollRef = React.useRef(null);
    const scroll = (direction) => {
          const {current} = scrollRef;
          if (direction === 'left') {
            current.scrollLeft -= 300;
          } else {
            current.scrollLeft += 300;        
          }
        }
      return (
        <div className='app__gallery flex__center'>
          <div className='app__gallery-content'>
              <SubHeading title='Instagram' />
              <h1 className='headtext__cormorant'>Photo Gallery</h1>
              <p className='p__opensans' style={{color: '#AAA', marginTop: '2rem'}}>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Possimus, Animi. Vero, Maxime Ipsa Excepturi Expedita Quae Fuga Sunt Assumenda Cumque Illo Magni Error Soluta Dignissimos Repellendus Sequi Ratione! Eius, Iure!</p>
              <button className='custom__button' type='button'>View more</button>
          </div>
          <div className='app__gallery-images'>
            <div className='app__gallery-images-container' ref={scrollRef}>
                {galleryImages.map((images,index)=> (
                  <div className='app__gallery-images-card flex__center' key={`gallery_images-${index+1}`}>
                      <img src={images} alt='gallery' />
                      <BsInstagram className='gallery__image-icon' />
                  </div>

                ))}
            </div>

            <div className='app__gallery-images-arrows'>
                <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=> scroll('left')} />
                <BsArrowRightShort className='gallery__arrow-icon' onClick={()=> scroll('right')} />
            </div>
          </div>
        </div>
      );

}

export default Gallery;
