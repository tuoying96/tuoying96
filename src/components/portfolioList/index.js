import React, { Component } from 'react';
import styles from './portfolio.module.scss';
import { Link } from 'react-router-dom';

export default ({ dataSource }) =>{
    return <div className={ styles.portfoliolist }>
        <ul>
            {
                /** iterate our data */
                
                dataSource && dataSource.map(item=>
                    <li key={item.id}>
                       <Link to={ `/portfolio/${item.id}` }>
                            <div className={ styles.cover }>
                            <img src = {require("../../assets/images/portfolio/id" + item.id + ".jpg")}/>
                            </div>
                            <div className={styles.brief}>
                                <h3>{item.title}</h3>
                                <p>{item.brief}</p>
                                <p>{item.address}</p>
                            </div>                       
                       </Link>
                    </li>
                )
            }
        </ul>
    </div>
}