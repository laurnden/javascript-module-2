// Write your code here
const image1 = document.createElement('img');
image1.src = '/Homework/D-slideshow/images/daniel-kajuk-W9kYAvRixy4-unsplash.jpg';

const image2 = document.createElement('img');
image2.src = '/Homework/D-slideshow/images/pedro-monteiro-HfIex7qwTlI-unsplash.jpg';

const image3 = document.createElement('img');
image3.src = '/Homework/D-slideshow/images/sean-oulashin-KMn4VEeEPR8-unsplash.jpg';


const imagesOptions = [image1, image2, image3];
let index = 0;

function changeImage (){
    if (index > imagesOptions.length - 1) {
        index = 0;
    }
    document.// div da img .style. não sei = imagesOptions[index];
    index++;
}
