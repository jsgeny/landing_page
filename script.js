/*=================================================================*/
/*                              start menu                         */
/*=================================================================*/
/*--------------------------------------------------------*/
/* - start -    Слушать событие клик по кнопке burger     */ 
/*--------------------------------------------------------*/ 
document.querySelector('.header_burger').addEventListener("click", function(){
    document.querySelector('.header_burger').classList.toggle('burger_active');
    document.querySelector('.menu_link').classList.toggle("link_active");
    let p = document.querySelector('.nav_menu p'); 

    let menuLink = document.querySelector('.menu_link'); 
    if (document.querySelector('.link_active') && document.querySelector('.flex_width_content_one').clientWidth < 835){
        menuLink.style.height = "765px";  
    } else if (document.querySelector('.flex_width_content_one').clientWidth < 835) {
        menuLink.style.height = "0px"; 
    } 
    if (document.querySelector('.flex_width_content_one').clientWidth > 835) {
        p.style.display = "none";
    } else {
        p.style.display = "block";
    }
});
/*--------------------------------------------------------*/
/* - end -     Слушать событие клик по кнопке burger      */ 
/*--------------------------------------------------------*/ 
/*--------------------------------------------------------*/
/* - start -   Слушать событие изменение окна браузера    */ 
/*--------------------------------------------------------*/ 
window.addEventListener(`resize`, function() {
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
/*--------------------------------------------------------*/
/* - end -    Слушать событие изменение окна браузера     */ 
/*--------------------------------------------------------*/ 
//===================== скролл для кнопок в меню ====================//
let menuTop = document.querySelectorAll('.nav_menu a');
for (let i = 0; i < menuTop.length; i++) {
    menuTop[i].onclick = function(event) {
        event.preventDefault();
        let scrollTarget = document.querySelectorAll('.flex_width_content_fon')[i];
        let topOffset = 0; 

        if (0 <= window.pageYOffset && document.querySelector('.flex_width_content_one').clientWidth < 835) {
            if (document.querySelector('.fixedMenu_active')) {
                topOffset = window.pageYOffset;
            } else {
                topOffset = window.pageYOffset + 765; 
            }
            let offsetPosition = (window.pageYOffset  - window.pageYOffset) + scrollTarget.offsetTop - topOffset;
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });  
        } else { 
            topOffset = window.pageYOffset; 
            let offsetPosition = (window.pageYOffset  - window.pageYOffset) + scrollTarget.offsetTop - topOffset;
                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                }); 
        }
    } 
};
//- End - ================== скролл для кнопок в меню ===============//
/*-------------------------------------------------------------------*/
/* - start -         Слушать событие клик по ссылке в меню           */ 
/*-------------------------------------------------------------------*/ 
let allMenuA = document.querySelectorAll('nav.nav_menu a');
for (let j = 0; j < allMenuA.length; j++) {
    allMenuA[j].addEventListener("click", function(){
        document.querySelector('.header_burger').classList.toggle('burger_active');
        document.querySelector('.menu_link').classList.toggle("link_active");
        let menuLink = document.querySelector('.menu_link');
        if (document.querySelector('.flex_width_content_one').clientWidth < 835) {
            menuLink.style.height = "0px";
        } 
    });
}
/*-------------------------------------------------------------------*/
/* - end -          Слушать событие клик по ссылке в меню            */ 
/*-------------------------------------------------------------------*/ 
/*-------------------------------------------------------------------*/
/* - start -                     Кнопка наверх                       */ 
/*-------------------------------------------------------------------*/ 
let buttonTopWrapper = document.querySelector('.button_top');
let buttonTop = document.querySelector('.button_top a');
buttonTop.addEventListener("click", function(event) {
    event.preventDefault();
    let scrollTop = document.querySelector('.flex_width_content_fon');
    let topOffSet = 0;

    if (0 <= window.pageYOffset) {
        topOffSet = window.pageYOffset;
        let offsetPosition = (window.pageYOffset  - window.pageYOffset) + scrollTop.offsetTop - topOffSet;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        }); 
    }
});
/*-----------------------------------------------------------------*/
/* - end -                      Кнопка наверх                      */ 
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/* - start -                     Скролл бар                        */ 
/*-----------------------------------------------------------------*/
let scrollPos = 0;

window.addEventListener("scroll", function() {
        if (235 >= window.pageYOffset) {
            buttonTopWrapper.style.display = 'none';
        } else {
            buttonTopWrapper.style.display = 'flex';
        }
        let fixedMenu = document.querySelector('.fixed_menu');

        if (document.querySelector('.flex_width_content_one').clientWidth < 835 &&  window.pageYOffset >= 533 && (document.body.getBoundingClientRect()).top > scrollPos) {
            fixedMenu.classList.add("fixedMenu_active");
        } else {
            fixedMenu.classList.remove("fixedMenu_active");
            scrollPos = (document.body.getBoundingClientRect()).top;
        }
});
/*-----------------------------------------------------------------*/
/* - end -                      Скролл бар                         */ 
/*-----------------------------------------------------------------*/
/*=================================================================*/
/*                               end  menu                         */
/*=================================================================*/

/*=================================================================*/
/*                            start slider top                     */
/*=================================================================*/
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
/*=================================================================*/
/*                            end slider top                       */
/*=================================================================*/
/*=================================================================*/
/*                          start slider rotor                     */
/*=================================================================*/
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
/*=================================================================*/
/*                           end slider rotor                      */
/*=================================================================*/
/*=================================================================*/
/*                          start slider rotor2                    */
/*=================================================================*/
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
/*=================================================================*/
/*                           end slider rotor2                     */
/*=================================================================*/