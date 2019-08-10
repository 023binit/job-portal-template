
$( "#post-job" ).click(function() {
    alert( "Handler for .click() called." );
  });

window.addEventListener('scroll',() => {
    let mainSectionHeader = document.getElementById('main-section-header');
    let jobPortalHeading = document.getElementById('job-portal-heading');
    let homeLink = document.getElementById('home-link');
    let aboutLink = document.getElementById('about-link');
    let blogLink = document.getElementById('blog-link');
    let contactLink = document.getElementById('contact-link');
    if(window.pageYOffset>120){
      //  mainSectionHeader.classList.add('main-section-header--after-scrolldown');
      $('#main-section-header').addClass('main-section-header--after-scrolldown').animate({"top":"0%"}, 2000);
        jobPortalHeading.classList.add('job-portal-heading--afterScoll');
        homeLink.classList.add('home-link--afterScroll');
        aboutLink.classList.add('about-link--afterScroll');
        blogLink.classList.add('blog-link--afterScroll');
        contactLink.classList.add('contact-link--afterScroll');
    }
    else{
        mainSectionHeader.classList.remove('main-section-header--after-scrolldown');
        jobPortalHeading.classList.remove('job-portal-heading--afterScoll');
        homeLink.classList.remove('home-link--afterScroll');
        aboutLink.classList.remove('about-link--afterScroll');
        blogLink.classList.remove('blog-link--afterScroll');
        contactLink.classList.remove('contact-link--afterScroll');
    }
})