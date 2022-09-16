// all variables
const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const check = document.querySelector("#check")
const answer = document.querySelector("#answer")


function compareValues(sum, luckyNumber) 
{
if (sum%luckyNumber === 0) {
answer.innerHTML="Your birthday is lucky 😊"
}else{
answer.innerHTML="No it's not lucky 🤓"
}
}


function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);      
  if(sum && dob)
  compareValues(sum, luckyNumber.value)
  else
  answer.innerHTML="Please add both value 😾"
}


function calculateSum(dob) {
  dob = dob.replaceAll("-","");
  console.log(dob)
  let sum = 0;
  for(let i=0;i<dob.length; i++){
    sum = sum + Number(dob.charAt(i));
  }
  console.log(sum)

  return sum;
}

check.addEventListener("click", //trigger event
checkBirthDateIsLucky)