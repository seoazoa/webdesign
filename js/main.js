$(document).ready(function(){
var portfolioSwiper = new Swiper(".portfolioSwiper" , {
    direction: "horizontal",
    Loop:true,
    slidesPerView: 4,
    spaceBetween: 30,
    // navigation
    navigation: {
        nextEl: "portfolio-slider-wrap .next",
        prevEL: "portfolio-slider-wrap .prev",
    },
    breakpoints:{
        // 320 이상일때
        320:{
            slidesPerView:1,
        },
        // 480 이상일때
        480:{
            slidesPerView:2,
            spaceBetween: 30,
        },
        // 768 이상일때
        768:{
            slidesPerView:4,
            spaceBetween: 30,
        },
    }
})
// 토글 버튼 코드
var menuToggleBtn = $(".menu-toggle-btn")
mainMenu = $(".main-menu1")
menuToggleBtn.click(function(){
    mainMenu.slideToggle()
})
})