// Code your solution in this file!
function distanceFromHqInBlocks(pick){
   const headquaters=42
   return pick-headquaters
}
function distanceFromHqInFeet(pick){
    distanceFromHqInBlocks(pick)
    const feet = 264
    return pick*feet
}
 function distanceTravelledInFeet(start, destination){
 const blockstravelled=(destination-start)
 const feetperblock= 264
 return blockstravelled*feetperblock
 }
 

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet (start, destination)
    if (distance<=400){
        return 0
    }else if (distance > 400 && distance <= 2000){
        return (distance - 0)*0.02
    }else if (distance >2000 && distance <= 2500){
        return 25
    }else{
        return 'cannot travel that far'
}

}
console.log(distanceFromHqInBlocks(50))
console.log(distanceTravelledInFeet(10, 60))
console.log(distanceFromHqInFeet(50))
console.log(calculatesFarePrice(40, 60))

