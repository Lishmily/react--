import React, { Component } from 'react';
import Back from "../Back/Back.js";

export default class MySwiper extends Component {
	render() {
		return (
			<div className="mySwiper-page">
				<div className="back">
					<Back></Back>
				</div>
				swiper组件
			</div>
		)
	}
}
