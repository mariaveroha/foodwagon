import React, { useState } from "react";
import s from './Work.module.css'
import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import icon4 from '../../images/icon4.png'
import Card from "./Card";

const Work = () => {
    const [card, setCard] = useState([
        { id: 1, img: icon1, name: 'Select location', desc: 'Choose the location where your food will be delivered.' },
        { id: 2, img: icon2, name: 'Choose order', desc: 'Check over hundreds of menus to pick your favorite food' },
        { id: 3, img: icon3, name: 'Pay advanced', desc: "It's quick, safe, and simple. Select several methods of payment" },
        { id: 4, img: icon4, name: 'Enjoy meals', desc: 'Food is made and delivered directly to your home.' },
    ])
    return (
        <div className={s.work}>
            <div className={s.content}>
                <p className={s.title}>How does it work</p>
                <div className={s.list}>
                    {
                        card.map((card) =>
                            <Card img={card.img} name={card.name} desc={card.desc} key={card.id} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Work