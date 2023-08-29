// Header에 페이지 아래로 스크롤시 스타일링 적용!
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});


//Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
    console.log(1 - window.scrollY / homeHeight);
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


//Home 섹션 아래로 스크롤 반쯤 되면 Arrow 버튼 사라짐
const arrow = document.querySelector('.arrow-up');
const arrowHeight = arrow.offsetHeight;
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrow.classList.add('arrow-up--invisible');
    } else {
        arrow.classList.remove('arrow-up--invisible');
    }
});
