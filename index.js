// Code your solution in this file!
function distanceFromHqInBlocks(pick){
   let headquaters=42
   if (pick > headquaters){
    let actualDistance = pick-headquaters
     return actualDistance
   }else if (pick < headquaters) { 
    return headquaters - pick
   }else {
    return 'in the same block'
   }
}
function distanceFromHqInFeet(pick){
    let destination;
    destination = distanceFromHqInBlocks(pick)*264
    return destination
}
 function distanceTravelledInFeet(start, destination){
//  const distanceFromHqInFeet= Math.abs(destination-start)*264
//  return distanceFromHqInFeet
if (start < destination){
    return (destination - start)*264
}else {
    return (start - destination)*264
}
 
 }
 

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if (distance<=400){
        return 0
    }else if (distance > 400 && distance <= 2000){
        return (distance - 400)*0.02
    }else if (distance >2000 && distance < 2500){
        return 25
    }else{
        return 'cannot travel that far'
}

}
console.log(distanceFromHqInBlocks(30))
console.log(distanceTravelledInFeet(4, 60))
console.log(distanceFromHqInFeet(50))
console.log(calculatesFarePrice(0, 60))

