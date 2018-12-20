
document.getElementById("form_post").addEventListener("submit", postInformation);

function postInformation(){

    var authorPost,categoryPost,quotePost;
    authorPost=document.getElementById('text_author').value;
    categoryPost=document.getElementById('text_category').value;
    quotePost=document.getElementById('text_quote').value;

    function myObjectPost(authorPost,categoryPost, quotePost){
        this.quote=quotePost;
        this.author=authorPost;
        this.category=categoryPost;

    }

    let obj=new myObjectPost(authorPost,categoryPost, quotePost);

    var objPost=JSON.stringify(obj);

    var xhrString="https://andruxnet-random-famous-quotes.p.mashape.com"

    var xhr = new XMLHttpRequest();
    xhr.open('POST', xhrString, true);
    xhr.setRequestHeader('X-Mashape-Key', 'exGQOqiUDZmshHUXJGtAUoLMQrJwp1Wpkcpjsnr5J0cpyvTAXj');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Accept', 'application/json');

   
    xhr.onreadystatechange = function() {

        console.log("xhr.status =",xhr.status);
        console.log("xhr.readyState =",xhr.readyState);

        if (xhr.readyState === 4 && xhr.status == "200") {
    
            console.warn(xhr.responseText) 
    
        }
        else{
            console.error("myError");   
        }
    } 
    
    xhr.send(objPost);


    

   

    
    
        
    
    
}
