
const apikey = "0a1f76f19dc33ffaf02a33730dbff868";
// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`
const toprated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`
const upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`
const nowplaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`


const popularMovies = document.getElementById("popular-movies");



fetch(popular).then((rawdata) => {
   rawdata.json().then((data) => {
      data.results.forEach(movie => {

         const movieBox = document.createElement("div");
         movieBox.classList.add("movie-box");


         movieBox.innerHTML += `<img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="movies" width="192px" height="210px">
                        <div class="title-box">
                           <div class="title"> <h3>${movie.title}</h3></div> 
                            <div class="views"><i class="fa-solid fa-eye"></i> ${Math.trunc(movie.vote_average)} /10</div>
                        </div>`

         popularMovies.appendChild(movieBox);
         console.log(movie);
    
      });
   })
})


// movieBox.innerHTML = `<img src="images/categories1_1x.webp" alt="movies" width="192px" height="210px">
//                         <div class="title-box">
//                            <div class="title"> <h3 class="title">bhai jaan</h3></div>
//                             <div class="views"><i class="fa-solid fa-eye"></i></div>
//                         </div>`


