const pictureSelect = document.querySelectorAll(".presentation");
const largeDiv = document.querySelector('.large__foto');
const largeImg = document.querySelector('.large__foto--element');
const closeLargeDiv = document.querySelector('.close');
let fps = 30;

for (let pictureSelected of pictureSelect) {
    pictureSelected.addEventListener('click', () => {
        let pictureSRC = pictureSelected.src;
        largeDiv.classList.add('large__foto--display');
        largeImg.src = pictureSRC;
    });
}

largeDiv.addEventListener('click', (e) => {
    if (e.target != largeImg)
        largeDiv.classList.remove('large__foto--display');
});

// let start = null;
// const animation = () => {
//     setTimeout(function() {
//         for (let i = 0; i <= 500; i++) {
//             largeImg.style.width = i + "px";
//         }
//         requestAnimationFrame(animation);
//     }, 1000 / fps);
// }
// animation();
// console.log(pictureSelected);
// });

const sliderDiv = document.querySelector('.slider');
const sliderImage = document.createElement('img');
const sliderBeforePreviousImage = document.createElement('img');
const sliderPreviousImage = document.createElement('img');
const sliderNextImage = document.createElement('img');
const btnSlideLeft = document.querySelector('.left__arrow');
const btnSlideRight = document.querySelector('.right__arrow');

const flowerImages = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'];

let i = 0;

const displayImage = () => {
    sliderBeforePreviousImage.src = flowerImages[i];
    sliderPreviousImage.src = flowerImages[i + 1];
    sliderImage.src = flowerImages[i + 2];
    sliderNextImage.src = flowerImages[i + 3];
}

displayImage();

const switchImagesLeft = () => {
    i++;
    if (i == flowerImages.length - 3) {
        sliderBeforePreviousImage.src = flowerImages[i];
        sliderPreviousImage.src = flowerImages[i + 1];
        sliderImage.src = flowerImages[i + 2];
        sliderNextImage.src = flowerImages[0];
        return;
    }

    if (i == flowerImages.length - 2) {
        sliderBeforePreviousImage.src = flowerImages[i];
        sliderPreviousImage.src = flowerImages[i + 1];
        sliderImage.src = flowerImages[0];
        sliderNextImage.src = flowerImages[1];
        return;
    }

    if (i == flowerImages.length - 1) {
        sliderBeforePreviousImage.src = flowerImages[i];
        sliderPreviousImage.src = flowerImages[0];
        sliderImage.src = flowerImages[1];
        sliderNextImage.src = flowerImages[2];
        return;
    }

    if (i >= flowerImages.length) {
        i = 0;
        displayImage(i);
    } else {
        displayImage(i);
    }
}

const switchImagesRight = () => {
    i--;

    if (i == -1) {
        sliderBeforePreviousImage.src = flowerImages[flowerImages.length - 1];
        sliderPreviousImage.src = flowerImages[0];
        sliderImage.src = flowerImages[1];
        sliderNextImage.src = flowerImages[2];
        return;
    }

    if (i == -2) {
        sliderBeforePreviousImage.src = flowerImages[flowerImages.length - 2];
        sliderPreviousImage.src = flowerImages[flowerImages.length - 1];
        sliderImage.src = flowerImages[0];
        sliderNextImage.src = flowerImages[1];
        return;
    }

    if (i == -3) {
        sliderBeforePreviousImage.src = flowerImages[flowerImages.length - 3];
        sliderPreviousImage.src = flowerImages[flowerImages.length - 2];
        sliderImage.src = flowerImages[flowerImages.length - 1];
        sliderNextImage.src = flowerImages[0];
        return;
    }

    displayImage(i);
    if (i <= -4) {
        i = flowerImages.length - 4;
        displayImage(i);
    }
}

btnSlideLeft.addEventListener("click", switchImagesLeft);
btnSlideRight.addEventListener("click", switchImagesRight);



sliderImage.classList.add('slide__image');
sliderBeforePreviousImage.classList.add('slide__image');
sliderPreviousImage.classList.add('slide__image');
sliderNextImage.classList.add('slide__image');
sliderDiv.appendChild(sliderBeforePreviousImage);
sliderDiv.appendChild(sliderPreviousImage);
sliderDiv.appendChild(sliderImage);
sliderDiv.appendChild(sliderNextImage);