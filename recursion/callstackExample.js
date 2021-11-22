function takeShower() {
  return "Showering!";
}
function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ['Oatmeal', 'Eggs', 'Protein Shake'];
  return items[Math.floor(Math.random()*items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!");
}

wakeUp();

//call stack returns takeShower, then removes
//eatBreakfast is called to top of stack, then calls cookFood to top
//cookFood removed, eatBreakfast back on top
//wakeUp is called back to top and returned
