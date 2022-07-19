const apikey='api_key=bad45eb2c5ede3ca5d79d80c44ca1e24'
const baseurl='https://api.themoviedb.org/3'
const apiurl=baseurl+'/discover/movie?sort_by=popularity.desc&'+apikey
const imageurl='https://image.tmdb.org/t/p/w500'
const main=document.getElementById('main')
const form=document.getElementById('form')
const searchbar=document.getElementById('search')
const searchurl=baseurl+'/search/movie?'+apikey

const getMovies=function(url){
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data.results)
        showmovies(data.results)
        
        
    }
    )
    
    
}

getMovies(apiurl)


function showmovies(data) {
    main.innerHTML='';

    data.forEach(movie => {
        const {title,poster_path,overview,vote_average,release_date}=movie;
        const movieEl=document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML=`<img src="${imageurl+poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getcolor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overwiev">
            "${overview}"
    
        </div>`
        main.appendChild(movieEl)
        
    });
   

     
}
function getcolor(vote){
    if(vote>=8){
        return 'green'
    }
    else if(vote>=5){
        return 'orange'
    }
    else{
        return 'red '
    }
}
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const searchterm=searchbar.value
        if(searchbar){
            getMovies(searchurl+'&query='+searchterm)
        }
    })

