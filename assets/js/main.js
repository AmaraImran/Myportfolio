/* ----- NAVIGATION BAR FUNCTION ----- */

function MymenuFunnction(){
  var menubtn=document.getElementById("mynavmenu")
  if(menubtn.className==="nav-menu")
  {
    menubtn.className+=" responsive"
  }
  else{
    menubtn.className="nav-menu"
  }
}
/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    

window.onscroll=function(){headershadow()}
function headershadow(){
  const navheader=document.getElementById("header");
  if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
    navheader.style.boxShadow="0 1px 6px rgba(0, 0, 0, 0.1)";
  navheader.style.height="70px"
  navheader.style.lineHeight="70px"
  }
  else{
    navheader.style.boxShadow="none";
  navheader.style.height="90px"
  navheader.style.lineHeight="90px"
  }
}
/* ----- TYPING EFFECT ----- */
   
  const typed = new Typed(".typedText", {
    strings: [
      "Computer Scientist",
      "Frontend Developer",
      "Backend Developer",
      "MERN Stack Developer",
      "Tech Enthusiast"
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1500,
    loop: true
  });



/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   

  /* -- HOME -- */
  

  /* -- PROJECT BOX -- */
  

  /* -- HEADINGS -- */
  

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  

  /* -- ABOUT SKILLS & FORM BOX -- */
  


/* ----- CHANGE ACTIVE LINK ----- */
  
  
   
