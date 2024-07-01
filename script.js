let currentIndex = 0;
const images = [
    { src: 'images/image1.jpg', caption: 'Image 1' },
    { src: 'images/image2.jpg', caption: 'Image 2' },
    { src: 'images/image3.jpg', caption: 'Image 3' },
    { src: 'images/image4.jpg', caption: 'Image 4' },
    { src: 'images/image5.jpg', caption: 'Image 5' }
];

function changeImage(index, caption) {
    currentIndex = index;
    document.getElementById('main-image').src = images[index].src;
    document.getElementById('caption').textContent = caption;
}

function navigate(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    changeImage(currentIndex, images[currentIndex].caption);
}

function openModal() {
    document.getElementById('modal').style.display = "block";
    document.getElementById('modal-image').src = images[currentIndex].src;
    document.getElementById('modal-caption').textContent = images[currentIndex].caption;
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

document.getElementById('main-image').onclick = openModal;
