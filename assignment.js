function cubeNumber(number){
  if(typeof number !== "number" ){
    return "please provide me a number"
  }
  else{
    if(number < 0){
      return "please provide a positive number"
    }
    else{
      return Math.pow(number, 3);
    }
  }
}
function matchFinder(x, y){
  if(typeof x !== "string" || typeof y !== "string"){
    return 'please give me two string data type'
  }else{
    if(x.includes(y)){
      return true;
    }
    else{
      return false;
    }
  }
}
function sortMaker(arry){
  if(!Array.isArray(arry)){
      return 'give me an array'
  }
  else{
      if(arry[0] === arry[1]){
          return 'equal';
      }
      else if(arry[0] > 0 && arry[1] > 0){
         const decorat = arry.sort((a, b) => b - a);
         return decorat;
      }
      else if(arry[0] < 0 || arry[1] < 0){
          return 'Invalid Input'
      }
  }
}
function findAddress(obj){
  if(typeof obj !== 'object'){
    return 'provide me a object which lenth is three'
  }
  else{
      const length = Object.keys(object).length;
      if(length == 3){
        let value = Object.values(obj)
        return value;

      }
      else if(length > 3){
        return "provide me 3 element of an object";

      }
      else{
        const street = obj.street || "_"
        const house = obj.house || "_"
        const society = obj.society || "_"
        return street+","+ house+","+ society;
      }
  }

}
function canPay(arry, number){
  let sum = 0;
  for(let i = 0; i<arry.length; i++){
      const index = arry[i]
      sum +=index
  }
  if(arry.length === 0 || !Array.isArray(arry) || typeof number  !== "number"){
      return 'please give some number'
  }
  else if(sum >= number){
      return true;
  }
  else{
      return false;
  }
}