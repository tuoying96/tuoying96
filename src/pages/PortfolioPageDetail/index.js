import React, { Component }from 'react';
import styles from './portdetail.module.scss';

export default () => {
    return <div className = { styles.wrap }>
        <div className = { styles.box }>
            <div className = { styles.title }>
                <h1>Morro Bay</h1>
                <p>20191229 @ Morro Bay, CA</p>
            </div>
            <section className = { styles.photo }>
                <img src = {require("../../assets/images/portfolio/id1.jpg")}/>
                <p>CANON 760D</p>
                <p>f/3.5, 1/160, ISO 100</p>
                <p>Favorite sunset in State Route 1</p>
            </section>
            <section className = {styles.contect}>
            </section>

        </div>
    </div>
}