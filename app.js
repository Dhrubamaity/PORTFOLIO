// const express = require("express");
// const app = express();
// const path = require("path");
// const methodOverride = require("method-override");
// const port = 3000;
// 
// app.set("views engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(public.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));
// app.engine("ejs", ejsMate);
// 
// app.use(port,(get,post)=>{
// console.log("server listening on port 3000")
// })

document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('body'),
        smooth: true
    });
});

function curserFollower() {
    window.addEventListener("mousemove", function (dets) {
        this.document.querySelector(".curser_circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
        this.document.querySelector(".curser_circle").style.opacity = `1`;
    })
}

curserFollower();


// >>>>>>>>>>>>>>> dark mode >>>>>>>>>>>>>>>>>>>>>>


function toggleNightmode() {
    let button = document.querySelector(".nightmode")
    let body = document.querySelector("body")

    body.classList.toggle('night-mode');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    // Update button text based on current mode
    if (body.classList.contains('night-mode')) {
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    }
}

// >>>>>>>>>>>>>>>>>>>>>>>> typewriter >>>>>>>>>>>>>>>>>>>>


 const phrases = ["a Web Developer", "a Web Designer", "Dhruba"];
    let i = 0, j = 0, currentPhrase = [], isDeleting = false;
    try{
        function typeWriter() {
      const element = document.getElementById('typewriter');
      const fullPhrase = phrases[i];
      
      if (isDeleting) {
        currentPhrase = fullPhrase.substring(0, j - 1);
        j--;
      } else {
        currentPhrase = fullPhrase.substring(0, j + 1);
        j++;
      }
      
      element.innerHTML = currentPhrase;
      
      let typeSpeed = 100;
      if (isDeleting) typeSpeed /= 2;
      
      if (!isDeleting && currentPhrase === fullPhrase) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentPhrase === '') {
        isDeleting = false;
        i = (i + 1) % phrases.length;
        typeSpeed = 500;
      }
      
      setTimeout(typeWriter, typeSpeed);
    }
    
    document.addEventListener('DOMContentLoaded', typeWriter);
    }catch(e){
        console.log(e)
    }
    