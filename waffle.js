makewaffle(geticescream);

function makewaffle(callback){
    setTimeout(() =>{
        console.log("set the table");
        console.log("waffle is ready")
        callback()   
    }, 2500);    
};
 function geticescream(){
    setTimeout(() => {
        let icecream=false;
        if( icecream){
            console.log("go the icecream")
        }else{
            console.log("did not get icecream")
        }},1500
    )
    

 }