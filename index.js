function scuberGreetingForFeet(distance){
  // Write your code here!
  let greeting;
    if (distance <= 400){
      greeting = "This one is on me!"
} else if(distance <2000){
      greeting = "That will be twenty bucks."
} else if(distance <2500){
      greeting = "I will gladly take your thirty bucks."
} else {
      greeting = "No can do."
}
return greeting;
}  

function ternaryCheckCity(NYC){
  // Write your code here!
  const city="NYC"
  return city===NYC? "Ok, sounds good." : "No go.";
}
console.log(ternaryCheckCity("LA"))

function switchOnCharmFromTip(tip){
  // Write your code here!
   
  switch (tip) {
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you."
    default:
      return "Bye.";    
  }
  console.log(switchOnCharmFromTip("generous"))
  
}