$(document).ready(function(){
   $(window).scroll(function(){
       if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
       }else{
        $('.navbar').removeClass("sticky");
       }
   });

//    toggle menu/navbar
   $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
   });


// typing anim
var typed = new Typed(".typing", {
        strings:["Computer Science Student","Full Stack Developer", "Software Engineer", "Technologist","Coder"],
        typeSpeed: 75,
        backSpeed:60,
        loop:true
   });
   var typed = new Typed(".typing-2", {
    strings:["Computer Science Student","Full Stack Developer", "Software Engineer", "Technologist","Coder"],
    typeSpeed: 75,
    backSpeed:60,
    loop:true
});

//    owl carousel script
   $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPuase: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
   });
});


