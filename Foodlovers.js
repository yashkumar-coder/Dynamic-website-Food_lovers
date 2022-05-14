// this is for main Component

const imgArray1=["food1.jpg","food4.jpg","food6.jpg","food7.jpg"];
const mainDiv=document.getElementById("container");
setInterval( ()=>{
            const randomIndex = getRndInteger(0,imgArray1.length-1);
        //     mainDiv.src=imgarray1[randomIndex];
        //    mainDiv.innerHTML=imgarray1[randomIndex];
        mainDiv.style.setProperty('background-image', imgArray1[randomIndex]);
        // backgroundImage=imgArray1[randomIndex];
        // window.getComputedStyle(mainDiv).getPropertyValue("background-image");
        // console.log(window.getComputedStyle(mainDiv).getPropertyValue("background-image"))
        console.log(mainDiv)
        console.log(randomIndex);
        },2000);

        



// THIS IS FOR BELOW ELENTNTS



const imgarray=["food1.jpg","food2.jpg","food3.jpg","food4.jpg","food5.jpg","food6.jpg","food7.jpg","food8.jpg","food9.jpg"];
const n1=document.getElementById("changeimages1");
setInterval( ()=>{
            const randomIndex = getRndInteger(0,imgarray.length-1);
            n1.src=imgarray[randomIndex];
            document.getElementById("changesimages1").innerHTML=imgarray[randomIndex];
            console.log(randomIndex);
        },2000);

        function getRndInteger(min,max){
                return Math.floor(Math.random()*(max-min+1));
            }


const n2=document.getElementById("changeimages2");
setInterval( ()=>{
            const randomIndex = getRndInteger(0,imgarray.length-1);
            n2.src=imgarray[randomIndex];
            document.getElementById("changesimages2").innerHTML=imgarray[randomIndex];
            console.log(randomIndex);
        },2000);
        
const n3=document.getElementById("changeimages3");
setInterval( ()=>{
            const randomIndex = getRndInteger(0,imgarray.length-1);
            n3.src=imgarray[randomIndex];
            document.getElementById("changesimages3").innerHTML=imgarray[randomIndex];
            console.log(randomIndex);
        },2000);        

const n4=document.getElementById("changeimages4");
setInterval( ()=>{
            const randomIndex = getRndInteger(0,imgarray.length-1);
            n4.src=imgarray[randomIndex];
            document.getElementById("changesimages4").innerHTML=imgarray[randomIndex];
             console.log(randomIndex);
        },2000);

        const n5=document.getElementById("changeimages5");
        setInterval( ()=>{
                    const randomIndex = getRndInteger(0,imgarray.length-1);
                    n5.src=imgarray[randomIndex];
                    document.getElementById("changesimages5").innerHTML=imgarray[randomIndex];
                     console.log(randomIndex);
                },2000);

const n6=document.getElementById("changeimages6");
setInterval( ()=>{
            const randomIndex = getRndInteger(0,imgarray.length-1);
            n6.src=imgarray[randomIndex];
            document.getElementById("changesimages6").innerHTML=imgarray[randomIndex];
             console.log(randomIndex);
        },2000);

const n7=document.getElementById("changeimages7");
setInterval( ()=>{
            const randomIndex = getRndInteger(0,imgarray.length-1);
            n7.src=imgarray[randomIndex];
            document.getElementById("changesimages7").innerHTML=imgarray[randomIndex];
             console.log(randomIndex);
        },2000);

const n8=document.getElementById("changeimages8");
setInterval( ()=>{
            const randomIndex = getRndInteger(0,imgarray.length-1);
            n8.src=imgarray[randomIndex];
            document.getElementById("changesimages8").innerHTML=imgarray[randomIndex];
             console.log(randomIndex);
        },2000);

const n9=document.getElementById("changeimages9");
setInterval( ()=>{
            const randomIndex = getRndInteger(0,imgarray.length-1);
            n9.src=imgarray[randomIndex];
            document.getElementById("changesimages9").innerHTML=imgarray[randomIndex];
             console.log(randomIndex);
        },2000);
                        