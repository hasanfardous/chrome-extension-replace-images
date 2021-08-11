const photos = [
    'https://i.ibb.co/vqTQ2F1/me-wih-bike.jpg',
    'https://i.ibb.co/H77YQCL/boating-in-light.jpg',
    'https://i.ibb.co/vJ81bhL/standing-all-with-bikes.jpg',
];

let imgs = document.getElementsByTagName('img');
for (let i = 0; i < imgs.length; i++) {
    let randomImg = Math.floor(Math.random() * photos.length);
    console.log(randomImg);
    imgs[i].src = photos[randomImg];
    console.log(imgs[i]);
}