const barIcon = document.getElementById('menu-bar');
const main = document.getElementById('main');

barIcon.addEventListener('click',()=>{
    document.getElementById('mobile-nav').style.transform = ' translate(0%)'
    main.style.opacity = '0.5';

})

document.getElementById('close').addEventListener('click',()=>{
    document.getElementById('mobile-nav').style.transform = ' translate(-100%)'
    main.style.opacity = '1';
})


