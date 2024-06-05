let myImage = document.querySelector("img")

myImage.onabort = function(){
    let mySrc = myImage.getAnimations("src");
    if(mySrc === "images/firefox-icn.png"){
        myImage,this.setAttribute("src","images/firefox2.png");
        } else{
            myImage.setAttribute("src","images/firefox-icon.png");
        }
}