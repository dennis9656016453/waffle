calculatearea(2,4,calculateperimeter);
function calculatearea(l,b,callback){
    var area = l*b;
    console.log(`the area is ${area}`);
    callback(l,b);
};
function calculateperimeter(a,b){ 
    var perimeter = 2*(a+b);
    console.log(`the perimeter is ${perimeter}`);
}


square(2,cube);
function square(l,callback){
    var square = l*l;
    console.log(`the square of number ${1} is ${square}`)
    callback(square,1);
};
function cube(a,b){
    var cube = a*b;
    console.log(`the cube is ${cube}`);

}


findarea(2,circum);
function findarea(r,callback) {
  var area= Math.PI*r*r;
  console.log(`the area of circle is ${area}`);
  callback(r);
};
function circum(r){
  var circum=2*Math.PI*r;
  console.log(`the circumference of circle is ${circum}`);
}