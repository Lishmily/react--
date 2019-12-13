import { createStore } from 'redux';
//创建action
function collect_action(item) {//收藏 action
	return {
		type: "COLLECT_ACTION",
		item
	}
}

function cancel_collect_action(id) {//取消收藏 action
	return {
		type: "CANCEL_COLLECT_ACTION",
		id
	}
}

function addToCar_action(item) {//加入购物车 action
	return {
		type: "ADDTOCAR_ACTION",
		item
	}
}
function cancel_addToCar_action(id) {//取消加入购物车 action
	return {
		type: "CANCEL_ADDTOCAR_ACTION",
		id
	}
}
function count_action(num,item) {//++ -- action
	return {
		type: "COUNT_ACTION",
		num,item
	}
}



//定义reducer
let data = {
	collectList: [],//收藏列表
	carList: [],//购物车列表
}
function reducer(state = data, action) {
	state = JSON.parse(JSON.stringify(state));

	switch (action.type) {
		case "COLLECT_ACTION"://收藏
			state.collectList.push(action.item)
			return state;

		case "CANCEL_COLLECT_ACTION"://取消收藏
			let index = state.collectList.findIndex((item) => { return item.id === action.id })
			state.collectList.splice(index, 1)
			return state;

		case "ADDTOCAR_ACTION"://加入购物车
			
			let findItem=state.carList.find((item)=>{return item.id===action.item.id});
			if(findItem){//该商品已经添加过
				findItem.count++;
			}else{////该商品没有添加过
				state.carList.push(action.item);
				action.item.count=1;
			}
			// console.log(state.carList);
			
			return state;

		case "CANCEL_ADDTOCAR_ACTION"://取消加入购物车
			let Index = state.carList.findIndex((item) => { return item.id === action.id })
			state.carList.splice(Index, 1);

			// console.log(state.carList);
			return state;

		case "COUNT_ACTION"://++ --
			
			let finditem=state.carList.find((item)=>{return item.id===action.item.id});
			if(finditem){
				finditem.count+=action.num;

				if(finditem.count==0){//数量为0 则删除
					let Index = state.carList.findIndex((item) => { return item.id ===finditem.id })
					state.carList.splice(Index, 1);


				}
			}
			// console.log(state.carList);
			return state;

		default:
			return state;
	}

}

//创建store
let store = createStore(reducer)

//抛出
export {
	store,
	collect_action,
	cancel_collect_action,
	addToCar_action,
	cancel_addToCar_action,
	count_action
}