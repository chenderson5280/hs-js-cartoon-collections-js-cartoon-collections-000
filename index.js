function dwarfRollCall(dwarves) {
   var  callOut = ""
    for (let i = 0; i < dwarves.length; i++){
       callOut += `${i+1}. ${dwarves[i]} `
    }
  return callOut
}
function summonCaptainPlanet(planeteerCalls){
  var summonCall =[]
  for (let i=0;i < planeteerCalls.length ; i++){
       summonCall.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return summonCall
}
function longPlaneteerCalls(words) {
  for(let i = 0; i<words.length; i++){
    if (words[i].index > 4){
      return true
    }
  }
   {
    return false
  }
}
function findTheCheese (foods) {
   var cheese = ['cheddar', 'gouda', 'camembert']
   for (let i=0;i<foods.length ; i++){
     for (let x=0;x < cheese.length; x++){
    if (foods[i] === cheese [x]){
      return cheese[x]
    }
    }
  }
  return  "no cheese!"
}
