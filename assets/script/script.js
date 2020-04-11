window.onload = function () {

    // ADDING TO TABLE FROM INPUT

    function formTable(selector) {
        var grid = document.querySelector(selector);
        var form = grid.getElementsByTagName("form")[0];
        var table = grid.getElementsByTagName("table")[0];

        form.onsubmit = function (ev) {
            ev = ev || event;
            ev.preventDefault();

            var tr = document.createElement("tr"), td;

            for (let i = 0; i < 3; i++) {
                td = document.createElement("td");
                td.innerHTML = this.elements[i].value;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    }

    formTable(".grid");

    // TABLE SORT ON BUTTON CLICK 
    // https://www.geeksforgeeks.org/how-to-sort-rows-in-a-table-using-javascript/

    let clickedButton = document.getElementById("btnclick");

    clickedButton.addEventListener("click", sortTable);

    function sortTable() {
        let table, i, x, y;
        table = document.getElementById("maintable");
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
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

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


    /*const displayButtonCalculate = document.querySelectorAll(".btn btn-default");
    const selectGrade = document.querySelector('#select-grade');
    const selectYear = document.querySelector('#select-year');
    const selectGradeOveride = document.querySelector('#select-grade-overide');
    const yearTableHeader = document.querySelector('#school-year-table-header');
    const gradeTableHeader = document.querySelector('#grade-table-header');
    const lepTableHeader = document.querySelector('#lep-indicator-code-table-header');
    
    //CALCULATE FUNCTIONS
    
    const calculate = (grade) => {
        switch (calculate) {
            case 'K': return '1 = EL (BIL/ESL/PD)';
            case 1: return '1 = EL (BIL/ESL/PD)';
            case 2: return '1 = EL (BIL/ESL/PD)';
            case 3: return '1 = EL (BIL/ESL/PD)';
            case 4: return '1 = EL (BIL/ESL/PD)';
            case 5: return '1 = EL (BIL/ESL/PD)';
            case 6: return '1 = EL (BIL/ESL/PD)';
            case 7: return '1 = EL (BIL/ESL/PD)';
            case 8: return '1 = EL (BIL/ESL/PD)';
            case 9: return 'F = M1';
            case 10: return 'S = M2';
            case 11: return '3 = M3';
            case 12: return '4 = M4';
            default: return 0;
        }
    };
    
    //DISPLAY & EVENT LISTENER FUNCTIONS
    
    displayButtonCalculate.forEach((button) => {
        button.addEventListener('click', (e) => {
            const val = e.target.value;
        })
    });*/

}