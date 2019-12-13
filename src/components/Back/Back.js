import React, { Component } from 'react'
import {withRouter} from "react-router";

class Back extends Component {
	render() {
		return (
			<div className="back-page" onClick={()=>{this.props.history.go(-1)}}>
				<span>&lt;</span>点击返回上一页
			</div>
		)
	}
}
export default withRouter(Back)

