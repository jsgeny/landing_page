document.querySelector('.header_burger').addEventListener("click", function(){
    document.querySelector('.header_burger').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("menu_active");
    let allA = document.querySelectorAll('nav.nav_menu a');
    let p = document.querySelector('.nav_menu p'); 
    if (document.querySelector('.menu_active')){
        for (let i = 0; i < allA.length; i++){
            allA[i].style.display = "none";
        }
        p.style.display = "block";
    } else if (document.querySelector('.flex_width_content_one').clientWidth > 835) {
        for (let i = 0; i < allA.length; i++){
            allA[i].style.display = "flex";
        }
        p.style.display = "none";
    } 
});
window.addEventListener(`resize`, function() {
    console.log(document.querySelector('.flex_width_content_one').clientWidth);  // 745
    let allA = document.querySelectorAll('nav.nav_menu a');
    let p = document.querySelector('.nav_menu p'); 
    if (document.querySelector('.flex_width_content_one').clientWidth < 835) {
        for (let i = 0; i < allA.length; i++){
            allA[i].style.display = "none";
        }
        p.style.display = "block";
    } else {
        for (let i = 0; i < allA.length; i++){
            allA[i].style.display = "flex";
        }
        p.style.display = "none";
    }
  });
let allMenuA = document.querySelectorAll('.menu a');
for (let j = 0; j < allMenuA.length; j++) {
    allMenuA[j].addEventListener("click", function(){
        document.querySelector('.menu').classList.toggle("menu_active");
        document.querySelector('.header_burger').classList.toggle('active');
    });
}
function imgSlider(anything){
    document.querySelector('.slider_one').src = anything;
}
let slider_info_one = document.querySelector('.slider_info_one');
let slider_info_oneP = document.querySelector('.slider_info_one p');
let navigImg = document.querySelectorAll('.navigation_one img');
let textSliderInfo = [
    "1. Текст",
    "2. Текст",
    "3. Текст",
    "4. Текст",
    "5. Текст",
    "6. Текст",
    "7. Текст",
];
for (let i = 0; i <  navigImg.length; i++) {
    navigImg[i].addEventListener("mouseover", function() {
        slider_info_one.style.left = "0px";
        slider_info_oneP.textContent = textSliderInfo[i];
    });
    navigImg[i].addEventListener("mouseout", function() {
        slider_info_one.style.left = "-300px";
        slider_info_oneP.textContent = textSliderInfo[i];
    });
}

navigImg[0].className.replace("active_slider", "" );
navigImg[0].className += "active_slider";

for(let i = 0; i < navigImg.length; i++){
    navigImg[i].onclick = function(){
        imgSlider(navigImg[i].getAttribute('src'));

        for (let j = 0; j < navigImg.length; j++) {
            navigImg[j].className = navigImg[j].className.replace("active_slider", "" );
        }
        navigImg[i].className += "active_slider";
    };
};
let sliders = document.querySelectorAll(".rotor");
let index = 0;

document.querySelector('.next').addEventListener("click", function() {
    sliders[index].classList.remove('active_rotor');
    index = (index + 1) % sliders.length;
    sliders[index].classList.add('active_rotor');
})

document.querySelector('.prev').addEventListener("click", function() {
    sliders[index].classList.remove('active_rotor');
    index = (index - 1 + sliders.length) % sliders.length;
    sliders[index].classList.add('active_rotor');
});

let sliders2 = document.querySelectorAll(".rotor2");
let index2 = 0;

document.querySelector('.next2').addEventListener("click", function() {
    sliders2[index2].classList.remove('active_rotor2');
    index2 = (index2 + 1) % sliders2.length;
    sliders2[index2].classList.add('active_rotor2');
})

document.querySelector('.prev2').addEventListener("click", function() {
    sliders2[index2].classList.remove('active_rotor2');
    index2 = (index2 - 1 + sliders2.length) % sliders2.length;
    sliders2[index2].classList.add('active_rotor2');
});