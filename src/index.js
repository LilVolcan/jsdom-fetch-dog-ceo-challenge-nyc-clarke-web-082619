console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    
    // find image container;
    let dogContainer = document.getElementById('dog-image-container');
    let dogBreedList = document.getElementById('dog-breeds'); //dog-breed <ul>
    let breedFilter = document.getElementById('breed-dropdown'); //breed dropdown filter 
    console.log(breedFilter)
  

    // fetch images from URL and append to dogContainer;
    fetch("https://dog.ceo/api/breeds/image/random/10")
        .then(function(response) {
            return response.json();
        })
        .then(function(dogImageArray) {
            // iterate through array to grab each element (dog URL)
            dogImageArray['message'].forEach(function(element) {
                // create new image element
                let newDogImage = document.createElement('img');
                newDogImage.setAttribute('src', element)
                // append url to dogContainer
                dogContainer.append(newDogImage)
            })
        })

    // fetch all the dog breeds and add them to <ul>;    
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(function(response) {
            return response.json(); 
        })
        .then(function(data) {
            // iterate through data
            let breedHash = data['message']
            for (const key in breedHash) {
                // create new list element
                let newBreedItem = document.createElement('li')
                newBreedItem.innerText = key
                // append new breed item to 'ul'
                dogBreedList.append(newBreedItem)
            }
        })
    
    // change color of each breed on click;
    dogBreedList.addEventListener('click', function(e) {
        console.log(event.target)
        // e.target.value.style.color = "red"
        event.target.style.color = "magenta";
    })  

    // filter dropdown loads all breeds starting with that letter;
    // if user selects Option value="a" => displays only those breeds 

    

});

