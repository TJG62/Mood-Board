
var happy=["https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Flaurastudarus%2Ffiles%2F2017%2F11%2FHappy_place-1200x801.jpg","https://www.godupdates.com/wp-content/uploads/2015/07/mj-godupdates-15-pictures-to-make-you-happy-7.jpg","https://mhconsult.com/sites/default/files/blog/happiness.jpg"];
var angry=["https://static.tvtropes.org/pmwiki/pub/images/inside_out_anger_fullbody.png","",""];
$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "Depressed"){
       
    } else if(input==="Happy"){
        Happy();
    }else if(input==="Angry"){
        
    }else if (input==="Calm"){
      
    }else{
     alert("Please enter comedy, romance, or horror!");   
    }
});
function Happy(){
changeColor("blue");
changeTextColor("yellow");
displayImage(happy[0]);
displayImage(happy[1]);
displayImage(happy[2]);
}

function Depressed(){
    
    
}


function Angry(){
changeColor("red");
changeTextColor("Orange");
displayImage(angry[0]);
displayImage(angry[1]);
displayImage(angry[2]);
    
    
}

function Calm(){


}

function changeTextColor(color){
    $('body').css('color', color);
}

function changeColor(backgroundColor){
    $('body').css('background-color', backgroundColor);
}


function displayImage(image){
    $('.images').append('<img src ='+ image + '>');
}