let captions = [
  
]

for (let i = 1; i <= 36; i++) {
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