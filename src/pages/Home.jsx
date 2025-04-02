import "../scss/pages/home.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import React, { useState } from 'react';
const testimonials = [
  {
    text: "You helped us connect with the right people fast. Thank you!",
    name: "John Doe",
    business: "Tech Innovations Inc.",
    image: "/path/to/john-image.jpg"
  },
  {
    text: "L'équipe de Joud a vraiment compris nos besoins et a apporté de vrais résultats.",
    name: "Marie Dupont",
    business: "Solutions Médicales",
    image: "/path/to/marie-image.jpg"
  },
  {
    text: "Reliable and effective, your team knows how to get the job done!",
    name: "Alice Smith",
    business: "GreenEnergy Ltd.",
    image: "/path/to/alice-image.jpg"
  },
  {
    text: "Un vrai plaisir de travailler avec Joud. Des résultats concrets et une équipe très professionnelle.",
    name: "Pierre Lefevre",
    business: "Lefevre Consulting",
    image: "/path/to/pierre-image.jpg"
  },
  {
    text: "L'équipe de Joud est compétente et passionnée. Ils ont vraiment pris le temps de comprendre notre vision.",
    name: "Clara Johnson",
    business: "Clara's Designs",
    image: "/path/to/clara-image.jpg"
  },
];
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 3) % testimonials.length
    );
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 3 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };


  return (
    <>
      {/* Hero */}
      <section className="Hero">
        <div className="hero-txt">
          <h2>Turn your opportunities into success stories with us!</h2>
          <a href="#contactus" className="hero-cta">
            Contact us
          </a>
        </div>
      </section>
      {/* Hero */}

      {/* Story */}
      <section className="Story" id="Story">
        <img src="../../../public/picture/jinc.png" className="abt-logo" alt="Logo" />
        <h2>The Heart Behind Joud</h2>
        <p>
          At Joud, we often say that generosity is more than a word—it’s who we
          are. Our story is built on dedication, teamwork, and a belief that
          true success comes from helping others thrive.
        </p>
        <p>
          It all began with a vision:{" "}
          <b>connecting the right people to create meaningful opportunities</b>.
          What started as an idea quickly grew into a mission shared by a team
          of passionate individuals who care deeply about making a difference in
          the lives of our clients. When a hotel fills its rooms after months of
          struggle, or a real estate project finally finds the perfect buyers,
          to us, that’s a shared victory. Every success is a reminder of why we
          do what we do and how much we value the trust placed in us.
        </p>
        <p>
          We consider ourselves to be more than just partners—we’re part of your
          journey, and together, we turn challenges into opportunities every
          time. This is who we are. <br />{" "}
          <b>This is Joud. And your story is at the heart of ours</b>.
        </p>
        <a href="#ourStory">Read more</a>
      </section>
      {/* Story */}

      {/* Tools */}
      <section className="Tools" id="Tools">
        <div className="tools-txt">
          <h2>Tools We Work With</h2>
          <p>
            Vulputate molestie molestie amet leo blandit accumsan. Sapien sed
            amet tellus purus sit odio eget. Diam morbi faucibus vitae neque id
            in. Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus
            ac.
          </p>
        </div>
        {/* tools-box */}
        <div className="tools-box">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true} // Makes it infinite
            modules={[FreeMode, Autoplay]} // Add Autoplay module
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="tool-container">
                <img src="../../public/picture/icons/shopify.png" alt="icon" />
                <span>Shopify</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tool-container">
                <img src="../../public/picture/icons/shopify.png" alt="icon" />
                <span>Shopify</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tool-container">
                <img src="../../public/picture/icons/shopify.png" alt="icon" />
                <span>Shopify</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tool-container">
                <img src="../../public/picture/icons/shopify.png" alt="icon" />
                <span>Shopify</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tool-container">
                <img src="../../public/picture/icons/shopify.png" alt="icon" />
                <span>Shopify</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tool-container">
                <img src="../../public/picture/icons/shopify.png" alt="icon" />
                <span>Shopify</span>
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop={true} // Makes it infinite
            modules={[FreeMode, Autoplay]} // Add Autoplay module
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="tool-container">
                <img src="../../public/picture/icons/shopify.png" alt="icon" />
                <span>Shopify</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tool-container">
                <img src="../../public/picture/icons/shopify.png" alt="icon" />
                <span>Shopify</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tool-container">
                <img src="../../public/picture/icons/shopify.png" alt="icon" />
                <span>Shopify</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tool-container">
                <img src="../../public/picture/icons/shopify.png" alt="icon" />
                <span>Shopify</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tool-container">
                <img src="../../public/picture/icons/shopify.png" alt="icon" />
                <span>Shopify</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tool-container">
                <img src="../../public/picture/icons/shopify.png" alt="icon" />
                <span>Shopify</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* tools-box */}
      </section>
      {/* Tools */}

      {/* Tools */}
      <section className="Offers">
          <div className="os-heading">
            <h2>We Offer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis, aliquam laudantium neque totam dolore mollitia est labore impedit, voluptatibus ratione velit nihil libero voluptatem?
            </p>
          </div>

          <div className="os-box">

          </div>
      </section>
      {/* Tools */}

      {/* Testimonials */}
      <section className="Testimonials">
        <div className="testimonials-container">

          <div className="testimonials-top-box">
            <h1>Hear what our customers say </h1>
            <div className="swiper-controls">
              <button className="swiper-prev" onClick={prevTestimonials}>&lt;  </button>
              <button className="swiper-next" onClick={nextTestimonials}> &gt; </button>
            </div>
          </div>

          <div className="testimonials-btm">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="testimonial">
                <div className="td">
                  <div className="td-img">
                    <img src="https://media.istockphoto.com/id/1415985122/photo/portrait-of-a-beautiful-charming-african-american-curly-haired-girl-with-freckles-dressed-in.jpg?s=612x612&w=0&k=20&c=XBDU8voMUOdu2n2T2Bnh1ud39LWW1ew50vyQ3curw8c=" alt="customer" />
                  </div>
                  <span>
                    {testimonial.name}
                    <p>{testimonial.business}</p>
                  </span>
                </div>
                <div className="tb">
                  <p>  {testimonial.text.length > 200
                    ? `${testimonial.text.substring(0, 200)}...`
                    : testimonial.text
                  }</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* Testimonials */}

      {/* Contact-us */}
       <section className="contact-us">

       </section>
      {/* Contact-us */}
    </>
  );
}

export default Home;
