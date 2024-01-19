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
import { getNewsList } from '../actions/MainAction';

const PartnersContainer = () => {

    const swiperNewsRef = useRef(null);

    const dispatch = useDispatch()
    const newsListArr = useSelector(state => state.Data.newsListArr)
    useEffect(() => {
        dispatch(getNewsList())
    }, [dispatch])

    console.log(newsListArr);
    useEffect(() => {
        const interval = setInterval(() => {
            if (swiperNewsRef.current && swiperNewsRef.current.swiper) {
                swiperNewsRef.current.swiper.slideNext();
            }
        }, 8000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className='partners_container container'>
            <Swiper

                ref={swiperNewsRef}
                slidesPerView={4}
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
                    768: {
                        slidesPerView: 3,

                    },
                    1180: {
                        slidesPerView: 4,

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
                    newsListArr?.map((data, i) => {
                        return (
                            <>
                                {
                                    data.is_active ?
                                        <SwiperSlide className='partners_card'>
                                            <div className="partners_card_img">
                                                <img src={data.image} alt="" />
                                            </div>
                                        </SwiperSlide> : null
                                }

                            </>

                        )
                    })
                }





            </Swiper>
            <div className="news_swiper_btns">
                <div className="swiper_button slider_prev_btn1">
                    <IoIosArrowBack />
                </div>
                <div className="swiper_button slider_next_btn1">
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    )
}

export default PartnersContainer