import styled from "styled-components";

export const TestimonialSection = styled.section`
    & .container.testimonials__container{
        width: 40%;
        padding-bottom: 2rem;
        @media  screen and (max-width:1024px){
            width: 60%;
        }
        @media  screen and (max-width:600px){
            width: var(--container-width-sm);
        }

    }
    & .testimonials__container .testimonial{
        background: var(--color-bg-variant);
        text-align: center;
        padding: 2rem 0;
        border-radius: 2rem;
        user-select: none;
    }
    & .testimonials__container .swiper-button-next:after,
    & .testimonials__container .swiper-button-prev:after {
        font-size: 1.5rem !important;
    }
    & .testimonials__container .swiper-horizontal>.swiper-pagination-bullets,
    & .testimonials__container .swiper-pagination-bullets.swiper-pagination-horizontal,
    & .testimonials__container .swiper-pagination-custom, .swiper-pagination-fraction {
        bottom: -1px !important;
    }
    & .testimonials__container .swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
        background-color: #4db5ff !important;
    
    }
   


`;

export const ClientAvatar = styled.div`
    width: 4rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 1rem;
    border: 0.4rem solid var(--color-primary-variant);
`;
export const ClientReview = styled.small`
    color: var(--color-light);
    font-weight: 300;
    display: block;
    width: 80%;
    min-height: 100px;
    margin: 0.8rem auto 0;
    @media  screen and (max-width:600px){
        width: var(--container-width-sm);
    }

`;