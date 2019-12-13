import React, { Component } from 'react'
import  { NavLink } from "react-router-dom"

export default class Home extends Component {
	render() {
		return (
			<div className="home-page">
				<p className="title">react案例</p>
				<div className="nav">
					<p><NavLink to="/header">Header组件</NavLink>  <span>&gt;</span></p>
					<p><NavLink to="/myswiper">swiper组件</NavLink>  <span>&gt;</span></p>
					<p><NavLink to="/myTable">Table组件</NavLink>  <span>&gt;</span></p>
					<p><NavLink to="/BScroll">上拉加载 下拉刷新</NavLink>  <span>&gt;</span></p>
					<p><NavLink to="/login">login组件</NavLink>  <span>&gt;</span></p>
					<p><NavLink to="/loadable">懒加载组件</NavLink>  <span>&gt;</span></p>
					<p><NavLink to="/collect">收藏&取消收藏组件</NavLink>  <span>&gt;</span></p>
					<p><NavLink to="/shoppingCar">购物车组件</NavLink>  <span>&gt;</span></p>

				</div>

			</div>

			
		)
	}
}
