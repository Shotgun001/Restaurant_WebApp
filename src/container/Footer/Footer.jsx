import React from 'react';
import { FooterOverlay, Newsletter} from '../../components';

import './Footer.css';

const Footer = () => (
  <div className='app__footer app__bg section__padding'>
    <FooterOverlay />
    <Newsletter />
  </div>
);

export default Footer;
