import React from 'react';
import { images } from '../../constants';
import './Header.css';
import '../../App.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding app__bg" id='home'>
    <div className='app__wrapper_info'>
        <SubHeading title="Chase the new flavour" />
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}>Discover the traditional palette of Alsace. Our dedication to culture and cuisine is rooted in our heritage.</p>
        <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
        <img src={images.welcome} alt="img" />
    </div>
  </div>
);

export default Header;
