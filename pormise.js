function makewaffle(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve("Waffle is ready")
        },2500);
        })
    }
function geticescream(){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            let icecream=false;
            if(icecream){
                resolve("got icecream")
            }else{
                reject("did not get icecream")
            }
        },1500);
    })
}
function snack(){
    makewaffle()
    .then(function(data){
        console.log(data);
            return geticescream()
    })
    .then(function(data){
        console.log(data);
        console.log("set up the table")
    })
    .catch(function(error){
        console.log(`${error} so make choclate syrup`)
    })
}
snack()