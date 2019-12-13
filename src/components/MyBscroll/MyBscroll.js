import React, { Component } from 'react'
import Axios from 'axios';
import BScroll from "better-scroll";
import Back from "../Back/Back.js";

export default class MyBscroll extends Component {
	constructor() {
		super();
		this.state = {
			pageList: [],
			page: 1
		}
	}
	toDetail=(item)=>{
		this.props.history.push({
			pathname:"/detail",
			state:item
		})
	}
	componentDidMount() {
		Axios.post("/getData", { page: 1, count: 20 }).then(res => {
			this.setState({
				pageList: res.data.pageList
			})
		})

		//实例化scroll-box
		let bs = new BScroll(".scroll-box", {
			click: true,//开启点击事件
			pullDownRefresh: true,//开启下拉刷新
			pullUpLoad: true//开启上拉加载
		})
		// 下拉刷新
		bs.on("pullingDown", () => {
			this.setState({
				page: this.state.page + 1
			}, () => {
				Axios.post("/getData", { page: this.state.page, count: 20 }).then(res => {
					this.setState({
						pageList: res.data.pageList
					}, () => {
						bs.finishPullDown()//结束下拉刷新
						bs.refresh()//更新dom结构
					})
				})
			})

		})

		//上拉加载
		bs.on("pullingUp", () => {
			this.setState({
				page: this.state.page + 1
			}, () => {
				Axios.post("/getData", { page: this.state.page, count: 20 }).then(res => {
					this.setState({
						pageList: [...res.data.pageList, ...this.state.pageList]
					}, () => {
						bs.finishPullUp()//结束下拉刷新
						bs.refresh()//更新dom结构
					})
				})
			})


		})
	}
	render() {
		return (
			<div className="MyBscroll-page">
				<div className="back">
					<Back></Back>
				</div>

				{/* better-scroll */}
				<div className="scroll-box">
					<div className="scroll-content">

						{this.state.pageList.map((item, index) => {
							return (
								<div key={index} className="scroll-item" onClick={()=>{this.toDetail(item)}}>
									<p className="name">name:{item.name}</p>
									<p>age:{item.age}</p>

								</div>

							)
						})}
					</div>
				</div>

			</div>

		)
	}
}
