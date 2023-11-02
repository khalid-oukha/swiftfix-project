let readMoreBtn = document.querySelector('#readmore');
let readlessBtn = document.querySelector('#readless');
let readMoreContainer = document.querySelector('.readmore-blur-container');

readMoreBtn.addEventListener('click', function(){
    readMoreContainer.classList.remove('hidden-readmore');
});
readlessBtn.addEventListener('click', function(){
    readMoreContainer.classList.add('hidden-readmore');
});

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


