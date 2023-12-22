import React from "react";
// import './testimonials.css'

import satya from "../../Assets/satya.png";
import gitesh from "../../Assets/gitesh.png";
import krutee from "../../Assets/krutee.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  ClientAvatar,
  ClientReview,
  TestimonialSection,
} from "./TestimonialStyles";

const testimonialsData = [
  {
    id: Math.floor(Math.random() * 101),
    avatar: satya,
    name: "V.V. Satya Prakash Valluri",
    review:
      "he's very passionate about work, puts good attention and able to code with minimal support. He's our five-star performer. ",
  },
  {
    id: Math.floor(Math.random() * 101),
    avatar: gitesh,
    name: "Gitesh Chaudary",
    review:
      "Bheema has strong knowledge of UI technologies. He single-handedly developed all UIs for IBSC project with professional look and feel. Great to have such a talent.",
  },
  {
    id: Math.floor(Math.random() * 101),
    avatar: krutee,
    name: "Krutee Kishore Chaudary",
    review:
      "Naga Veera is an important and reliable member of the IB squad and REACT Guild. He is sincere, hardworking and great attitude towards learning. He completes his work enthusiastically. Thank you for the great work Naga Veera.",
  },
];

function Testimonials() {
  return (
    <TestimonialSection id="testimonials">
      <h5>What i got</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        spaceBetween={100}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {testimonialsData.map((review) => {
          return (
            <SwiperSlide className="testimonial" key={review.id}>
              <ClientAvatar>
                <img src={review.avatar} alt="reviewerImage" />
              </ClientAvatar>
              <h5 className="client__name">{review.name}</h5>
              <ClientReview>{review.review}</ClientReview>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </TestimonialSection>
  );
}

export default Testimonials;
