import React, { Component }from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import {Link, Route, withRouter} from 'react-router-dom';
import HomePage from './HomePage';
import PortfolioPage from './PortfolioPage';
import PortfolioPageDetail from './PortfolioPageDetail';


class App extends Component {
  render(){
    const { location } = this.props;
    return (
      <div className = {styles.App}>

        
        {/* header */}
        <header className = {styles.header}>
          <div className = {styles.box}>
            <Link to = "/"><div className = {styles.boxleft}>Ying Tuo</div></Link>
            <div className = {styles.boxright}>
              <Link to = "/"><p className = {location.pathname === "/" ? styles.selected: null }>Home</p></Link>
              <Link to = "/about"><p>About</p></Link>
              <Link to = "/portfolio"><p className = {location.pathname === "/portfolio" ? styles.selected: null }>Portfolio</p></Link>
            </div>
          </div>
        </header>

        {/* content */}
        <section className = {styles.content}>
          <Route path = "/" exact component = { HomePage} />
          <Route path = "/portfolio" exact component = { PortfolioPage } />
          <Route path = "/portfolio/:id" exact component = {PortfolioPageDetail} />{/**dynamic route */}


        </section>

        {/* footer */}
        <footer className={styles.footer}>
          <p><b>@2020 Ying Tuo</b></p>
          <p>Northeastern University </p>
          <p>Personal Website @CS5610 Web Development</p>
        </footer>


      </div>
    );
  }
}

export default withRouter(App);
