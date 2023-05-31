import React, { useState } from "react";
import s from './Search.module.css'
import slider1 from '../../images/slider1.png'
import slider2 from '../../images/slider2.png'
import slider3 from '../../images/slider3.png'
import slider4 from '../../images/slider4.png'
import slider5 from '../../images/slider5.png'
import slider6 from '../../images/slider6.png'
import Dish from "./Dish";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Search = () => {
    const [list, setList] = useState([
        { id: 1, name: 'Pizza', img: slider1 },
        { id: 2, name: 'Burger', img: slider2 },
        { id: 3, name: 'Noodles', img: slider3 },
        { id: 4, name: 'Sub-sandiwch', img: slider4 },
        { id: 5, name: 'Chowmein', img: slider5 },
        { id: 6, name: 'Steak', img: slider6 },
    ])
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 682,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
        ]
    };
    return (
        <div className={s.search}>
            <div className={s.content}>
                <div className={s.flex}>
                    <p className={s.title}>Search by Food</p>
                    <div>
                        <button className={s.button}>
                            <span>View All</span>
                            <span>&rsaquo;</span>
                        </button>
                        <div className='prevL'></div>
                        <div className='prevR'></div>
                    </div>
                </div>
                <div className={s.list}>

                </div>
                <Slider {...settings}>
                    <div>
                        {
                            list.slice(0, 1).map((list) =>
                                <Dish list={list} key={list.id} />)
                        }
                    </div>
                    <div>
                        {
                            list.slice(1, 2).map((list) =>
                                <Dish list={list} key={list.id} />)
                        }
                    </div>
                    <div>
                        {
                            list.slice(2, 3).map((list) =>
                                <Dish list={list} key={list.id} />)
                        }
                    </div>
                    <div>
                        {
                            list.slice(3, 4).map((list) =>
                                <Dish list={list} key={list.id} />)
                        }
                    </div>
                    <div>
                        {
                            list.slice(4, 5).map((list) =>
                                <Dish list={list} key={list.id} />)
                        }
                    </div>
                    <div>
                        {
                            list.slice(5, 6).map((list) =>
                                <Dish list={list} key={list.id} />)
                        }
                    </div>
                    <div>
                        {
                            list.slice(5, 6).map((list) =>
                                <Dish list={list} key={list.id} />)
                        }
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Search



const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={
            "L" +
            (currentSlide === 0 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
    > &lsaquo;
    </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={
            "R" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
    > &rsaquo;
    </button>
);