fetch("https://api.themoviedb.org/3/trending/all/week?api_key=229df96d9cd7e64b815fad2f3de2890d&language=en-US").then(response => {
    response.json().then(result => console.log(result))
})