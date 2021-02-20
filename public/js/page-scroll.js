new fullpage('#fullpage', {
  licenseKey: 'YOUR KEY HERE',
  fitToSection: true,
  scrollingSpeed: 1000,
  navigation: true,
  slidesNavigation: true,
  fixedElements: '#headerfix',
});

jQuery(document).ready(function() {
    mykey = document.getElementById('fullpage');
    jQuery(mykey).addClass("test");
});