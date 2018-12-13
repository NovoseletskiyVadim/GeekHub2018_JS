window.onscroll = function(){

    var coordCenterX = document.documentElement.clientWidth/2 ;
    var coordCenterY = document.documentElement.clientHeight/2;
    

    var elem = document.elementFromPoint(coordCenterX, coordCenterY);
    var srcElement=elem.getAttribute('data-src');
    if(elem!==null){
        elem.setAttribute('src',srcElement);
    }

}