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