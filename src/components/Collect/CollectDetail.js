import React, { Component } from 'react'
import {connect} from "react-redux"
import {collect_action, cancel_collect_action} from '../../store/store.js';

class CollectDetail extends Component {
    render() {
        var collectList = this.props.collectList
        return (
            <div className="home-page">
                <div className="header">
                    <span onClick={()=>{ this.props.history.go(-1) }}>&lt;</span>
                    <span>关注&收藏列表</span>
                    <span>...</span>
                </div>
                {
                   collectList.length > 0 ?
                   collectList.map((item, index) => {
                        return (
                            <div key={index} className="good">
                                <div className="pic">
                                    <img src={item.pic} alt="" />
                                </div>
                                <div className="text">
                                    <div>{item.name}</div>
                                    <div>{item.desc}</div>
                                    <div>¥{item.price}元</div>
                                </div>
                                {
                                     collectList.find((i)=>{return i.id===item.id}) ?
                                        <div className="btn cancel" onClick={() => { this.props.cancelCollectFn(item.id) }}>取消收藏</div> :
                                        <div className="btn" onClick={() => { this.props.collectFn(item) }}>收藏</div>
                                } 
                            </div>
                        )
                    }) : <div className="empty">还没有收藏!</div>
                }
                
            </div>
        )
    }
}

//通过connect给当前组件 注入数据
export default connect(
	(state)=>{
		return {
            collectList:state.collectList
		}

	},
	(dispatch)=>{
		return {
			collectFn(item){
				dispatch(collect_action(item))
			},
			cancelCollectFn(id){
				dispatch(cancel_collect_action(id))
			}
			
		}

	}
)(CollectDetail)