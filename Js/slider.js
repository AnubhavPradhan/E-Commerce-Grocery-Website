//Creating array for images
var images = ['Images/Slider/slider1.jpg', 'Images/Slider/slider2.jpg', 'Images/Slider/slider3.jpg', 'Images/Slider/slider4.jpg', 'Images/Slider/slider5.jpg' ];
var x = 0;
var imgs = document.getElementById('slide');
//Trigges function slider ever 3 seconds
setInterval(slider, 3000);
function slider() {
    //Value of x determines which image is going to be displayed
    if(x < images.length) {
    x = x + 1;
    } 
    
    else {
    x = 1;
    }
    //replaces html of slide id which sets image that is displayed
    imgs.innerHTML = "<img src=" + images[x - 1] + ">";
}