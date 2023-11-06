var video=document.getElementById("myvideo");
var btn=document.body.getElementsByClassName("btn")[0];


function button(){
if(video.paused){
    video.play();
    btn.innerHTML="Pause";
}
else{
    video.pause();
    btn.innerHTML="Play";
}

}
let five=document.getElementById("five");
let i=0;
do{


five.innerHTML=`${i}`;
five.classList.add("glow");  
i++;
}while(i<=5);



let vox=document.getElementsByClassName('vox')[0];
// vox.addEventListener("on mouseenter",()=>{
    // vox.classList.add("voom");
// })
// if((window.location.reload()==true)){
    // vox.classList.add("voom");

// }


// window.addEventListener("resize", function(){
//     vox.classList.add("voom");
// // adding css through js
// });
  


// $(document).ready(function(){
//     $("button").click(function(){
//       $("p").removeClass("intro");
