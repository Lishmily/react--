import React, { Component } from 'react';
import propTypes from 'prop-types';


import Back from "../Back/Back.js";
// import  { Switch,Redirect,Route } from "react-router-dom"

export default class Header extends Component {
	static defaultProps={
		title:"支付宝首页"
	}
	static propTypes={
		title:propTypes.string

	}
	render() {
		return (
			<div className="header-page">
				<div className="back">
					<Back></Back>
				</div>
					{/* header组件 */}
					<div className="one-box">
						<p>one:自定义属性传值</p>
						<div className="one-inner">
							<span>返回</span>
							<span>{this.props.title}</span>
							<span>操作</span>
						</div>
					</div>
					
			</div>
		)
	}
}
