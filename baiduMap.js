function createMap(x, y, tit, cont) {
    mapPoint = new BMap.Point(x, y);
    // 百度地图API功能
    var map = new BMap.Map("mapContainer");    // 创建Map实例

    //==============设置基本地图================
    map.centerAndZoom(mapPoint, 11);  // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

    //==============设置Marker标注================
    var marker = new BMap.Marker(mapPoint);// 创建标注
    map.addOverlay(marker);             // 将标注添加到地图中

    //==============设置信息窗================
    var opts = {
        width: 200,     // 信息窗口宽度
        height: 60,     // 信息窗口高度
        title: tit, // 信息窗口标题
    }
    var infoWindow = new BMap.InfoWindow(cont, opts);  // 创建信息窗口对象 
    map.openInfoWindow(infoWindow, mapPoint); //开启信息窗口
    
    //捕捉拖拽事件
    //map.addEventListener("dragend", function (evt) {
    //    map.setCenter(mapPoint);
    //    map.openInfoWindow(infoWindow, mapPoint); //开启信息窗口
    //});
}