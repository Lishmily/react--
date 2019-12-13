import React, { Component } from 'react'
import Back from "../Back/Back.js";
import {connect} from "react-redux"
import {collect_action, cancel_collect_action} from '../../store/store.js';

 class Collect extends Component {

    render() {
        var list = [
            {
                "id": 1,
                "name": "2019冬季流行时尚保暖秋裤",
                "price": 998,
                "desc": "2019冬季流行时尚保暖秋裤",
                "pic":"https://dummyimage.com/100x100"
            },
            {
                "id": 2,
                "name": "2029冬季流行时尚保暖秋裤",
                "price": 998,
                "desc": "2029冬季流行时尚保暖秋裤",
                "pic":"https://dummyimage.com/100x100"
            },
            {
                "id": 3,
                "name": "2039冬季流行时尚保暖秋裤",
                "price": 998,
                "desc": "2039冬季流行时尚保暖秋裤",
                "pic":"https://dummyimage.com/100x100"
            },
            {
                "id": 4,
                "name": "2049冬季流行时尚保暖秋裤",
                "price": 998,
                "desc": "2049冬季流行时尚保暖秋裤",
                "pic":"https://dummyimage.com/100x100"
            },
        ]
        let collectList=this.props.collectList;
        console.log(collectList);
        
        return (
            <div className="home-page">
				<div className="back">
					<Back></Back>
				</div>
                <div className="toCollectBtn" onClick={ ()=>{ this.props.history.push('/collectDetail') } }>点击跳转到收藏列表页</div>
                {
                    list.map((item, index) => {
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
                    })
                }
            </div>
        )
    }
}

//2.我们将connect函数称为 一个返回高阶组件的高阶函数.
//connect注入给Home组件的数据/方法 都放置在 this.props 上.
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
)(Collect)