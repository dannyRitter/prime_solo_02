// ! ! !
// Three Bugs
// The first bug I found/changed was on line 21: I added [i] to calculateSTI(array[i]) so the for loop wouldn't remain stuck on arrayAtticus 
// The second bug I found/changed was on line 68: I removed the - 1 after basePercent, which fixed the percentage of STI for each employee.
// The third bug I found/changed was on line 43: I added Math.round(baseSalary * (1.0 + bonus)); and that cleaned up the output.
var objectAtticus = {
  name : "Atticus",
  employeeNumber : "2405",
  baseSalary : "47000",
  reviewScore : 3
};
//["Atticus", "2405", "47000", 3]

var objectJem = {
  name : "Jem",
  employeeNumber : "62347",
  baseSalary : "63500",
  reviewScore : 4
};
//["Jem", "62347", "63500", 4];

var objectBoo = {
  name : "Boo",
  employeeNumber : "11435",
  baseSalary : "54000",
  reviewScore : 3
};
//["Boo", "11435", "54000", 3];

var objectScout = {
  name : "Scout",
  employeeNumber : "6243",
  baseSalary : "74750",
  reviewScore : 5
};
//["Scout", "6243", "74750", 5];

var array = [objectAtticus, objectJem, objectBoo, objectScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i].name + ", " + array[i].STI + ", " + array[i].adjustedCompensation + ", " + array[i].bonus);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(object){
  var newObject = {
    name : "",
    STI : "",
    adjustedCompensation : "",
    bonus : ""
  };

  newObject.name = object.name;

  var employeeNumber = object.employeeNumber;
  var baseSalary = object.baseSalary;
  var reviewScore = object.reviewScore;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newObject.STI = bonus;
  newObject.adjustedCompensation = Math.round(baseSalary * (1.0 + bonus));
  newObject.bonus = baseSalary * bonus;
  console.log(newObject.name + " " + newObject.STI + " " + newObject.adjustedCompensation + " " + newObject.bonus);
  return newObject;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}