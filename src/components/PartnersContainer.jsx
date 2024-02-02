import React, { useEffect, useRef } from 'react'
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LiaCalendarSolid } from "react-icons/lia"
import { useDispatch, useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import { getNewsList, getPartnersList } from '../actions/MainAction';

const PartnersContainer = ({ partnersListArr }) => {

    const swiperPartnersRef = useRef(null);


    useEffect(() => {
        const interval = setInterval(() => {
            if (swiperPartnersRef.current && swiperPartnersRef.current.swiper) {
                swiperPartnersRef.current.swiper.slideNext();
            }
        }, 8000);

        return () => clearInterval(interval);
    }, []);


    console.log(partnersListArr);


    return (
        <div className='partners_container container'>
            <Swiper

                ref={swiperPartnersRef}
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                keyboard={{
                    enabled: true,
                }}
                grabCursor
                autoplay={{
                    delay: 3000
                }}
                breakpoints={{
                    200: {
                        slidesPerView: 1,

                    },
                    576: {
                        slidesPerView: 2,

                    },
                    // 768: {
                    //     slidesPerView: 3,

                    // },
                    1180: {
                        slidesPerView: 3,

                    },
                }}


                navigation={{
                    nextEl: ".slider_next_btn1",
                    prevEl: ".slider_prev_btn1"
                }}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper news_slider_card_container"
            >


                {
                    partnersListArr?.map((data, i) => {
                        return (
                            <>
                                {
                                    
                                        <SwiperSlide key={i} className='partners_card'>

                                            <img src={data.image} alt="" />

                                        </SwiperSlide> 
                                }

                            </>

                        )
                    })
                }





            </Swiper>
            {/* <div className="news_swiper_btns">
                <div className="swiper_button slider_prev_btn1">
                    <IoIosArrowBack />
                </div>
                <div className="swiper_button slider_next_btn1">
                    <IoIosArrowForward />
                </div>
            </div> */}
        </div>
    )
}

export default PartnersContainer