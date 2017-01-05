function createMap(x, y, tit, cont) {
    var center = new qq.maps.LatLng(37.706759, 112.728916);
    var map = new qq.maps.Map(document.getElementById('mapcontainer'), {
        center: center,
        zoom: 13,
        draggable: true,    //是否可以拖拽
        scrollwheel: true,  //是否可以滑动滚轮
        disableDefaultUI: true    //禁止所有控件
    });
    //创建infoWindow信息框
    var infoWin = new qq.maps.InfoWindow({
        map: map
    });
    //open()打开信息窗口
    infoWin.open();
    infoWin.setPosition(map.getCenter());
    infoWin.setContent('<div id="mapMsgbox"><h3>' + tit + '</h3><p>' + cont + '</p></div>');
}