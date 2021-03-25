const pictureSelect = document.querySelectorAll(".presentation");
const largeDiv = document.querySelector('.large__foto');
const largeImg = document.querySelector('.large__foto--element');
const closeLargeDiv = document.querySelector('.close');

for (let pictureSelected of pictureSelect) {
    pictureSelected.addEventListener('click', () => {
        let pictureSRC = pictureSelected.src;
        largeDiv.style.display = "block";
        largeImg.src = pictureSRC;
        console.log(pictureSelected);

    });
}

closeLargeDiv.addEventListener('click', () => {
    largeDiv.style.display = "none";
})