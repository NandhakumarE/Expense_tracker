import React from "react";
import { NavLink } from "react-router-dom";
import MainExpenseLogo from "../../asset/MainExpenseLogo";
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="header">
                <div>Expense Tracker</div>
            </div>
            <div className="main">
                <div className="home-content">
                    <h1 className="home-content-title">Track Your Expenses with Our App </h1>
                    <h1 className="home-content-title">Simplify Your <span className="hightlight">Finances</span></h1>
                    <p className="home-content-subtitle">An expense tracker app is a powerful tool that can help you take control of your finances. With just a few taps, you can track all of your expenses, including your bills, groceries, entertainment, and more. </p>
                    <p className="home-content-subtitle">This app can also help you set up a budget, monitor your spending, and alert you when you're close to reaching your limits. </p>
                    <NavLink to="expense-tracker" className="home-content-btn">Go To Expense Tracker</NavLink>
                    {/* <a href="/expense" className="home-content-btn">Go To Expense Tracker</a> */}
                </div>
                <div className="home-img">
                    {/* <img src={Logo} alt="" srcset="" /> */}
                   <MainExpenseLogo/>
                </div>
            </div>
        </div>
    );
}

export default Home;