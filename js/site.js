
function getValues() 
{
    
    //grabs the value of the fizz input
    let fizzValue = document.getElementById("fizzValue").value;

    
    //grabs the value of the buzz input
    let buzzValue = document.getElementById("buzzValue").value;

    //parses both numbers to make sure they are ints
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
  

    //validates that both inputs are integers
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
   
        //grabs the data from the FizzBuzz function
        let fbData = FizzBuzz(fizzValue, buzzValue);
      
        //Calls and sends the FizzBuzz data to the DisplayData function
        displayData(fbData);

    } else {
        
        //alerts to make sure they know to enter integers
        alert("Please enter only Integer Numbers.");
    }

}

//Traditional Solve Fizz Buzz with a for loop
function FizzBuzz(value1, value2) {
    
    let returnArray = [];
  

    //looping through the numbers 1 to 100
    for(let i = 1; i <= 100; i++){
        
        //creating the logic conditions // pushes the correct info to the array
        if(i % value1 == 0 && i % value2 == 0){
   
            returnArray.push("FizzBuzz");
            
        } 

        else if(i % value1 == 0){
 
            returnArray.push("Fizz");
        } 
        
        else if(i %value2 == 0){

            returnArray.push("Buzz");
        } 
        else
        {
            returnArray.push(i);
        } 
    }
    
   
    //returns the array
    return returnArray;
}

//custom display function
function displayData(fbData) {

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the row from the template
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fbData.length; i += 5) {
        const tableRow = document.importNode(templateRow.content, true);
        //grab only the columns in the template
        rowCols = tableRow.querySelectorAll("td");
        
        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];
       
        rowCols[1].classList.add(fbData[i+ 1]);
        rowCols[1].textContent = fbData[i + 1];
       
        rowCols[2].classList.add(fbData[i+2]);
        rowCols[2].textContent = fbData[i + 2];
       
        rowCols[3].classList.add(fbData[i+3]);
        rowCols[3].textContent = fbData[i + 3];
       
        rowCols[4].classList.add(fbData[i+4]);
        rowCols[4].textContent = fbData[i + 4];

        tableBody.appendChild(tableRow);
    }

}