import React, { Component } from 'react';
import Back from "../Back/Back.js";
//import reactLoadable from "react-loadable"

//懒加载
// let Home=reactLoadable({
// 	loader:()=>import ('../components/Home/Home.js'),
// 	loading:()=><div className="loading">loading...</div>

// })
export default class Loadable extends Component {
	render() {
		return (
			<div>
				{/* 点击返回上一页组件 */}
				<div className="back">
					<Back></Back>
				</div>
				
				懒加载组件

			</div>
		)
	}
}
