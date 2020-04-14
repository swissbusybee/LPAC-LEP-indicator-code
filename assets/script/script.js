const form = document.querySelector("form");
const displayButtonCalculate = document.querySelector("#btnclick");
const selectGrade = document.querySelector("#select-grade");
const selectYear = document.querySelector("#select-year");
const selectLepCode = document.querySelector("#select-lep-code");

const yearTableHeader = document.querySelector("#school-year-table-header");
const gradeTableHeader = document.querySelector("#grade-table-header");
const lepTableHeader = document.querySelector("#lep-indicator-code-table-header");

// ADD TABLE AT CLICK

function addTable() {
  const data = [
    ["2008-2009", "", ""],
    ["2009-2010", "", ""],
    ["2010-2011", "", ""],
    ["2011-2012", "", ""],
    ["2012-2013", "", ""],
    ["2013-2014", "", ""],
    ["2014-2015", "", ""],
    ["2015-2016", "", ""],
    ["2016-2017", "", ""],
    ["2017-2018", "", ""],
    ["2018-2019", "", ""],
    ["2019-2020", "", ""],
    ["2020-2021", "", ""],
    ["2021-2022", "", ""],
    ["2022-2023", "", ""],
    ["2023-2024", "", ""],
    ["2024-2025", "", ""],
    ["2025-2026", "", ""],
    ["2026-2027", "", ""],
    ["2027-2028", "", ""],
    ["2028-2029", "", ""],
    ["2029-2030", "", ""],
    ["2030-2031", "", ""],
    ["2031-2032", "", ""],
    ["2032-2033", "", ""]]

  // const myTableDiv = document.querySelector("#myDynamicTable");
  const table = document.querySelector("#table");
    for(let i = 0; i < data.length; i++) {
      // create a new row
      let newRow = table.insertRow(table.length);
      for(let j = 0; j < data[i].length; j++) {
        // create a new cell
        let cell = newRow.insertCell(j);
        // add value to the cell
        cell.innerHTML = data[i][j];
      }
    }
}

// ADDING TO TABLE FROM FORM INPUT

function formTable(selector) {
  const grid = document.querySelector(selector);
  const formGrid = grid.getElementsByTagName("form")[0];
  const tableGrid = grid.getElementsByTagName("table")[0];

  form.onsubmit = function (ev) {
    ev = ev || event;
    ev.preventDefault();

    let tr = document.createElement("tr"), td;

    for (let i = 0; i < 3; i++) {
      td = document.createElement("td");
      td.innerHTML = this.elements[i].value;
      tr.appendChild(td);
    }
  tableGrid.appendChild(tr);
  }
}

formTable(".grid");

// LEP CODE LOGIC

function lepYearLogic() {
  // if M1 lep code for grades 3 thru 12 is chosen
  //   then code M1 for the grade and M2, M3, M4 for the following upper grades.
  //   and anything before will stay at L.
  //    when year is chosen, update table to account for a total 13
  //    years in school. Years should be in descending order.
}

// SORT (GRADE DESC) (YEAR DESC)

function sortTable() {
  let table, i, x, y;
  table = document.getElementById("table");
  let switching = true;

  // Run loop until no switching is needed
  while (switching) {
    switching = false;
    let rows = table.rows;

  // Loop to go through all rows
  for (i = 1; i < (rows.length - 1); i++) {
    var Switch = false;

  // Fetch 2 elements that need to be compared
    x = rows[i].getElementsByTagName("TD")[0];
    y = rows[i + 1].getElementsByTagName("TD")[0];

  // Check if 2 rows need to be switched
    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {

  // If yes, mark Switch as needed and break loop
      Switch = true;
      break;
      }
    }
    if (Switch) {
  // Function to switch rows and mark switch as completed
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

// ALLOW OVERIDE OF GRADE
let rIndex,
    table = document.getElementById("table");

function selectedRowtoEdit() {
  for(let i = 0; i < table.rows.length; i++) {
    table.rows[i].onclick = function() {
      rIndex = this.rowIndex;
      document.getElementById("grade").value = this.cells[1].innerHTML;
    };
  }
}

function editGrade() {
  const grade = document.getElementById("grade").value;
  table.rows[rIndex].cells[1].innerHTML = grade;
}

// DISPLAY & EVENT LISTENER FUNCTIONS
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTable();
  sortTable();
  // lepYearLogic();
  selectedRowtoEdit();
  displayButtonCalculate.disabled = true;
});
