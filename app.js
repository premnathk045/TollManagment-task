// Vehicle entry class declaration
class vehicleEntry {
    constructor (vehicleType, vehicleNumber, dateTime, tollName, tarrif) {
    
        this.vehicleType = vehicleType;
        this.vehicleNumber = vehicleNumber;
        this.dateTime = dateTime;
        this.tollName = tollName;
        this.tarrif = tarrif;
    }
}


// New toll class declaration
class NewToll {
    constructor (tollName) {
    
        this.tollName = tollName;
    }
}

// New toll class prototype 
NewToll.prototype.vehicleFare = function(vehicleType, singleJourney, returnJourney) {
    this.vehicleType = vehicleType;
    this.singleJourney = singleJourney;
    this.returnJourney = returnJourney;
}


// global variables
let vehicleEntry1;
let newTollEntry1;
let newTollEntry2;
let inputLoop;
let tarrif = document.querySelector('#tarrif');
let vehicleEntryArray = [];
let tollNameArray = [];
let tollFareArray = [];
let tollArrayLastelement; 

/*---------------------  vehicle entry table function begins  ---------------------------*/
function vehicleEntryValue(event) {
    event.preventDefault()

    let vehicleType = document.querySelector('#vehicle-type').value;
    let vehicleNumber = document.querySelector('#vehicle-number').value;
    let dateTime = new Date().toLocaleString();
    let tollName = document.querySelector('#toll-name').value;
    //let tarrif = document.querySelector('#tarrif').value;
    let tarrifValue = tarrif.textContent;
    
    // constructor class initializer
    vehicleEntry1 = new vehicleEntry(vehicleType, vehicleNumber, dateTime, tollName, tarrifValue);

    // converting object into string and storing in localstorage
    vehicleEntryArray.push(vehicleEntry1);
    localStorage.setItem('newVehicleEntry', JSON.stringify(vehicleEntryArray));


    let table = document.querySelector('#vehicle-list-table');
    
    let vehicleEntry1_deserialized = JSON.parse(localStorage.getItem('newVehicleEntry'));
    console.log(vehicleEntry1_deserialized);

    let newRow = table.insertRow(1);
    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    let newCell3 = newRow.insertCell(2);
    let newCell4 = newRow.insertCell(3);
    let newCell5 = newRow.insertCell(4);

    for(let i=0; i < vehicleEntry1_deserialized.length; i++){
        newCell1.innerHTML = vehicleEntry1_deserialized[i].vehicleType;
        newCell2.innerHTML = vehicleEntry1_deserialized[i].vehicleNumber;
        newCell3.innerHTML = vehicleEntry1_deserialized[i].dateTime;
        newCell4.innerHTML = vehicleEntry1_deserialized[i].tollName;
        newCell5.innerHTML = vehicleEntry1_deserialized[i].tarrif;
    }    

    document.querySelector('#new-vehicle-entry').style.display = "none";
    document.querySelector('.bg-overlay').style.display = "none";
}
/*---------------------  vehicle entry table function ends  ---------------------------*/




/*---------------------  function to load tables with data from local storage when page reloads   ---------------------------*/
window.onload = function() {
    let tollTable = document.querySelector('#toll-list-table');
    let newRow;
    let newCell1;


    let newTollEntry1_deserialized = JSON.parse(localStorage.getItem('newTollEntry1'));

    let newTollEntry2_deserialized = JSON.parse(localStorage.getItem('newTollEntry2'));

    console.log(newTollEntry1_deserialized);

    for(let j=0; j < newTollEntry1_deserialized.length; j++){
        tollArrayLastelement = newTollEntry1_deserialized[newTollEntry1_deserialized.length-[j+1]]; 
        newRow = tollTable.insertRow(1);
        newCell1 = newRow.insertCell(0);
        let newCell2 = newRow.insertCell(1);
        let newCell3 = newRow.insertCell(2);
        let newCell4 = newRow.insertCell(3);
        let newCell5 = newRow.insertCell(4);
        newCell1.innerHTML = tollArrayLastelement.tollName;


        for(let i=0; i < newTollEntry2_deserialized.length; i++){

            if(newTollEntry2_deserialized[i].vehicleType === 'Light'){
                newCell2.innerHTML = newTollEntry2_deserialized[i].singleJourney + '/' + newTollEntry2_deserialized[i].returnJourney;
            }else if (newTollEntry2_deserialized[i].vehicleType === 'LCV') {
                newCell3.innerHTML = newTollEntry2_deserialized[i].singleJourney + '/' + newTollEntry2_deserialized[i].returnJourney;
            }else if (newTollEntry2_deserialized[i].vehicleType === 'Medium') {
                newCell4.innerHTML = newTollEntry2_deserialized[i].singleJourney + '/' + newTollEntry2_deserialized[i].returnJourney;
            }else if(newTollEntry2_deserialized[i].vehicleType === 'Heavy vehicle') {
                newCell5.innerHTML = newTollEntry2_deserialized[i].singleJourney + '/' + newTollEntry2_deserialized[i].returnJourney;
            } 
        }
    }
    

    let table1 = document.querySelector('#vehicle-list-table');
    let newRow1;
    let reloadNewCell1;
    let vehicleEntry1_deserialized = JSON.parse(localStorage.getItem('newVehicleEntry'));     

    for(let i=0; i < vehicleEntry1_deserialized.length; i++){
        newRow1 = table1.insertRow(1);
        reloadNewCell1 = newRow1.insertCell(0);
        let reloadNewCell2 = newRow1.insertCell(1);
        let reloadNewCell3 = newRow1.insertCell(2);
        let reloadNewCell4 = newRow1.insertCell(3);
        let reloadNewCell5 = newRow1.insertCell(4);
        reloadNewCell1.innerHTML = vehicleEntry1_deserialized[i].vehicleType;
        reloadNewCell2.innerHTML = vehicleEntry1_deserialized[i].vehicleNumber;
        reloadNewCell3.innerHTML = vehicleEntry1_deserialized[i].dateTime;
        reloadNewCell4.innerHTML = vehicleEntry1_deserialized[i].tollName;
        reloadNewCell5.innerHTML = vehicleEntry1_deserialized[i].tarrif;
    }
    
       
}


/*---------------------  New toll entry table function begins  ---------------------------*/
function newTollValue(event) {
    event.preventDefault()

    let newTollName = document.querySelector('#new-toll-name').value;
   
    // constructor class initializer
    newTollEntry1 = new NewToll(newTollName);

    // converting object into string and storing in localstorage
    tollNameArray.push( newTollEntry1);
    localStorage.setItem("newTollEntry1", JSON.stringify(tollNameArray));


    let tollTable = document.querySelector('#toll-list-table');

    
    let newRow = tollTable.insertRow(1);

    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    let newCell3 = newRow.insertCell(2);
    let newCell4 = newRow.insertCell(3);
    let newCell5 = newRow.insertCell(4);

    // reading value from localstorage
    let newTollEntry1_deserialized = JSON.parse(localStorage.getItem('newTollEntry1'));
    console.log(newTollEntry1_deserialized);
    //selects the last element in arry
    tollArrayLastelement = newTollEntry1_deserialized[newTollEntry1_deserialized.length-1]; 
    newCell1.innerHTML = tollArrayLastelement.tollName;

    
    inputLoop = document.querySelectorAll('.vehicle-fare-sec');
    
    for(let i=0; i<inputLoop.length; i++){       

        let vehicleFareType = inputLoop[i].children[0].value;

        let vehicleFareSingle = inputLoop[i].children[1].value;

        let vehicleFareReturn = inputLoop[i].children[2].value;
        
        // constructor class initializer
        newTollEntry2 = new NewToll.prototype.vehicleFare(vehicleFareType, vehicleFareSingle, vehicleFareReturn);
        
        // converting object into string and storing in localstorage
        tollFareArray.push( newTollEntry2);
        localStorage.setItem("newTollEntry2", JSON.stringify(tollFareArray));

        // reading value from localstorage
        let newTollEntry2_deserialized = JSON.parse(localStorage.getItem('newTollEntry2'));
    

        if(newTollEntry2_deserialized[i].vehicleType === 'Light'){
            newCell2.innerHTML = newTollEntry2_deserialized[i].singleJourney + '/' + newTollEntry2_deserialized[i].returnJourney;
        }else if (newTollEntry2_deserialized[i].vehicleType === 'LCV') {
            newCell3.innerHTML = newTollEntry2_deserialized[i].singleJourney + '/' + newTollEntry2_deserialized[i].returnJourney;
        }else if (newTollEntry2_deserialized[i].vehicleType === 'Medium') {
            newCell4.innerHTML = newTollEntry2_deserialized[i].singleJourney + '/' + newTollEntry2_deserialized[i].returnJourney;
        }else if(newTollEntry2_deserialized[i].vehicleType === 'Heavy vehicle') {
            newCell5.innerHTML = newTollEntry2_deserialized[i].singleJourney + '/' + newTollEntry2_deserialized[i].returnJourney;
        } 
        
    }

    document.querySelector('#new-toll-entry').style.display = "none";
    document.querySelector('.bg-overlay').style.display = "none";
}
/*---------------------  New toll entry table function ends  ---------------------------*/




function vehicleEntryForm() {
    document.querySelector('.bg-overlay').style.display = "block";
    document.querySelector('#new-vehicle-entry').style.display = "flex";
    let selectedToll;

    /* ---- This section will calculate the toll tarrif amount for a new entry --- */

    document.querySelector("#toll-name").addEventListener('change', function() {
        selectedToll = this.value;
    });

    document.querySelector("#vehicle-type").addEventListener('change', function() {
        selectedVehicle = this.value;


        const tableRow3 = document.querySelector('#toll-list-table').querySelectorAll("tbody > tr");
        const headerCell3 = document.querySelector('#toll-table-header').children[0];
        const otherHeaderCell3 = headerCell3.parentElement.children;
        const columnIndex3 = Array.from(otherHeaderCell3).indexOf(headerCell3);
        const searchableCells3 = Array.from(tableRow3)
        .map((row) => row.querySelectorAll("td")[columnIndex3]);

        const searchQuery3 = selectedToll.toLowerCase();

        for(i=1; i<searchableCells3.length; i++) { 
            //const row3 = searchableCells3[i].closest("tr");
            const row3 = searchableCells3[i].closest("tr");
            const value3 = searchableCells3[i].textContent.toLowerCase().replace(",", "");
            
            if(value3.search(searchQuery3) === -1) {
               console.log('no match');
            } else{
                console.log('match');
                console.log(row3.children[1]);

                if(selectedVehicle === 'Light'){
                    // here the tarrif value is split and only single journey value is sent. 
                    tarrif.innerText = row3.children[1].textContent.toString().split("/")[0];

                }else if(selectedVehicle === 'LCV'){
                    tarrif.innerText = row3.children[2].textContent.toString().split("/")[0];

                }else if(selectedVehicle === 'Medium'){
                    tarrif.innerText = row3.children[3].textContent.toString().split("/")[0];

                }else if(selectedVehicle === 'Heavy vehicle'){
                    tarrif.innerText = row3.children[4].textContent.toString().split("/")[0];
                }       

            }

        }

    });

}

function newTollForm() {
    document.querySelector('.bg-overlay').style.display = "block";
    document.querySelector('#new-toll-entry').style.display = "flex";
}


/*---------------------  Top menu vehicle number search bar function begins  ---------------------------*/
const inputField = document.querySelector('.search-box');

function searchFunction() {
    const tableRow = document.querySelector('#vehicle-list-table').querySelectorAll("tbody > tr");
    const headerCell = document.querySelector('.table-header').children[1];
    const otherHeaderCell = headerCell.parentElement.children;
    const columnIndex = Array.from(otherHeaderCell).indexOf(headerCell);
    const searchableCells = Array.from(tableRow)
    .map((row) => row.querySelectorAll("td")[columnIndex]);

    const searchQuery = inputField.value.toLowerCase();

    // for(const tableCell of searchableCells) {
    for(i=1; i<searchableCells.length; i++) { 
        const row = searchableCells[i].closest("tr");
        const value = searchableCells[i].textContent.toLowerCase().replace(",", "");

        row.style.visibility = null;

        if(value.search(searchQuery) === -1) {
            row.style.visibility = "collapse";
        }
    }

}
/*---------------------  Top menu search bar function ends  ---------------------------*/



/*---------------------  Toll filter function begins ---------------------------*/

/* ---- This function will current tollgate name from toll log table and insert it into an filter dropdown --- */
function tollFilter(){

    document.querySelector('.toll-filter-dropdown').style.display = "block";

    const tableRow1 = document.querySelector('#toll-list-table').querySelectorAll("tbody > tr");
    const headerCell1 = document.querySelector('#toll-table-header').children[0];
    const otherHeaderCell1 = headerCell1.parentElement.children;
    const columnIndex1 = Array.from(otherHeaderCell1).indexOf(headerCell1);
    const searchableCells1 = Array.from(tableRow1)
    .map((row) => row.querySelectorAll("td")[columnIndex1]);

    for(i=1; i<searchableCells1.length; i++) {

        let newTollFilter = document.createElement('div');
        newTollFilter.classList.add('toll-filter-list');
        newTollFilter.innerHTML = searchableCells1[i].textContent;
        document.querySelector('.toll-filter-dropdown').appendChild(newTollFilter);
    } 



    const tollNameSelector = document.querySelectorAll('.toll-filter-list');

    tollNameSelector.forEach( function(element){
        element.addEventListener('click',function(){
            console.log('clicked');

            const tableRow2 = document.querySelector('#vehicle-list-table').querySelectorAll("tbody > tr");
            const headerCell2 = document.querySelector('.table-header').children[3];
            const otherHeaderCell2 = headerCell2.parentElement.children;
            const columnIndex2 = Array.from(otherHeaderCell2).indexOf(headerCell2);
            const searchableCells2 = Array.from(tableRow2)
            .map((row) => row.querySelectorAll("td")[columnIndex2]);
        
            const searchQuery2 = element.textContent.toLowerCase();
            console.log(searchQuery2);
        
            // for(const tableCell of searchableCells) {
            for(i=1; i<searchableCells2.length; i++) { 
                const row2 = searchableCells2[i].closest("tr");
                const value2 = searchableCells2[i].textContent.toLowerCase().replace(",", "");
        
                row2.style.visibility = null;
                
                if(searchQuery2 === 'all'){
                    row2.style.visibility = "visible";

                }else if(value2.search(searchQuery2) === -1) {
                    row2.style.visibility = "collapse";
                }
            }


        });
    });

}

function formClose() {
    document.querySelector('#new-toll-entry').style.display = "none";
    document.querySelector('#new-vehicle-entry').style.display = "none";
    document.querySelector('.toll-filter-dropdown').style.display = "none";
    document.querySelector('.bg-overlay').style.display = "none";
} 

function tollListDisplay() {
    document.querySelector('#vehicle-list-table').style.display = "none";
    document.querySelector('#toll-list-table').style.display = "inline-table";
    document.querySelector('#tollList-display').style.display = "none";
    document.querySelector('#tollList-back').style.display = "block";
}

function tollListBack() {
    document.querySelector('#vehicle-list-table').style.display = "inline-table";
    document.querySelector('#toll-list-table').style.display = "none";
    document.querySelector('#tollList-display').style.display = "block";
    document.querySelector('#tollList-back').style.display = "none";
}









