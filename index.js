
const lists = document.querySelectorAll('ul a');

lists.forEach((lists) => {
    lists.addEventListener('click', () => {
        document.querySelector('a.active').classList.remove('active');
        lists.classList.add('active');
    });
});
  
document.querySelector('.mode-btn').addEventListener('click', () => {
    document.body.classList.toggle('light')
});




const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const narbarLists = document.querySelector('.navbar-list');

    toggleBtn.onclick = () =>  {
      narbarLists.classList.toggle('open')
     const isopen = narbarLists.classList.contains('open')

     toggleBtnIcon.classList = isopen
        ? 'fa-solid fa-xmark'
       : 'fa-solid fa-bars'
}

// function updateProgressBar(progress) {
//     const progressBar = document.querySelector('.progress');
//     progressBar.style.width = `${progress}%`;
//   }
// updateProgressBar(50)
// function showMenu() {
//     document.querySelector('.navbar-list').classList.toggle("open");
// }

const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator");
let index = 0;

prev.addEventListener("click", () => {
    prevSlide();
    updateCircleIndicator();
    resetTimer();
})

next.addEventListener("click", () => {
    nextSlide();
    updateCircleIndicator();
    resetTimer();
})

function circleIndicator(){
    for(let i = 0; i < slides.length; i++){
        const div = document.createElement("div");
            // div.innerHTML = i+1;
          div.setAttribute("onclick", "indicateSlide(this)") 
          div.id = i;
          if(i == 0){
            div.className = "active";
          }
         indicator.appendChild(div); 
    }  
}
    circleIndicator();

    function indicateSlide(element){
        index = element.id;
        changeSlide();
        updateCircleIndicator();
        resetTimer();
    }
function updateCircleIndicator(){
    for(let i = 0; i < indicator.children.length; i++){
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
} 

function prevSlide(){
   if (index == 0){
     index = slides.length-1;
   } else{
    index--;
   } 
   changeSlide();
}
function nextSlide(){
   if (index == slides.length-1){
    index = 0;
   }else{
    index++
   }   
   changeSlide();
}
function changeSlide(){
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove("active")
    }
    slides[index].classList.add("active");
}
function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoPlay, 4000);
}
function autoPlay(){
    nextSlide();
    updateCircleIndicator();
}

let timer = setInterval(autoPlay, 4000);


