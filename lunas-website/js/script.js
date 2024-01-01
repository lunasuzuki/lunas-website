gsap.set(".load",{
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    scale: 2,
});
gsap.set(".text",{
    position: "fixed",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -50%)",
});

var tl = gsap.timeline();
tl.to(".load", 2, {
    rotate: 360,
    ease: Linear.easeNone,
    repeat: -1,
});
tl.to(".load", 2,{
    delay: 2,
    scale: 1,
    top: "20%",
    left: "10%",
}, "start"
);
tl.to(".text", 2,{
    delay: 2,
    top: "41%",
    left: "90%",
    ease: Linear.easeNone,
    rotation : 90,
    fontSize: "3em",
},
);
tl.from(".wrapper", 2,{
    y:innerHeight * 1,
},
);
tl.from(".elmt", 2,{
   delay: 0.1,
   y: 300,
   opacity: 0,
   stagger:{
    amount: 3,
   }
}, 
);