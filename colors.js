//Declare the Color Object with our new keyword below here.
const colorObject(r,g,b){
  let rgb= [r,g,b]


/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks= (rgb[1] >= 0) && (rgb[1] <= 255);
  let blueworks= (rgb[2] >= 0) && (rgb[2] <= 255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
  let redIntensity= rgb[0]/255;
  redIntensity= Math.Round(redIntensity);

};

//greenIntensity
Color.greenIntensity = function(rgb){
  let greenIntensity= rgb[1]/255;
  greenIntensity= Math.Round(greenIntensity);
}
//blueIntensity
Color.blueIntensity = function(rgb){
  let blueIntensity= rgb[2]/255;
  blueIntensity= Math.Round(blueIntensity);
}
//brightness
Color.brightness= function(rgb)
let bright= (Color.redIntensity+Color.greenIntensity+Color.blueIntensity)/3
return bright



//complement
color.complement = function(rgb, comp){
let comp=[]
for(var a=0; a<rgb;a++);
complement=rgb[a]-255;
complement.push=com[];
}
return complement
}
