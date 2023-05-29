const global = {
  currentPage : window.location.pathname,
};



// hight list active link

function hightActiveLink(){
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
  if(link.getAttribute('href') === global.currentPage){
     link.classList.add('active');
  }
  });
}
// init App 
function init(){
  switch (global.currentPage){
    case  '/':
    case '/index.html':
      console.log("home");
      break;
    case '/shows.html':
      console.log("shows");
      break;
    case  '/movie-details.html':
      console.log("movie details");
      break;
    case '/tv-details.html':
      console.log("tv Details");
      break;
    case  '/search.html':
      console.log("search page");
      break;
    case '/shows.html':
      console.log("shows");
      break;
  }
};


document.addEventListener('DOMContentLoaded',init);