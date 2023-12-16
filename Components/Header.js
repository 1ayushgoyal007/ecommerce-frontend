import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import MenuData  from '../Data/MenuData';
import Link from 'next/link';

const Header = () => {

  const locale = 'en';
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {

    const timer = setInterval(() => { // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    }
  }, []);

  const year = new Date().getFullYear();
  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${today.toLocaleDateString(locale, { month: 'long' })}${today.getDate()},${year} \n\n`;

  const hour = today.getHours();
  //const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
  const [show, setShow] = useState(false);
  const [subsFlag, setSubsFlag] = useState(false);
  const [search, setSearch] = useState();
  const [subscribeData, setSubscribeData] = useState({
    name: "",
    email: ""
  });
  const handleClose = () => {
    setShow(false);
    setSubsFlag(false);

    setSearch();
  };
  const handleShow = () => {
    setShow(true);
    setSearch();
  };
  const subsFlagShow = () => {
    setSubsFlag(true);
    // setSearch();
  };

  return (

    <>
      <div className="wrapper-fluid wrapper-navbar pt-3" id="wrapper-navbar">
        <div className="container">
          <div className="row" >
            <div className="col-2 col-md-4 text-left">
              <span className="navbar-toggler-new d-block d-sm-block d-md-none d-lg-none d-xl-none mt-3 w-100">
                <i className="fa fa-bars"></i>
              </span>
            </div>
            <div className="col-10 col-md-4 text-center pt-2 pb-2">

              <div className="date-and-time">
                {date}
                <div className="date-and-time-sep"></div>
              </div>
            </div>
            <div className="col-12 col-md-4 text-center text-sm-right pt-3">
              <ul className="top-menu">
                <li>
                  <Link href="" onClick={handleShow}> <i class="fa fa-search" aria-hidden="true"></i></Link>
                </li>
                {/*<li><Link href="#" className="lrm-login">Login</Link></li>*/}
                <li onClick={subsFlagShow}><Link href="#" className="shownewsletterbox">Subscribe</Link></li>
              </ul>
              <ul style={{ listStyleType: "none" }}>
                <li className="social">
                  <div className="social-icons icon-circle pull-right" style={{ paddingRight: '15px' }}>
                    <a href="https://www.facebook.com/IllustratedDailyNews" target="_blank"><i className="fa fa-facebook"></i></a>
                    <a href="http://twitter.com/I_DailyNews" target="_blank"><i className="fa fa-twitter"></i></a>
                    <a href="https://youtube.com/@illustrateddailynews3802" target="_blank"><i className="fa fa-youtube"></i></a>
                    <a href="https://www.instagram.com/illustrateddailynews31/?igshid=ZDdkNTZiNTM%3D" target="_blank"><i className="fa fa-instagram"></i></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-toggleable-md">
          <div className="container">
            <div className="col-md-12">
              <div id="navbarNavDropdown" style={{ justifyContent: 'center' }} className="d-none d-sm-none navbar-collapse">
                <ul id="main-menu" className="navbar-nav">
                  <li className="menu-item"><a title="Home" href="/" className="nav-link"><span>Home</span></a></li>
                  <li className="menu-item"><a title="" href={"/category/india"} className="nav-link"><span>India</span></a></li>
                  <li className="menu-item"><a title="" href={"/category/world"} className="nav-link"><span>World</span></a></li>
                  <li className="menu-item"><a title="" href={"/category/business"} className="nav-link"><span>Business</span></a></li>
                  <li className="menu-item"><a title="" href={"/category/sports"} className="nav-link"><span>Sports</span></a></li>
                  <li className="menu-item"><a title="" href={"/category/opinion"} className="nav-link"><span>Opinion</span></a></li>
                  <li className="menu-item"><a title="" href={"/category/exclusive"} className="nav-link"><span>Exclusive</span></a></li>
                  <li className="menu-item"><a title="" href={"/category/entertainment"} className="nav-link"><span>Entertainment</span></a></li>
                  <li className="menu-item"><a title="" href={"/category/defence"} className="nav-link"><span>Defense</span></a></li>
                  <li className="menu-item"><a title="" href={"/category/lifestyle"} className="nav-link"><span>Health & Lifestyle</span></a></li>
                  <li className="menu-item dropdown">
                    <a title="" href="#" className="nav-link"><span>More</span><i className="fa fa-angle-down"></i></a>
                    <ul className=" dropdown-menu" role="menu">
                      <li className="menu-item"><a title="" href={"/category/tech"} className="nav-link"><span>Tech</span></a></li>
                      <li className="menu-item"><a title="" href={"/category/brandconnect"} className="nav-link"><span>Brand connect</span></a></li>
                      <li className="menu-item"><a title="" href={"/blog"} className="nav-link"><span>Blog</span></a></li>
                      <li className="menu-item"><a title="" href={"/photo"} className="nav-link"><span>Photo gallery</span></a></li>
                      <li className="menu-item"><a title="" href="https://youtube.com/@illustrateddailynews3802" target="_blank" className="nav-link"><span>Video gallery</span></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </nav>
      </div>

    </>
  )
}

export default Header;
