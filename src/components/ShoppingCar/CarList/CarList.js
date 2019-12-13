import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addToCar_action,cancel_addToCar_action,count_action} from '../../../store/store.js';

class CarList extends Component {
	render() {
		let carList=this.props.carList;
		return (
			<div className="CarList-list">
				{
					carList.length>0?
					carList.map((item,index)=>{
						return (
							<div className="list-item" key={index}>
								<div className="check-box">
									<span className="check-one"></span>
								</div>
								<div className="pic">
									<img src={item.pic} alt=""/>
								</div>	
								<div className="text">
									<p>{item.name}</p>
									<p className="price">￥{item.price}</p>
								</div>
								<div className="btn">
									
										<span className="ope" onClick={()=>{this.props.countFn(-1,item)}}>-</span>
										<span>{item.count}</span>
										<span className="ope" onClick={()=>{this.props.countFn(1,item)}}>+</span>
									
								</div>	
							</div>
						)
					})

					:<div className="empty">购物车空空如也!!!</div>
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
			},
			countFn(num,item){//++ -- action
				dispatch(count_action(num,item))

			}

		}
	}
)(CarList)



