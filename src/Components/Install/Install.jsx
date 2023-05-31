import React from "react";
import s from './Install.module.css'
import sale from '../../images/priceIcon.png'
import clock from '../../images/clock.png'
import geo from '../../images/geoIcon.png'
import phone from '../../images/phone.png'
import apple from '../../images/Apple.png'
import googlePLay from '../../images/GooglePlay.png'
const Install = () => {
    return (
        <div className={s.container}>
            <div className={s.back}>
                <div className={s.card}>
                    <div className={s.flex}>
                        <img src={sale} className={s.sale}/>
                        <span className={s.text}>Daily
                            Discounts</span>
                    </div>
                    <div className={s.flex}>
                        <img className={s.geo} src={geo} />
                        <span className={s.text}>Live
                            Tracing</span>
                    </div>
                    <div className={s.flex}>
                        <img className={s.clock} src={clock} />
                        <span className={s.text}>Quick
                            Delivery</span>
                    </div>
                </div>
            </div>
            <div className={s.install}>
                <div className={s.content}>
                    <img className={s.phone} src={phone} />
                    <div className={s.block}>
                        <p className={s.title}>Install the app</p>
                        <p className={s.text2}>It's never been easier to order food. Look for the finest discounts and you'll be lost in a world of delectable food.</p>
                        <div className={s.buttons}>
                            <button className={s.button}>
                                <img src={googlePLay} />
                                <div className={s.textButton}>
                                    <p className={s.download}>GET IT ON</p>
                                    <p className={s.store}>Google Play</p>
                                </div>
                            </button>
                            <button className={s.button}>
                                <img src={apple} />
                                <div className={s.textButton}>
                                    <p className={s.download}>Download on the</p>
                                    <p className={s.store}>App Store</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Install