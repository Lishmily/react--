import React, { Component } from 'react'
import { Switch ,Redirect,Route} from 'react-router-dom'

import Header from '../components/Header/Header.js'
import MySwiper from '../components/MySwiper/MySwiper.js'
import  Table  from '../components/Table/Table.js'
import MyBscroll from '../components/MyBscroll/MyBscroll.js'
import Home from '../components/Home/Home.js'
import Login from '../components/Login/Login.js'
import Loadable from '../components/Loadable/Loadable.js'
import Detail from '../components/Detail/Detail.js'
import Collect from '../components/Collect/Collect.js'
import CollectDetail from '../components/Collect/CollectDetail.js'
import ShoppingCar from '../components/ShoppingCar/ShoppingCar.js'



export default class Router extends Component {
	render() {
		return (
			<Switch>
				<Route path="/home" component={Home}></Route>
				<Route path="/header" component={Header}></Route>
				<Route path="/myswiper" component={MySwiper}></Route>
				<Route path="/myTable" component={Table}></Route>
				<Route path="/BScroll" component={MyBscroll}></Route>
				<Route path="/login" component={Login}></Route>
				<Route path="/loadable" component={Loadable}></Route>
				<Route path="/collect" component={Collect}></Route>
				<Route path="/collectDetail" component={CollectDetail}></Route>
				<Route path="/shoppingCar" component={ShoppingCar}></Route>

				<Route path="/detail" component={Detail}></Route>

				

				<Redirect to="/home"></Redirect>
				
			</Switch>
		)
	}
}
