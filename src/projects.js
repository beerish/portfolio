'use strict';


//프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
categories.addEventListener('click', (event) => {
   const filter = event.target.dataset.category;
   if (filter == null) {
    return;
   }

//Active 메뉴를 재설정
const active = document.querySelector('.category--selected');
active.classList.remove('category--selected');


//프로젝트 필터링
   projects.forEach((project) => {
    if (filter === 'all' || filter === project.dataset.type) {
        project.style.display = 'block';
    } 
    else {
        project.style.display = 'none';
    }
   });
});
