alert("Welcome to Web");
let menuIcon= document.querySelector('menu-icon');
let nav= document.querySelector('nav');

let selctions = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav ul li a');

window.onscroll = ()=>{
    selctions.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top <offset +height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id +']').classList.add(active)
            })
        }
    })
}