let img1; 
let img;
let i = 0;
let match;
let imageSource;
let comparator = 0;
let j = 0
let pointsCount = 0
let points = document.getElementById('points')
const randomNum = Math.floor(Math.random() * 3);
const myArray = [   
     "corgi.png",
    "goldy.png",
    "shibe.png"
];




function flip(){ 
    img1 = document.getElementById('img1').src
           if(img1 == img){
               if(comparator != 1){
                    
                match = true
            document.getElementById('img1').classList.add('spin')
            setTimeout(function(){ 
                document.getElementById('img1').src = (myArray[randomNum])
                document.getElementById('img1').classList.remove('spin')
                comparator++
                pointsCount++
                document.getElementById('points').innerHTML = (pointsCount) 
            }, 500);
               }
           
        }
    if(match != true){
     
    if(i === 0){
       
        document.getElementById('img1').classList.add('spin')
        
    setTimeout(function(){ 
        document.getElementById('img1').src = (myArray[randomNum])
        document.getElementById('img1').classList.remove('spin')
        i++
        
    }, 500);
   
    
    }
        if(i === 1){
        document.getElementById('img1').classList.add('spin')
        setTimeout(function(){ 
            document.getElementById('img1').src = ('question.png')
            document.getElementById('img1').classList.remove('spin')
            i += -1
        }, 500);       
          

    }
   
}
    
    
}
function flip1(){ 
    img = document.getElementById('img').src 
    if(img1 == img){
        if(comparator != 1){
            match = true
            document.getElementById('img').classList.add('spin')
            setTimeout(function(){ 
                document.getElementById('img').src = (myArray[randomNum])
                document.getElementById('img').classList.remove('spin')
                 comparator++
                 pointsCount++
                 document.getElementById('points').innerHTML = (pointsCount) 
            }, 500)
           ;
        }
            
           
            
        }
    if(match != true){
    if(j === 0){
       
        document.getElementById('img').classList.add('spin')
        
    setTimeout(function(){ 
        document.getElementById('img').src = (myArray[randomNum])
        document.getElementById('img').classList.remove('spin')
        j++
        
    }, 500);
   
    
    }
        if(j === 1){
        document.getElementById('img').classList.add('spin')
        setTimeout(function(){ 
            document.getElementById('img').src = ('question.png')
            document.getElementById('img').classList.remove('spin')
            j += -1
        }, 500);       
       
}
       
}
}


















/*if(randomNum <= 33.333){
  imageSource = "corgi.png"
}else if(randomNum > 33.333 && randomNum <= 66.666){
 imageSource = "goldy.png"
} else if(randomNum > 66.66 && randomNum <= 100){
    imageSource= "shibe.png"
}*/