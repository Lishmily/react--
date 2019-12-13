import React, { Component } from 'react'
import Back from "../Back/Back.js";
import {NavLink,Redirect,Route,Switch} from "react-router-dom";
import AllGood from './AllGood/AllGood.js';
import CarList from './CarList/CarList.js';

export default class ShoppingCar extends Component {
	render() {
		return (
			<div className="ShoppingCar-page">
				<div className="back">
					<Back></Back>
				</div>
				{/* 二级路由 */}
				<div className="nav-two">
					<NavLink to="/shoppingCar/allgood">所有商品</NavLink>
					<NavLink to="/shoppingCar/carList">购物车</NavLink>
				</div>
				<Switch>
					<Route path="/shoppingCar/allgood" component={AllGood}></Route>
					<Route path="/shoppingCar/carList" component={CarList}></Route>
					
					<Redirect to="/shoppingCar/allgood"></Redirect>
				</Switch>
			</div>
		)
	}
}
