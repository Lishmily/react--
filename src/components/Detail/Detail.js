import React, { Component } from 'react'
import Back from "../Back/Back.js";

export default class Detail extends Component {
	
	render() {
		let item=this.props.history.location.state//接受跳转详情页带来的参数
		return (
			<div className="detail-page">
				<div className="back">
					<Back></Back>
				</div>

				<div className="scroll-content">
						
								<div className="scroll-item">
									<p className="name">name:{item.name}</p>
									<p>age:{item.age}</p>
								</div>

					</div>
				
			</div>
		)
	}
}
