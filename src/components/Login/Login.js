import React, { Component } from 'react'
import Back from "../Back/Back.js";

export default class Login extends Component {
	render() {
		return (
			<div>
				{/* 点击返回上一页组件 */}
				<div className="back">
					<Back></Back>
				</div>
				
				login组件
			</div>
		)
	}
}
