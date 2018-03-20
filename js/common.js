// content 导航栏切换
function on1(){
	var jiankon = document.getElementById('jiankon');
	var kongzhi = document.getElementById('kongzhi');
	var bianliu = document.getElementById('bianliu');
	var contentdiv1 = document.getElementById('contentdiv1');
	var contentdiv2 = document.getElementById('contentdiv2');
	var contentdiv3 = document.getElementById('contentdiv3');
	if(contentdiv1.style.display = 'none'){
		contentdiv1.style.display='block';
		contentdiv2.style.display='none';
		contentdiv3.style.display='none';
		jiankon.style.borderBottom='5px solid #EC4444';
		kongzhi.style.borderBottom='none';
		bianliu.style.borderBottom='none';
	}
}

function on2(){
	var jiankon = document.getElementById('jiankon');
	var kongzhi = document.getElementById('kongzhi');
	var bianliu = document.getElementById('bianliu');
	var contentdiv1 = document.getElementById('contentdiv1');
	var contentdiv2 = document.getElementById('contentdiv2');
	var contentdiv3 = document.getElementById('contentdiv3');
	if(contentdiv2.style.display='none'){
		contentdiv1.style.display='none';
		contentdiv2.style.display='block';
		contentdiv3.style.display='none';
		jiankon.style.borderBottom='none';
		kongzhi.style.borderBottom='5px solid #EC4444';
		bianliu.style.borderBottom='none';
	}
}

function on3(){
	var jiankon = document.getElementById('jiankon');
	var kongzhi = document.getElementById('kongzhi');
	var bianliu = document.getElementById('bianliu');
	var contentdiv1 = document.getElementById('contentdiv1');
	var contentdiv2 = document.getElementById('contentdiv2');
	var contentdiv3 = document.getElementById('contentdiv3');
	if(contentdiv3.style.display='none'){
		contentdiv1.style.display='none';
		contentdiv2.style.display='none';
		contentdiv3.style.display='block';
		jiankon.style.borderBottom='none';
		kongzhi.style.borderBottom='none';
		bianliu.style.borderBottom='5px solid #EC4444';
	}
}

// 新闻中心内容伸缩js

//$('#newa').click(function(){
//	$('#newhide').slideDown('slow');
//})
//
//$('#newhidea').click(function(){
//	$('#newhide').slideUp('slow');
//})


//$('#newa2').click(function(){
//	$('#newhide2').slideDown('slow');
//})
//
//$('#newhidea2').click(function(){
//	$('#newhide2').slideUp('slow');
//})
//
//
//
//$('#newa3').click(function(){
//	$('#newhide3').slideDown('slow');
//})
//
//$('#newhidea3').click(function(){
//	$('#newhide3').slideUp('slow');
//})
//
//
//
//$('#newa4').click(function(){
//	$('#newhide4').slideDown('slow');
//})
//
//$('#newhidea4').click(function(){
//	$('#newhide4').slideUp('slow');
//})


// 新闻中心内容伸缩js
function showTxt(obj){
	var hideBlock = obj.parentNode.parentNode.getElementsByTagName('div')[1];
	$(hideBlock).slideDown();
	
}
function hideTxt(obj){  
    var modify = obj.parentNode.parentNode.getElementsByTagName('div')[0].getElementsByTagName('a')[0];
    var hideBlock = obj.parentNode.parentNode.getElementsByTagName('div')[1];
    $(hideBlock).slideUp();
}


//function showTest(obj){
//	var hideBlock = obj.parentNode.parentNode.getElementsByTagName('div')[1];
//	$(hideBlock).slideDown();
//}


 //创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMarker();//向地图中添加marker
    }
    
    //创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(113.335082,23.167005);//定义一个中心点坐标
        map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
    
    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    
    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_SMALL});
	map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
	map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
    }
    
    //标注点数组
    var markerArr = [{title:"广州数锐智能有限公司",content:"地址:广州市天河区燕岭路新燕大厦93号1103—1104<br/>电话:86-020-29076394<br/>手机:86-13430387985<br/>邮箱:lihg@gzsiri.com",point:"113.334372|23.166199",isOpen:1,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
		 ];
    //创建marker
    function addMarker(){
        for(var i=0;i<markerArr.length;i++){
            var json = markerArr[i];
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            var point = new BMap.Point(p0,p1);
			var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point,{icon:iconImg});
			var iw = createInfoWindow(i);
			var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
			marker.setLabel(label);
            map.addOverlay(marker);
            label.setStyle({
                        borderColor:"#808080",
                        color:"#333",
                        cursor:"pointer"
            });
			
			(function(){
				var index = i;
				var _iw = createInfoWindow(i);
				var _marker = marker;
				_marker.addEventListener("click",function(){
				    this.openInfoWindow(_iw);
			    });
			    _iw.addEventListener("open",function(){
				    _marker.getLabel().hide();
			    })
			    _iw.addEventListener("close",function(){
				    _marker.getLabel().show();
			    })
				label.addEventListener("click",function(){
				    _marker.openInfoWindow(_iw);
			    })
				if(!!json.isOpen){
					label.hide();
					_marker.openInfoWindow(_iw);
				}
			})()
        }
    }
    //创建InfoWindow
    function createInfoWindow(i){
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
        return iw;
    }
    //创建一个Icon
    function createIcon(json){
        var icon = new BMap.Icon("http://map.baidu.com/image/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
        return icon;
    }
    
    initMap();//创建和初始化地图