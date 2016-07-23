var goods=[
	{name:'苹果',price:4},
	{name:'香蕉',price:6},
	{name:'芒果',price:8},
	{name:'荔枝',price:10},
	{name:'葡萄',price:12}
]
var app=angular.module('app',[]);
app.controller('o',function($scope){
	$scope.goods=goods;
	$scope.buy=[];
	$scope.buyBtn=function(i){
		var g=$scope.goods;
		var b=$scope.buy;
		if(b.length>0){
			var flag=true;
			angular.forEach(b,function(obj,j){
				if(b[j].name==g[i].name){
					b[j].num++;
					flag=false;
				}
			})
			if(!flag){
				return;
			}
		}
		var o ={};
		o.name=g[i].name;
		o.price=g[i].price;
		o.num=1;
		b.push(o);
	}
	$scope.addBtn=function(name){
		angular.forEach($scope.buy,function(o,i){
			if(o.name==name){
				o.num++;
			}
		})
	}
	$scope.reduceBtn=function(name){
		angular.forEach($scope.buy,function(o,i){
			if(o.name==name){
				o.num--;
				if(o.num<=0){
					var sta=confirm('您确定不购买了吗？');
					if(sta){
						o.num=0;
						$scope.buy.splice(i,1);
					}else{
						o.num=0;
					}
				}
			}
		})
	}
	$scope.del=function(name){
		angular.forEach($scope.buy,function(o,i){
			if(o.name==name){
				$scope.buy.splice(i,1);
			}
		})
	}
	$scope.sum=function(i){
		var s=0;
		var b=$scope.buy;
		angular.forEach(b,function(obj,j){
			s+=obj.price*obj.num;
		})
		return s;
	}
	$scope.fg=true;
	$scope.order=function(key){
		$scope.fg=!$scope.fg;
		$scope.key=key;
	}
	$scope.$watch("buy",function(newVal,oldVal){
		for(var i=0;i<newVal.length;i++){
			newVal[i].sum=newVal[i].price*newVal[i].num;
		}
	},true)
})
