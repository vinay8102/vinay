function addNewWEField() {
  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('weField');
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute('placeholder', 'Enter here');

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById('weAddButton');

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('eqField');
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute('placeholder', 'Enter here');

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById('aqAddButton');

  aqOb.insertBefore(newNode, aqAddButtonOb);
}
// Show the cv-form element
document.getElementById("cv-form").style.display = "block";


function generateCV() {
  let nameField = document.getElementById("nameField").value;
  document.getElementById("nameT1").textContent = nameField;
  document.getElementById("nameT2").textContent = nameField;
  let contactField = document.getElementById("contactField").value;
  document.getElementById("contactT").textContent=contactField;
  let addressField = document.getElementById("addressField").value;
  document.getElementById("addressT3").textContent = addressField;


  document.getElementById("fbT4").innerHTML = document.getElementById("fbField").value;
  document.getElementById("instaT5").innerHTML = document.getElementById("instaField").value;
  document.getElementById("linkedT6").innerHTML = document.getElementById("linkedField").value;

  let objectiveField = document.getElementById("ObjectiveField").value;
  document.getElementById("objectiveT").innerHTML = objectiveField;

  let weField = document.getElementsByClassName("weField");
  let weText = "";
  for (let i = 0; i < weField.length; i++) {
      weText += "<li>" + weField[i].value + "</li>";
  }
  document.getElementById("WeT").innerHTML = weText;

  let aqField = document.getElementsByClassName("eqField");
  let aqText = "";
  for (let i = 0; i < aqField.length; i++) {
      aqText += "<li>" + aqField[i].value + "</li>";
  }
  document.getElementById("aqT").innerHTML = aqText;
}

function printCV() {
  window.print();
}
