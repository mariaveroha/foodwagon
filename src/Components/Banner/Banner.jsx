import React, { useState } from "react";
import s from './Banner.module.css'
import soup from '../../images/soup.png'
import menu1 from '../../images/menu1.png'
import menu2 from '../../images/menu2.png'
import menu3 from '../../images/menu3.png'
import menu4 from '../../images/menu4.png'
import bike from '../../images/bike.png'
import loop from '../../images/loop.png'
import bag from '../../images/bag.png'
import Sales from "../Sales/Sales";

const Banner = () => {
    const [active, setActive] = useState(true)

    const [sales, setSales] = useState([
        { id: 1, image: menu1, sale: '15', name: 'Greys Vage', remain: '6 Days Remaining' },
        { id: 2, image: menu2, sale: '10', name: 'Greys Vage', remain: '6 Days Remaining' },
        { id: 3, image: menu3, sale: '25', name: 'Greys Vage', remain: '7 Days Remaining' },
        { id: 4, image: menu4, sale: '20', name: 'Greys Vage', remain: '8 Days Remaining' },
    ])
    return (
        <div className={s.banner}>
            <div className={s.content}>
                <p className={s.title}>Are you starving?</p>
                <div className={s.shadow}></div>
                <img className={s.img} src={soup} />
                <p className={s.subtitle}> Within a few clicks, find meals that are accessible near you</p>
                <div className={s.card}>
                    <div className={s.flex}>
                        <button className={active ? s.buttonD : s.buttonP} onClick={() => (setActive(true))}>
                            <img className={!active ? s.bike : ''} src={bike} />
                            <span className={active ? s.buttonText : s.pickup}>Delivery</span>
                        </button>
                        <button className={active ? s.buttonP : s.buttonD} onClick={() => (setActive(false))}>
                            <img src={bag} />
                            <span className={active ? s.pickup : s.buttonText}>Pickup</span>
                        </button>
                    </div>
                    <div className={s.block}>
                        <input className={s.input} placeholder="Enter Your Address" />
                        <button className={s.buttonF}>
                            <img src={loop} />
                            <span className={s.find}>Find Food</span>
                        </button>
                    </div>

                </div>
            </div>
            <div className={s.sales}>
                {
                    sales.map((sales) =>
                        <Sales name={sales.name} image={sales.image} remain={sales.remain} sale={sales.sale} key={sales.id} />)
                }
            </div>
        </div>
    )
}

export default Banner