//navbar
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var foodhut = document.getElementById('foodhut');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
      navbar.classList.add('navbar-color');
      if (window.innerWidth > 960) {
        foodhut.style.display = "inline";
    }
    } else {
      navbar.classList.remove('navbar-scrolled');
      navbar.classList.remove('navbar-color');
      if (window.innerWidth > 960) {
        foodhut.style.display = "none";
    }
    }
  });
  $(document).ready(function(){
    $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
    });
  });
  //navbar links
  document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll(".nav-link");
  
    function setActiveNavLink() {
      var scrollPosition = window.scrollY;
  
      sections.forEach(function(section) {
        var top = section.offsetTop;
        var bottom = top + section.offsetHeight;
  
        if (scrollPosition >= top && scrollPosition < bottom) {
          var id = section.getAttribute("id");
          navLinks.forEach(function(navLink) {
            if (navLink.getAttribute("href") === "#" + id) {
              navLink.classList.add("active");
            } else {
              navLink.classList.remove("active");
            }
          });
        }
      });
    }
    window.addEventListener("scroll", setActiveNavLink);
  });
  
  
  //gallery
  $(document).ready(function(){
    $('.gallery').hover(function(){
      $(this).find('.overlay').fadeIn();
    }, function(){
      $(this).find('.overlay').fadeOut();
    });
  });

  //blog
  function showCards(setId, buttonId) {
    var cardSet1 = document.getElementById("cardSet1");
    var cardSet2 = document.getElementById("cardSet2");
  
    if (setId === "set1") {
      cardSet1.style.display = "block";
      cardSet2.style.display = "none";
      document.getElementById(buttonId).classList.add('active');
      document.getElementById('button2').classList.remove('active');
    } else if (setId === "set2") {
      cardSet1.style.display = "none";
      cardSet2.style.display = "block";
      document.getElementById(buttonId).classList.add('active');
      document.getElementById('button1').classList.remove('active');
    }
  }
  
  
  
