let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
//  imagesToLoad.forEach((img) => {
//    loadImages(img);


  if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
  
  

// const imagesToLoad = document.querySelectorAll("img[data-src]");


// // optional parameters being set for the Intersectional Observer

// const imgOptions = {



// threshold: 0,

//  rootMargin: "0px 0px 50px 0px"

// };



// const loadimages = (image) => {

// image.setAttribute('src', image.getAttribute('data-src'));

// image.onload=()=> {image.removeAttribute('data-src');};

// };



//  // first check to see if Intersection Observer is suppor

//  if('IntersectionObserver' in window) { 
//      const ingObserver = new IntersectionObserver((items, observer) => {
// items.forEach((item) => {

// });  }, imgOptions);



//  imagesToLoad.forEach((img) =>{
//  });

//  }



// else {}
  