
const displayButtonCalculate = document.querySelectorAll("#btnclick");
const selectGrade = document.querySelector('#select-grade');
const selectYear = document.querySelector('#select-year');
const selectLepCode = document.querySelector('#select-lep-code');

const yearTableHeader = document.querySelector('#school-year-table-header');
const gradeTableHeader = document.querySelector('#grade-table-header');
const lepTableHeader = document.querySelector('#lep-indicator-code-table-header');
const selectGradeOveride = document.querySelector('#select-grade-overide');

// ADD SELECTED LINE & CREATE TABLE AT CLICK (GRADE DESC) (YEAR DESC)


// ALLOW OVERIDE OF GRADE


// DISPLAY & EVENT LISTENER FUNCTIONS

    displayButtonCalculate.forEach((button) => {
        button.addEventListener('click', (e) => {
            const val = e.target.value;
        })
    });
