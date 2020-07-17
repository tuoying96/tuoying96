import React, { Component }from 'react';
import styles from './portfolio.module.scss';
import PortfolioList from '../../components/portfolioList';
import portData from '../portfolio.json';

export default () => {
    return <div className={ styles.wrap }>
        <div className={ styles.title }>
            <h3>My Photo Book</h3>
            <p>Every Stunning Monment in My Life</p>
        </div>
        <section>
            <PortfolioList dataSource = { portData.data}/>
        </section>
        
    </div>
} 