//Carousel JavaScript

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left 
    and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out,
     or fade. It's up to you!
    6. Have fun!
*/

class Carousel {
    constructor(ele) {
        this.ele = ele;
        this.leftBtn = this.ele.querySelector('.left-button');
        this.rightBtn = this.ele.querySelector('.right-button');

        //STEP 2
        this.images = this.ele.querySelectorAll('.carousel img');
        //console.log(this.images);

        //STEP 3
        this.counter = 0;
        this.numOfImages = this.images.length;
        this.currentImage = this.images[0];
        //console.log(this.numOfImages);


        //STEP 4
        this.leftBtn.addEventListener('click', () => {
            this.changeImage(-1);
            console.log('left arrow clicked!');
        });

        this.rightBtn.addEventListener('click', () => {
            this.changeImage(1);
            console.log('right arrow clicked!');
        });
    }

    changeImage(index) {
        this.currentImage.classList.remove('current');

        this.counter = this.counter + index;
        //console.log(this.index);



        if (index === -1 && this.counter < 0) {
            this.counter = this.numOfImages - 1;
            //if the index is on the first image and you click left,
            //brings you to the last image
        } if (index === 1 && !this.images[this.counter]) {
            this.counter = 0;
            //if on the last image and you click right, 
            //brings you to the first image
        }

        console.log(this.counter);

        this.currentImage = this.images[this.counter];

        this.currentImage.classList.add('current');
    }

}

//STEP 1
let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);
//console.log(carousel);