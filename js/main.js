// navbar onscroll
window.onscroll = function() {scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("header").style.backgroundColor = "rgba(0,0,0,.8)";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
  }
}


// counter
// $(document).ready(function(){
//   $('.counter').counterUp({
//     delay: 10,
//     time: 1200
//   });
// });

// toggle menu
let menu = document.getElementById("toggle-menu");
let navbar = document.querySelector(".menu");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
    
});



 
// $(document).scroll(function(){
//     $('.counter-value').each(function(){
//         $(this).prop('Counter',0).animate({
//             Counter: $(this).text()
//         },{
//             duration: 1500,
//             easing: 'swing',
//             step: function (now){
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });
// });

$(window).scroll(startCounter);

function startCounter() {
  let scrollY = (window.scrollY || document.documentElement.scrollTop) + window.innerHeight;
  let divPos = document.querySelector('.counter').offsetTop;

  if (scrollY > divPos) {
    $(window).off("scroll", startCounter);

    $('.counter-value').each(function() {
      var $this = $(this);
      jQuery({
        Counter: 0
      }).animate({
        Counter: $this.text().replace(/,/g, '')
      }, {
        duration: 1500,
        easing: 'swing',
        step: function() {
          $this.text(commaSeparateNumber(Math.floor(this.Counter)));
        },
        complete: function() {
          $this.text(commaSeparateNumber(this.Counter));
          //alert('finished');
        }
      });
    });

    function commaSeparateNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
    }
  }
}