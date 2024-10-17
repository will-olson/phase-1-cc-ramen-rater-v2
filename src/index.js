// index.js
document.addEventListener("DOMContentLoaded", () => {
  const handleClick = (ramen) => {
    const ramenDetail = document.getElementById('ramen-detail');
    const detailImage = ramenDetail.querySelector('.detail-image');
    const detailName = ramenDetail.querySelector('.name');
    const detailRestaurant = ramenDetail.querySelector('.restaurant');

    detailImage.src = ramen.image;
    detailName.textContent = ramen.name;
    detailRestaurant.textContent = ramen.restaurant;
    
    const detailRating = document.getElementById('rating-display');
     const detailComment = document.getElementById('comment-display');

  detailRating.textContent = ramen.rating;
  detailComment.textContent = ramen.comment;

    console.log(`${ramen.name} clicked`);
    };
  
  const addSubmitListener = () => {
    const newRamen = document.getElementById("new-ramen");
    newRamen.addEventListener('submit', (e) => {
      e.preventDefault();
  
  const ramenNew = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target.comment.value
  };

  fetch('http://localhost:3000/ramens', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(ramenNew)
  })
  .then(response => response.json())
  .then(newRamen => {
    addRamenToDOM(newRamen);
  });
});
};

  const displayRamens = () => {
    fetch(`http://localhost:3000/ramens`)
    .then((resp) => resp.json())
    .then((ramenData) => {
      const ramenMenu = document.getElementById('ramen-menu');
      ramenData.forEach(ramen => {
        addRamenToDOM(ramen);
      })
    })

  const addRamenToDOM = (ramen) => {
    const ramenMenu = document.getElementById('ramen-menu');
    const ramenImg = document.createElement("img");
    ramenImg.src = ramen.image;
    ramenImg.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(ramenImg);
    };
  };

const main = () => {
  displayRamens ()
  addSubmitListener ()
}

main ()
})
//   fetch('http://localhost:3000/ramens', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(ramenNew)
//   })
//   .then(response => response.json())
//   .then(newRamen => {
//     addRamenToDOM(newRamen);
//     });
//   }); 
// };

// const displayRamens = () => {
//   fetch(`http://localhost:3000/ramens`)
//   .then((resp) => resp.json())
//   .then((ramenData) => {
//     ramenData.forEach(ramen => {
//       const ramenRest = document.createElement('div')
//       ramenRest.id = "ramen-menu"

//       const ramenImg = document.createElement("img");
//       ramenImg.src = ramen.image;
//       ramenRest.appendChild(ramenImg);

// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// }

// // Export functions for testing
//   // export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };
//
// // Callbacks
//   const handleClick = (ramen) => {
//   // Add code
//   };
//
//   const addSubmitListener = () => {
//   // Add code
//   const newRamen = document.getElementById("new-ramen")
//   newRamen.addEventListener('submit', (e) => {
//     e.preventDefault
//   })
// }
//
//   const displayRamens = () => {
//     fetch(`http://localhost:3000/ramens`)
//     .then((resp) => resp.json())
//     .then((ramenData) => displayRamens(ramenData));
//     console.log(ramenData)
//   }
// };
//
// const main = () => {
//   // Invoke displayRamens here
//   displayRamens 
//   // Invoke addSubmitListener here
// }
// 
//