// components/Footer.tsx

import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';

const Footer = () => {
  return (
    <div className='sticky bg-blue-700'>
      <footer>
          <MaxWidthWrapper>
        <div className='py-12 justify-center items-center'>
          <p>&copy; {new Date().getFullYear()} Your Company</p>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        </MaxWidthWrapper>
      </footer>
    </div>
  );
};

export default Footer;
