import Mock from 'mockjs';
let userList=Mock.mock({
	"userList|500":[{
		"id|+1":1,
		"name":"@cname(2,3)",
		"age|18-30":1,
		"address":"@province",
		"username":"@word(3,4)",
		"pwd":"@word(3,4)",
		"pic":"@image(100x100)"
	}]
});
let carList=Mock.mock({
	"carList|4":[{
			"id|+1":1,
			"name":"@ctitle",
			"pic":"@image(100x100)",
			"price|100-300":1,
			"count":1
	}]
})
Mock.mock("/getData","post",function(options){
	let params=JSON.parse(options.body);
	let {username,pwd,page,count}=params;
	let loginFlag=userList.userList.some((item)=>{
		return item.username===username&&item.pwd===pwd
	})
	let pageList=userList.userList.slice((page-1)*count,page*count)
	// if(loginFlag){
	// 	return {
	// 		status:200,
	// 		msg:"登陆成功",
	// 		pageList
	// 	}
	// }else{
	// 	return {
	// 		status:400,
	// 		msg:"登陆失败",
	// 		pageList
	// 	}

	// }


	return {
		pageList,count,page,
		total:userList.userList.length,
		allData:userList.userList,

		carList:carList.carList,//购物车列表

	}
})


Mock.mock("/carList","post",{
		carList:carList.carList,//购物车列表
})