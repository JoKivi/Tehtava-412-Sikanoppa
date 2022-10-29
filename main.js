var face0=new Image()
face0.src="images/d1.png"
var face1=new Image()
face1.src="images/d2.png"
var face2=new Image()
face2.src="images/d3.png"
var face3=new Image()
face3.src="images/d4.png"
var face4=new Image()
face4.src="images/d5.png"
var face5=new Image()
face5.src="images/d6.png"

function throwdice(){
    var randomdice=Math.round(Math.random()*6)
    document.images["noppa"].src=eval("face"+randomdice+".src")
}