//Select DOM item
const menuBtn = document.querySelector
('.menu-btn');
const menu    = document.querySelector
('.menu');
const menuNav = document.querySelector
('.menu-nav');
const menuBrabding = document.querySelector
('.menu-branding');
const navItems =document.querySelectorAll
('.nav-item');
//set Iniitial State Of Menu 

let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){

    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBrabding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        //setMenu State
        showMenu =true;
    }else{

        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBrabding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu =false;

    }
}

