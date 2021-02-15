import React from 'react';
import {Button} from "@material-ui/core";
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
  return (
    <div className='footer_container'>
      <section className='footer_subscription'>
        <p className='footer_subscription_heading'>
          Join POLTHealth newsletter to receive our best medecine deals
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
      <div className='footer_links'>
        <div className='footer_link_wrapper'>
          <div className='footer_link_items'>
            <h2>About Us</h2>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer_link_items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer_link_wrapper'>
          <div className='footer_link_items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer_link_items social_icons'>
            <h2>Social Media</h2>
            <Link to='/'><InstagramIcon/></Link>
            <Link to='/'><FacebookIcon/></Link>
            <Link to='/'><YouTubeIcon/></Link>
            <Link to='/'><LinkedInIcon/></Link>
          </div>
        </div>
      </div>
      <section className='social_media'>
        <div className='social_media_wrap'>
          <small className='website_rights'><h3>POLTHealth © 2021 All rights reserved</h3></small>
        </div>
      </section>
    </div>
  );
}

export default Footer;