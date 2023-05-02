let myImage = document.querySelector('img');
let imageArray = ['images/firefox-icon.png', 'images/R (1).jpg', 'images/R(2).jpg', 'images/R(3).jpg'];

let index = 0;
myImage.onclick = function() {
  index = (index + 1) % imageArray.length;
  myImage.setAttribute('src', imageArray[index]);
};



    

  

