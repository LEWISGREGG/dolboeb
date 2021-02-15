import React from 'react'
import '../Pages/Idex.css';
import {Button} from "@material-ui/core";
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';





function Idex() {
 return (
   <footer id="footer">
           <section className='footer_subscription'>
        <p className='footer_subscription_heading'>
          Join PoltavaHealth newsletter to receive our best medecine deals
        </p>
        <p className='footer_subscription_text'>
          You can unsubscribe at any moment.
        </p>
        <div className='input_areas'>
          <form>
            <input
              className='footer_input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button class='btn_outline' variant="outlined">Subscribe</Button>
          </form>
        </div>
      </section>
    <section id="footer_info">
      <div className="info_center">
        <div className="info_item">
          <h2>About Us</h2>
        </div>
        <div className="info_item">
          <Link to='/'>Testimonials</Link>
        </div>
        <div className="info_item">
          <Link to='/'>Careers</Link>
        </div>
        <div className="info_item">
          <Link to='/'>Investors</Link>
        </div>
        <div className="info_item">
          <Link to='/'>Terms of Service</Link>
        </div>
      </div>

            <div className="info_center">
        <div className="info_item">
          <h2>Contact Us</h2>
        </div>
        <div className="info_item">
            <Link to='/'>Contact</Link>
        </div>
        <div className="info_item">
            <Link to='/'>Support</Link>
        </div>
        <div className="info_item">
            <Link to='/'>Destinations</Link>
        </div>
        <div className="info_item">
            <Link to='/'>Sponsorships</Link>
        </div>
      </div>

      <div className="info_center">
        <div className="info_item">
            <h2>Social Media</h2>
        </div>
        <div className="info_item">
            <Link to='/'><InstagramIcon/></Link>
        </div>
        <div className="info_item">
            <Link to='/'><FacebookIcon/></Link>
        </div>
        <div className="info_item">
            <Link to='/'><YouTubeIcon/></Link>
        </div>
        <div className="info_item">
            <Link to='/'><LinkedInIcon/></Link>
        </div>
      </div>
    </section>
     <section className='social_media'>
        <div className='social_media_wrap'>
          <small className='website_rights'><h3>PoltavaHealth © 2021 All rights reserved</h3></small>
        </div>
      </section>
  </footer>
 )
}

export default Idex
