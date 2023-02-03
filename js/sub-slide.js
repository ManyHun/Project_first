new Swiper(".promotion2 .swiper2", {
    direction: "horizontal",
    slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
    delay: 2000,
    },
/*     pagination: {
        // 페이지 번호 사용 여부
        el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
        clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
    }, */
});