import React, { useState } from "react";
import s from './Featured.module.css'
import dish from '../../images/dish.png'
import dish2 from '../../images/dish2.png'
import dish3 from '../../images/dish3.png'
import dish4 from '../../images/dish4.png'
import dish5 from '../../images/dish5.png'
import dish6 from '../../images/dish6.png'
import dish7 from '../../images/dish7.png'
import dish8 from '../../images/dish8.png'
import rest1 from '../../images/rest1.png'
import rest2 from '../../images/rest2.png'
import rest3 from '../../images/rest3.png'
import rest4 from '../../images/rest4.png'
import rest5 from '../../images/rest5.png'
import rest6 from '../../images/rest6.png'
import rest7 from '../../images/rest7.png'
import rest8 from '../../images/rest8.png'
import Restaurant from "./Restaurant";
const Featured = () => {

    const [list, setList] = useState([
        { id: 1, sale: '20% off', img: dish, rest: rest1, name: 'Foodworld', star: '46', open: 'Opens tomorrow', time: 'fast' },
        { id: 2, sale: '15% off', img: dish2, rest: rest2, name: 'Pizzahub', star: '40', open: 'Opens tomorrow', time: 'fast' },
        { id: 3, sale: '10% off', img: dish3, rest: rest3, name: 'Donuts hut', star: '20', open: 'Open Now', time: 'fast' },
        { id: 4, sale: '15% off', img: dish4, rest: rest4, name: 'Donuts hut', star: '50', open: 'Open Now', time: 'fast' },
        { id: 5, sale: '10% off', img: dish5, rest: rest5, name: 'Ruby Tuesday', star: '26', open: 'Open Now', time: 'fast' },
        { id: 6, sale: '25% off', img: dish6, rest: rest6, name: 'Kuakata Fried Chicken', star: '53', open: 'Open Now', time: 'fast' },
        { id: 7, sale: '10% off', img: dish7, rest: rest7, name: 'Red Square', star: '45', open: 'Open Now', time: 'fast' },
        { id: 8, sale: '10% off', img: dish8, rest: rest8, name: 'Taco Bell', star: '35', open: 'Open Now', time: 'fast' },
    ])

    return (
        <div className={s.featured}>
            <div className={s.content}>
                <p className={s.title}>Featured Restaurants</p>
                <div className={s.list}>
                    {
                        list.map((list) =>
                            <Restaurant list={list} key={list.id} />)
                    }
                </div>
                <div className={s.buttonBlock}>
                <button className={s.button}>
                    <span>View All</span>
                    <span className={s.arrow}>&rsaquo;</span>
                </button>
                </div>
              
            </div>
        </div>
    )
}

export default Featured