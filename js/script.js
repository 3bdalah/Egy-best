const global = {
  currentPage: window.location.pathname,
  search: {
    term: '',
    type: '',
    page: 1,
    totalPages: 1,
    totalResults: 0,
  },
  api: {
    // Register your key at https://www.themoviedb.org/settings/api and enter here
    // Only use this for development or very small projects. You should store your key and make requests from a server
    apiKey: 'fd1abe0fb535494df40c06c72320b913',
    apiUrl: 'https://api.themoviedb.org/3/',
  },
};



async function displayPopularMovies() {
  const { results } = await fetchAPIData('movie/popular');

  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
            ${
              movie.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />`
                : `<img
            src="../images/no-image.jpg"
            class="card-img-top"
            alt="${movie.title}"
          />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        `;

    document.querySelector('#popular-movies').appendChild(div);
  });
}


// fetch data from TMDB API 
async function fetchAPIData(endpoint){
      const response = await fetch(`${global.api.apiUrl}${endpoint}?api_key=${global.api.apiKey}`);
      
      const data = await response.json();
      console.log('response data ' , data);
      return data;
}


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
      displayPopularMovies();
      break;
    case '/shows.html':
      console.log("shows");
      displayPopularMovies();
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