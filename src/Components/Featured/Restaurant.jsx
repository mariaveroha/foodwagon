import React from "react";
import s from './Restaurant.module.css'
import star from '../../images/star.png'
import sale from '../../images/sale.png'
import time from '../../images/time.png'
const Restaurant = (props) => {
    return (
        <div className={s.item}>
            <img src={props.list.img} className={s.img} />
            <div className={s.abs}>
                <div className={s.blockSale}>
                    <img src={sale} />
                    <span className={s.sale}>{props.list.sale}</span>
                </div>
                <div className={s.blockTime}>
                    <img src={time} />
                    <span>{props.list.time}</span>
                </div>
            </div>
            <div className={s.f}>
                <img className={s.rest} src={props.list.rest} />
                <div>
                    <p className={s.name}>{props.list.name}</p>
                    <div className={s.flex}>
                        <img className={s.star} src={star} />
                        <span className={s.number}>{props.list.star}</span>
                    </div>
                </div>
            </div>
            {
                props.list.open === 'Opens tomorrow' ? <button className={s.button}>{props.list.open}</button> : <button className={s.buttonGreen}>{props.list.open}</button>
            }
        </div>
    )
}

export default Restaurant