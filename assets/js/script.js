window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var bannerHeight = document.getElementById('banner').offsetHeight;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > bannerHeight) {
    navbar.classList.add('green-bg');
  } else {
    navbar.classList.remove('green-bg');
  }
});