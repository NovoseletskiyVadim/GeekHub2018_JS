// the callback function that will be fired
// when the element apears in the viewport

function myCallBack(entry) {
    entry.forEach((change) => {
        if(change.isIntersecting) {

            let attr=change.target.getAttribute('data-src');  
            change.target.setAttribute('src',attr);

        }
        
    });
}  

// list of options
let options = {
  threshold: 0.5
};

// instantiate a new Intersection Observer
let observer = new IntersectionObserver(myCallBack, options);

// list of paragraphs
let elements = document.querySelectorAll('img');

// loop through all elements
// pass each element to observe method
// ES2015 for-of loop can traverse through DOM Elements
for (let element of elements) {
  observer.observe(element);
}