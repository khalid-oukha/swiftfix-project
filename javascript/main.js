/** faq section */
const question = document.querySelectorAll(".question");
const faq = document.querySelectorAll(".faq");
console.log(question);
for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    faq[i].classList.toggle("active");

    for (let j=0; j < question.length; j++) {
        if(j!=i){
            faq[j].classList.remove("active");
        }
    }
  });
}

/*carousl  */
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const container = document.querySelector(".carousel-container");
  const feedbackItems = document.querySelectorAll(".feedback");

  let index = 0;
  const itemWidth = feedbackItems[0].offsetWidth;
  const totalItems = feedbackItems.length;

  function nextSlide() {
    if(index!=totalItems){
      updateCarousel();
      index = index + 1 ;
    }
    else{
      index = 0;
      updateCarousel();
    }
  }

  function updateCarousel() {
    const allItemswidth = -index * itemWidth;
    container.style.transform = `translateX(${allItemswidth}px)`;
  }

  setInterval(nextSlide, 2000); 
});
