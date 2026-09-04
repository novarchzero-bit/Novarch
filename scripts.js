// ===============================
// NOVARCH - Script Premium
// ===============================


// Animation au chargement de la page

document.addEventListener("DOMContentLoaded", () => {


    const hero = document.querySelector(".hero");


    if(hero){

        hero.style.opacity = "0";
        hero.style.transform = "translateY(50px)";


        setTimeout(() => {

            hero.style.transition = "all 1.2s ease";

            hero.style.opacity = "1";

            hero.style.transform = "translateY(0)";


        },300);

    }



});





// ===============================
// Navbar effet au défilement
// ===============================


window.addEventListener("scroll",()=>{


    const nav = document.querySelector("nav");


    if(nav){


        if(window.scrollY > 50){


            nav.style.background =
            "rgba(0,0,0,0.95)";


            nav.style.boxShadow =
            "0 10px 30px rgba(212,175,55,0.15)";


        }

        else{


            nav.style.background =
            "rgba(0,0,0,0.7)";


            nav.style.boxShadow =
            "none";


        }


    }


});





// ===============================
// Apparition des cartes au scroll
// ===============================


const cards = document.querySelectorAll(".card");


const observer = new IntersectionObserver((elements)=>{


    elements.forEach(element=>{


        if(element.isIntersecting){


            element.target.style.opacity="1";

            element.target.style.transform=
            "translateY(0)";


        }


    });


},{

threshold:0.2

});





cards.forEach(card=>{


    card.style.opacity="0";

    card.style.transform=
    "translateY(50px)";


    card.style.transition=
    "all 0.8s ease";


    observer.observe(card);


});





// ===============================
// Animation bouton WhatsApp
// ===============================


const buttons = document.querySelectorAll(".btn");


buttons.forEach(button=>{


    button.addEventListener("mouseenter",()=>{


        button.style.transform=
        "scale(1.08)";


    });



    button.addEventListener("mouseleave",()=>{


        button.style.transform=
        "scale(1)";


    });



});





// ===============================
// Message console NOVARCH
// ===============================


console.log(
"✨ NOVARCH - Les nouveaux architectes de la vie ✨"
);

console.log(
"Site chargé avec succès."
);