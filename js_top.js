$(function(){
    var slickObj = $('.kv-slider');

    slickObj.slick({
        autoplay: false,
        fade: true,
        arrows: false,
        dots: false,
        draggable: false,
        speed: 5000,
        autoplaySpeed: 1000,
        swipe: false
    });
       
    setTimeout(function(){
        slickObj.slick('slickSetOption', 'autoplay', true).slick('slickPlay');
    },2000);
    
    slickObj.on('touchstart mousedown', function(){
        slickObj.slick('slickPlay');
    });
})