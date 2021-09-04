   let hamburger_btn = document.getElementById("hamburger-btn");

   function getStyle(id, name) {
       var element = document.getElementById(id);
       return element.currentStyle ? element.currentStyle[name] : window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(name) : null;
   }
   hamburger_btn.addEventListener("click", () => {

       let show = false;
       let nav_link_pannel = document.getElementById("nav-link-pannel");

       if (getStyle("nav-link-pannel", "display") == "none") {
           nav_link_pannel.style.display = "flex"
       } else {
           nav_link_pannel.style.display = "none"
       }
   });