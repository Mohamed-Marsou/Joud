import "../scss/pages/home.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

function Home() {
  return (
    <>
      <section className="Hero">
        <div className="hero-txt">
          <h2>Turn your opportunities into success stories with us!</h2>
          <a href="#contactus" className="hero-cta">
            Contact us
          </a>
        </div>
      </section>

      <section className="Story" id="Story">
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
      </section>
    </>
  );
}

export default Home;
