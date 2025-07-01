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
        el: document.querySelector('#main'),
        smooth: true
    });
});

function curserFollower() {
    window.addEventListener("mousemove", function (dets) {
        this.document.querySelector(".curser_circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

curserFollower();

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

