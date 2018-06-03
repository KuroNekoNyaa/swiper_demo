window.onload = function () {

    // demo1
    var swiper1 = new Swiper('#swiper1', {
        //loop: true
    });

    // demo2 scrollbar插件
    var swiper2 = new Swiper('#swiper2', {
        scrollbar: {
            container : '.swiper-scrollbar',
            draggable : true,
            hide: false,//滚动条的隐藏
            snapOnRelease: true// 释放拖动块时slide自动贴合
        }
    })

    // demo3 tab
var swiper3 = new Swiper('#swiper3', {
    onSlideChangeStart: function (swiper) {
        var index = swiper.activeIndex,
            tabs = $('.tabs a');
        tabs.removeClass('active');
        tabs.eq(index).addClass('active');
    }
});
$('.tabs a').on('click', function (e) {
    e.preventDefault();
    var index = $(this).index();
    $('.tabs a').removeClass('active');
    $(this).addClass('active');
    swiper3.swipeTo(index);
})
}
