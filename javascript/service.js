/*sevices */
let readMoreService = document.querySelectorAll('.readmore-blur-container');
let ServiceReadMore = document.querySelectorAll('.services-readmore');
let ServiceReadless = document.querySelectorAll('.services-readless');

for(let i = 0 ; i<ServiceReadMore.length ; i++)
{
    ServiceReadMore[i].addEventListener('click',function(){
        readMoreService[i].classList.remove('hidden-readmore');
    });
    ServiceReadless[i].addEventListener('click',function(){
        readMoreService[i].classList.add('hidden-readmore');
    });
}
