//let student = ["Timmy"," Janessa", "Arun"];
//let naughtyList = [];
//naughtyList.push(student[0]);

//let index = naughtyList.indexOf("Timmy");

//if (index > -1) {
  //  naughtyList= naughtyList.splice(index, 1);
//}
//console.log(naughtyList);

//let student = ["Mai","Kaila", "Gialmon"]
  //for(let index=0; index < student.length; index++){
   // console.log(student[index])
  //}
  let numField1 = document.getElementById('numField1');
  let numField2 = document.getElementById('numField2');
  let resultField = document.getElementById('resultField');
  let form = document.getElementById('Xiswhat%ofY')
  form.addEventListener('submit', function(event){
  //  if(!numField1.value II numField2.value) {alert("please enter value")} else{}
   let x = parseFloat(numField1.value);
   let y = parseFloat(numField2.value);
   let result = x/y;
   let percent = result * 100;
   resultField.innerText = "Answer:" + percent + "%";
   event.preventDefault();
   
  });
 // numField1.value = 
  //resultField.innerText=

  // javascript for the nav bar
  
  function dropDownMenu(){
    let dropDown = document.getElementById("dropdownClick");
    if(dropDown.className === "topnav") {
      dropDown.className += " responsive";
      //change topnav to topnav responsive
    } else{
      dropDown.className = "topnav";
    }
  }