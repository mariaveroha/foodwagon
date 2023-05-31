import React, { useState } from "react";
import s from './Popular.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import item1 from '../../images/item1.png'
import item2 from '../../images/item2.png'
import item3 from '../../images/item3.png'
import item4 from '../../images/item4.png'
import item5 from '../../images/item5.png'
import Sales from "../Sales/Sales";
import Item from "./Item";
const Popular = () => {
    const [item, setItem] = useState([
        { id: 1, img: item5, name: "Cheese Burger", geo: 'Burger Arena', cost: '$3.88' },
        { id: 2, img: item4, name: "Toffe’s Cake", geo: 'Top Sticks', cost: '$4.00' },
        { id: 3, img: item3, name: "Dancake", geo: 'Cake World', cost: '$1.99' },
        { id: 4, img: item2, name: "Crispy Sandwitch", geo: 'Fastfood Dine', cost: '$3.00' },
        { id: 5, img: item1, name: "Thai  Soup", geo: 'Foody man', cost: '$2.79' },
    ])
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 1412,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 967,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={s.popular}>
            <div className={s.content}>
                <p className={s.title}>Popular items</p>
                <Slider {...settings}>
                    <div>
                        {
                            item.slice(0, 1).map((item) =>
                                <Item item={item} key={item.id} />)
                        }
                    </div>
                    <div>
                        {
                            item.slice(1, 2).map((item) =>
                                <Item item={item} key={item.id} />)
                        }
                    </div>
                    <div>
                        {
                            item.slice(2, 3).map((item) =>
                                <Item item={item} key={item.id} />)
                        }
                    </div>
                    <div>
                        {
                            item.slice(3, 4).map((item) =>
                                <Item item={item} key={item.id} />)
                        }
                    </div>
                    <div>
                        {
                            item.slice(4, 5).map((item) =>
                                <Item item={item} key={item.id} />)
                        }
                    </div>
                    <div>
                        {
                            item.slice(4, 5).map((item) =>
                                <Item item={item} key={item.id} />)
                        }
                    </div>
                </Slider>
            </div>

        </div>
    )
}

export default Popular



const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={
            "prev" +
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
            "next" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
    > &rsaquo;
    </button>
);