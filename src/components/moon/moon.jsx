/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './moon';
import './moon.css';
// import ImgMoon from './moon.png';
import mountainsbehind from './mountains_behind.png';
import mountainsfront from './mountains_front.png';
import stars from './stars.png';

export const Moon = () => {
  return (
    <div>
      <nav>
      <a className='logo'>Cnear</a>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>work</li>
        <li>Contact</li>
      </ul>
    </nav>
    <section>
      <img src={stars} id="stars" />
      {/* <img src={ImgMoon} id="moon" /> */}
      <h2 id="text">Cnear</h2>
      <a href="#sec" id="btn">Explore</a>
    <img src={mountainsbehind} id="mountains_behind"/>
    <img src={mountainsfront} id="mountains_front" /> 
    </section>
    <div class="sec" id="sec">
      <h2>Screen 2</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
        deleniti. Quia aliquid nostrum aspernatur. Quidem, ea, possimus
        blaNatus, quisquam suscipit dicta doloribus
        facere temporibus distin omnis explicabo
        temporibus ut sunt impedit, hic et minus, quisquam praesentium commodi
        veritatis.br <br /><br />Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Nostrum soluta at inventore in ratione eius facere
        corporis earum vero. Inventore magnam repellendus voluptate nulla illumibus ut sunt impedit, hic et minus,
        quisquam praesentium commodi veritatis.br <br />
      </p>
    </div>
    </div>
  )
}

export default Moon
