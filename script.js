

// const searchBtn = document.querySelector('.btn-search')


fetch('https://api.tronalddump.io/random/quote')
  .then(response => response.json())
  .then((data) => {
    console.log(data);

    const response = data.value;
    const tags = data.tags;

    document.getElementById('quote').innerHTML = response;
    document.getElementById('tags').innerHTML = '- ' +tags+ ' -';
    

    const button = document.querySelector("#button");

    button.addEventListener("click", function() {
      window.location.reload();


   


    });
  })











  
