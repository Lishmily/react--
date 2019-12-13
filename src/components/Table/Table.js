import React, { Component } from 'react';
import Back from "../Back/Back.js";
import Axios from 'axios';

import { Pagination } from 'antd';

export default class Table extends Component {
	constructor() {
		super();
		this.state = {
			page: 1,
			count: 5,
			pageList: []
		}
	}


	pageFn = (page) => {
		this.setState({
			page: this.state.page+1
		}, () => {
			Axios.post("/getData", { page: this.state.page, count: 5 }).then(res => {
				this.setState({
					pageList: res.data.pageList
				})
			})
		})


	}
	componentDidMount() {
		Axios.post("/getData", { page: 1, count: 5 }).then(res => {
			this.setState({
				pageList: res.data.pageList
			})
		})

	}
	render() {
		return (
			<div className="table-page">

				<div className="back">
					<Back></Back>
				</div>
				{/* table组件 */}
				<table cellSpacing="1">
					<thead>
						<tr>
							<th>ID</th>
							<th>姓名</th>
							<th>年龄</th>
							<th>地址</th>
						</tr>
					</thead>
					<tbody>
						{this.state.pageList.map((item, index) => {
							return (
								<tr key={index}>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.age}</td>
									<td>{item.address}</td>
								</tr>
							)
						})}


					</tbody>

				</table>
				<div className="paganition">
					<Pagination total={500} defaultPageSize={this.state.count} size="" onChange={() => { this.pageFn(this.state.page) }} />
				</div>
			</div>
		)
	}
}
