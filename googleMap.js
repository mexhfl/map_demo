var map;
function initMap(x, y, tit, cont) {
    var mapCenter = { lat: parseFloat(x), lng: parseFloat(y) };
    //========创建基本地图========
    map = new google.maps.Map(document.getElementById('mapContainer'), {
        center: mapCenter,
        zoom: 15
    });
    //========创建地图标记========
    var marker = new google.maps.Marker({
        position: mapCenter,
        map: map,   //指定放在哪个地图中，也可以使用marker.setMap(map);移除：marker.setMap(null)
        title: 'Hello World!',
        icon: '[iconpath]'
    });
    //========创建地图信息窗========
    var contentString = '<div id="content"><h3>' + tit + '</h3><p>' + cont + '</p></div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    infowindow.open(map, marker);

}