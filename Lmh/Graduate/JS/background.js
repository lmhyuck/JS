 const images=["0.jpeg","1.jpeg","2.jpeg"];

 const todaysImage=images[Math.floor(Math.random()*images.length)];

 const image=document.createElement("img");

 image.src=`IMG/2.jpeg`;

const background=document.querySelector("#background");

 background.appendChild(image);
