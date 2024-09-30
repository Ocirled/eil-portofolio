// parallax js

function parallaxMouse () {
    if($('#parallax').length) {
        let scene = document.getElementById('parallax');
        let parallax = new Parallax(scene);
    }
}
parallaxMouse();

// About tabs
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]');
const borderTabs = document.querySelectorAll('#tab-border');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab_active');
        });

        target.classList.add('tab_active');

        // tabs.forEach((tab) => {
        //     tab.classList.remove('tab_main_active')
        // });

        // tab.classList.add('tab_main_active')
    })
})

const marker = document.querySelector('.marker');

function indicator(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}

tabs.forEach(item => {
    item.addEventListener('click', (e) => {
        indicator(e.target);
    })
})


// navbar
const tabsNav = document.querySelectorAll('.page-scroll').forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        let tujuan = this.getAttribute('href')
        let elemenTujuan = document.querySelector(tujuan);
        
        window.scrollTo({
            top: elemenTujuan.offsetTop - 100,
            behavior: "smooth"
        })
    })
})

// theme modal
const changeColorButton = document.querySelectorAll("#change-color");
const themeModal = document.querySelector(".theme-custom") ;

changeColorButton.forEach(e => {
    e.addEventListener("click", function(){
        themeModal.classList.toggle("flex");
        themeModal.classList.toggle("hidden");
    });
})

function closeModal(e) {
    if(e.target.classList.contains("flex")) {
        themeModal.classList.toggle("flex");
        themeModal.classList.toggle("hidden");
    }
}

themeModal.addEventListener("click", closeModal);

//Choose theme
const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");
const bg1 = document.querySelector(".bg-lightNoChange.bg1");
const bg2 = document.querySelector(".bg-dim.bg2");
const bg3 = document.querySelector(".bg-darkNoChange.bg3");

const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active-color');
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        changeActiveColorClass();

        if(color.classList.contains('bg-purple')) {
            primaryHue = 252;
        } else if(color.classList.contains('bg-yellow')) {
            primaryHue = 52;
        } else if(color.classList.contains('bg-red')) {
            primaryHue = 352;
        } else if(color.classList.contains('bg-green')) {
            primaryHue = 152;
        } else if(color.classList.contains('bg-blue')) {
            primaryHue = 202;
        } 
        color.classList.add("active-color");
        root.style.setProperty('--primary-hue', primaryHue);
    })
})


// Theme BG
let lightColorLightness;
let dimColorLightness;
let darkColorLightness;

// Change bg color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', dimColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

bg1.addEventListener('click', () => {
    // add active class
    bg1.classList.add('active-background');
    // remove active class from the others
    bg2.classList.remove('active-background');
    bg3.classList.remove('active-background');
    //remove customized changes from local storage
    window.location.reload();
})

bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    dimColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    bg2.classList.add('active-background');
    // remove active class from the others
    bg1.classList.remove('active-background');
    bg3.classList.remove('active-background');
    changeBG();
})

bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    dimColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    bg3.classList.add('active-background');
    // remove active class from the others
    bg1.classList.remove('active-background');
    bg2.classList.remove('active-background');
    changeBG();
})

// Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 2500,
    },
    effect: 'coverflow',
    depth: 100,
    modifier: 1,
    rotate: 50,
    scale: 1,
    slideShadows: true,
    stretch: 0
  });