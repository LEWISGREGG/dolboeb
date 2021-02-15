import React, { useState } from 'react';
import '../Pages/HomeScreen.css';
import Idex from './Idex';
import Navbar from './Navbar';
import { FaAccusoft, FaBattleNet, FaEvernote, FaConnectdevelop, FaLaravel, FaStudiovinari, FaHatWizard  } from 'react-icons/fa';
import { useCountUp } from 'react-countup';
import { Link } from 'react-router-dom';
import { Button } from '../../globalStyles';

function HomeScreen() {
  const [click, setClick] = useState(false);

  const { countUp, start } = useCountUp({
    start: 1,
    end: 911,
    delay: 1000,
    duration: 55,

    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => console.log(pauseResume),
  }); 


 return (
  <>
      <Navbar />
      <section id="about">
      <article id="about-text">
      <div class="title">
        <h2 class="title-text">The Most Advanced European Telehealth Platform</h2>
        <div class="title-underline"></div> 
        </div>
        <p>
          Coviu is Ukrainian's leading video/audio telehealth solution, powering simple, secure and feature-rich video consultations for healthcare professionals and patients.
        </p>
        <section id="services">

      <div class="services-center">

        <article class="service">
          <div class="service-icon">
            <FaBattleNet/>
          </div>
          <div class="service-text">
            <p class="service-info">
              End-to-end encryption, for optimal security
            </p>
          </div>
        </article>

        <article class="service">
          <div class="service-icon">
            <FaEvernote/>
          </div>
          <div class="service-text">
            <p class="service-info">
              In-built clinical tools to enhance your video/audio consultations
            </p>
          </div>
        </article>

        <article class="service">
          <div class="service-icon">
            <FaAccusoft/>
          </div>
          <div class="service-text">
            <p class="service-info">
              Digitise your practice in 24 hours 
            </p>
          </div>
        </article>
      </div>
    </section>
                    <Link to="/pricing">
                    <Button variant="contained" color="primary" className="send" >
                      Search for plan
                    </Button></Link>
    
    
    </article>
      <article id="about-video">
        <iframe
          src="http://www.youtube.com/embed/Bk2rE7JJUgw"
          width="100%"
          height="315"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </article>
    </section>

    <section id="numbers">
      <div class="title">
      </div>
    <div>
      <div><h3 class="numbers-text">{countUp}    Telehealth consultations have been successfully delivered in Ukraine using PoltavaHealth
        </h3></div>
      <Button variant="contained" color="primary" className="send" onClick={start}>
      Find out how many</Button>
    </div>
    </section>

    <section id="skills">

      <div class="title">
        <h2 class="title-text">PoltavaHealth Difference</h2>
        <div class="title-underline"></div>
      </div>

      <div class="skills-center">
        <article class="skill">
          <div class="service-icon"><FaConnectdevelop/></div>
            
          <h3>Any Device</h3>
          <p>
            PoltavaHealth works on any device (computer, tablet, or phone) on all major browsers (Chrome, Safari, Firefox, & Microsoft Edge).
          </p>
        </article>
        <article class="skill">
          <div class="service-icon"><FaLaravel/></div>
          <h3>Easy for Patients</h3>
          <p>
          No downloads, installations or account creation required. Patients just click a link and connect!
          </p>
        </article>
        <article class="skill">
          <div class="service-icon"><FaStudiovinari/></div>
          <h3>Amazing Support</h3>
          <p>
            We're here to support you 9am-5pm Sydney time (AEST) through live chat.
          </p>
        </article>
        <article class="skill">
          <div class="service-icon"><FaHatWizard/></div>
          <h3>Safe Staff</h3>
          <p>
            Help stop the spread. Adopt remote care wherever possible, to protect your staff.
          </p>
        </article>
      </div>
    </section>

    <section id="skills">

      <div class="title">
        <h2 class="title-text">Reviews</h2>
        <div class="title-underline"></div>
      </div>


      <div class="section-center timeline-center">

        <article class="timeline-item">
          <h4>Amanda Jones</h4>
          <p>
            We've had a great experience using PoltavaHealth over the past few years. Customer rep is also awesome because he's always available whenever we need him.
          </p>
          <span class="number">
            1
          </span>
        </article>

        <article class="timeline-item">
          <h4>Mark Carrick</h4>
          <p>
            User friendly for both my staff and the remote hospitals we support. Requires minimal to no IT support. I installed and I test the equipment/software monthly. Cost effective. The most affordable product that meets our needs.
          </p>
          <span class="number">
            2
          </span>
        </article>
  
        <article class="timeline-item">
          <h4>Samantha Fernandes</h4>
          <p>
            Secure Poltavahealth is easy to use and offers may great features. The fact that you can be anywhere with internet access to remote in for your patient care is AWESOME!
          </p>
          <span class="number">
            3
          </span>
        </article>

  
      </div>
    </section>
      <Idex />
  </>
)
}

export default HomeScreen
