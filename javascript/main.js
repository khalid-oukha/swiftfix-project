
/*------- menu for mobile--------*/
const openMenu = document.querySelector('#list-ul');
const closeMenu = document.querySelector('#closemenu');
const menu = document.querySelector('.navbar');
openMenu.addEventListener('click' , function(){

  menu.classList.toggle('navbar-openMenu');
});
closeMenu.addEventListener('click' , function(){

  menu.classList.remove('navbar-openMenu');

});

/*carousl  */
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".client-content");
  const feedbackItems = document.querySelectorAll(".feedback");

  let index = 0;
  const itemWidth = feedbackItems[0].offsetWidth;
  const totalItems = feedbackItems.length;

  function nextSlide() {
    if(index==totalItems){
      index = 0;
    }
    else{
      index = index + 1 ;
      updateCarousel();
    }
  }

  function updateCarousel() {
    const allItemswidth = -index * itemWidth;
    container.style.transform =`translateX(${allItemswidth}px)`;
  }

  setInterval(nextSlide, 2000); 
});

/* dropdown for services  */
const serviceList = document.querySelector('.service-list');
const dropdownactive = document.querySelector('#dropdownactive');
dropdownactive.addEventListener('click',function(){
  serviceList.classList.toggle('active-services-dropdown');
  dropdownactive.classList.toggle('rotate-icon');
});