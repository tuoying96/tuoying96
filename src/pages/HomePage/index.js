import React, { Component }from 'react';
import styles from './home.module.scss';

export default () =>{
    return <div className={ styles.wrap}> 
    {/** brief */}
    <section className = {styles.brief}>
        <img src = {require("../../assets/images/home.jpg")} />
        <h2>Live Developer</h2>
        <ul>
            <li>Computer Science</li>
            <li>Web Developer</li>
            <li>Amateur Photographer</li>
        </ul>
        <p>Thanks for coming.</p>
        <p> Contact me at tuo.y@northeastern.edu</p>
        

    </section>

    </div>
}  
