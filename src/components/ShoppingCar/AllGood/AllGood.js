import React, { Component } from 'react'
import Axios from 'axios';
import { connect } from 'react-redux';
import { addToCar_action,cancel_addToCar_action} from '../../../store/store.js';

class AllGood extends Component {
	constructor(){
		super();
		this.state={
			list:[]
		}
	}
	componentDidMount(){
		Axios.post("/carList").then(res=>{
			this.setState({
				list:res.data.carList
			})
		})
	}
	render() {
		return (
			<div className="AllGood-list">
				{
					this.state.list.length>0&&
					this.state.list.map((item,index)=>{
						return (
							<div className="list-item" key={index}>
								<div className="pic">
									<img src={item.pic} alt=""/>
								</div>	
								<div className="text">
									<p>{item.name}</p>
									<p className="price">￥{item.price}</p>
								</div>
								<div className="ope">
									{
										this.props.carList.find((i)=>{return i.id===item.id})?
										<span onClick={()=>{this.props.cancel_addToCar(item.id)}}>取消加入</span>:
										<span onClick={()=>{this.props.addToCar(item)}}>加入购物车</span>
									}
								</div>	
							</div>
						)
					})	
				}	
			</div>
		)
	}
}

export default connect(
	(state)=>{
		return {
			carList:state.carList
		}

	},
	(dispatch)=>{
		return {
			addToCar(item){//加入购物车
				dispatch(addToCar_action(item))
			},
			cancel_addToCar(id){//取消加入购物车
				dispatch(cancel_addToCar_action(id))
			}

		}
	}
)(AllGood)


