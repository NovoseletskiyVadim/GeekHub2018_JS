
var divContainer=document.querySelector('div.container');


for(var i=1;i<=12;i++){


    // create element "img"
    var imgElement=document.createElement('img');


    // add attribute

    var dataSrcValue="image/"+i+".jpg";
    var altAttrValue="image "+i;
    
    imgElement.className='blockSize';
    imgElement.setAttribute('data-src',dataSrcValue);
    imgElement.setAttribute('alt', altAttrValue);

    // add elements
    divContainer.appendChild(imgElement);
}

console.log("structHtml.js=ok")