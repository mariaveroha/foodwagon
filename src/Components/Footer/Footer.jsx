import React from "react";
import s from './Footer.module.css'
import inst from '../../images/inst.png'
import twitter from '../../images/twitter.png'
import facebook from '../../images/facebook.png'
const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.content}>
                <p className={s.title}>Our top cities</p>
                <div className={s.cities}>
                    <div>
                        <p>San Francisco</p>
                        <p>Miami</p>
                        <p>San Diego</p>
                        <p>East Bay</p>
                        <p>Long Beach</p>
                    </div>
                    <div>
                        <p>Los Angeles</p>
                        <p>Washington DC</p>
                        <p>Seattle</p>
                        <p>Portland</p>
                        <p>Nashville</p>
                    </div>
                    <div>
                        <p>New York City</p>
                        <p>Orange County</p>
                        <p>Atlanta</p>
                        <p>Charlotte</p>
                        <p>Denver</p>
                    </div>
                    <div>
                        <p>Chicago</p>
                        <p>Phoenix</p>
                        <p>Las Vegas</p>
                        <p>Sacramento</p>
                        <p>Oklahoma City</p>
                    </div>
                    <div>
                        <p>Columbus</p>
                        <p>New Mexico</p>
                        <p>Albuquerque</p>
                        <p>Sacramento</p>
                        <p>New Orleans</p>
                    </div>
                </div>
                <div className={s.info}>
                    <div className={s.columns}>
                        <div>
                            <p className={s.title}>Company</p>
                            <p className={s.item}>About us</p>
                            <p className={s.item}>Team</p>
                            <p className={s.item}>Careers</p>
                            <p className={s.item}>Blog</p>
                        </div>
                        <div>
                            <p className={s.title}>Contact</p>
                            <p className={s.item}>Help & Support</p>
                            <p className={s.item}>Partner with us </p>
                            <p className={s.item}>Ride with us</p>
                        </div>
                        <div>
                            <p className={s.title}>Legal</p>
                            <p className={s.item}>Terms & Conditions</p>
                            <p className={s.item}>Refund & Cancellation</p>
                            <p className={s.item}>Privacy Policy</p>
                            <p className={s.item}>Cookie Policy</p>
                        </div>
                    </div>
                    <div>
                        <p className={s.follow}>Follow Us</p>
                        <div className={s.icons}>
                            <img className={s.icon} src={inst} />
                            <img className={s.icon} src={facebook} />
                            <img className={s.icon} src={twitter} />
                        </div>
                        <p className={s.receive}>Receive exclusive offers in your mailbox</p>
                        <div className={s.block}>
                            <input className={s.input} placeholder="Enter Your email" />
                            <button className={s.button}>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className={s.right}>
                    <p className={s.copyright}>All rights Reserved</p>
                    <p className={s.copyright}>	&#169;</p>
                    <p className={s.company}>Your Company, 2021</p>
                </div>
            </div>

        </div>
    )
}

export default Footer