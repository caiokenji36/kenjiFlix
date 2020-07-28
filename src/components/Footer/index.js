import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      
      <p>
        Desenvolvido por
        {' '} 
        <a className="dev" href="https://github.com/caiokenji36">Caio Fukue </a>
        {' '}
      
      </p>
    </FooterBase>
  );
}

export default Footer;
