let captions = [
  'Our First Halloween',
  'Our First Formal Pregame',
  'First Formal at Venue',
  'Champagne and Shackles',
  'Laguna Beach Trip',
  'Spring Formal',
  'Rooftop Cinema',
  'Love Story',
  'Boat formal',
  'Sunset Cruise',
  'Three Sisters Falls Hike',
  'Evening in the Cove',
  'Cove Sunset',
  'Santa Cruz Camping',
  'Fall Formal 2',
  'Big Bear Cabin Sandwich Making',
  'Leaving Big Bear',
  'Candy Cane Lane',
  'Party Bus to Formal',
  'Roller Skating Mayhem',
  'Roller Skating Date Dash',
  'Japanese Friendship Garden',
  'Bubble Run',
  'Exploring Puerto Vallarta',
  'Ziplining Adventure',
  'Puerto Vallarta Sunset',
  'Pre Dinner Cruise',
  'Zona Romantica',
  'On the way to our last Formal',
  'Falling Formal Foto',
  'Post Pottery Indian',
  'Windy Santa Catalina Ferry',
  'Parasailing!',
  'Catalina Island',
  'Han Solo and Leia',
]

for (let i = 1; i <= 35; i++) {
  // Create a new div element for each set of images
  const imageContainer = document.createElement('div');
  imageContainer.className = 'imageContainer';

  // Create an image element
  const img = document.createElement('img');
  img.className = 'pic';
  img.src = `images/${i}.jpeg`;
  img.alt = '';

  // Create a paragraph element
  const p = document.createElement('p');
  p.className = 'subtitle';
  p.textContent = captions[i-1];

  // Append the image and paragraph to the bodyContainer
  imageContainer.appendChild(img);
  imageContainer.appendChild(p);

  // Append the bodyContainer to the document
  let bodyContainer = document.querySelector('.bodycontainer')
  bodyContainer.appendChild(imageContainer);
}