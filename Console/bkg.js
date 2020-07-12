function demoapi(){
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

    request.onload = function () {
      // Begin accessing JSON data here
    }

// Send request
    request.send()
    var data = JSON.parse(this.response)

    data.forEach((movie) => {
        // Log each movie's title
        console.log(movie.title)
      })
    // document.querySelector('.final-score').textContent=data;
}

async function btn(){
    var element = document.getElementById("myprogressBar");    
    var width = 1; 
    var identity = setInterval(scene, 10); 
    await new Promise(r => setTimeout(r, 800));
    function scene() { 
        if (width >= 40) { 
        clearInterval(identity); 
        } else { 
        width++;  
        element.style.width = width + '%';  
        } 
    } 
    var p="Setup Completed";
    // document.querySelector('.final-score').textContent=p;
    
    // document.querySelector('.final-score').textContent=data;
    demoapi();
    //gitapi();

}
document.querySelector('.btn-new').addEventListener('click',btn);
