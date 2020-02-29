window.onload = function () {

    const displayButtonCalculate = document.querySelectorAll(".btn btn-default");
    const selectGrade = document.querySelector('#select-grade');
    const selectYear = document.querySelector('#select-year');
    const selectGradeOveride = document.querySelector('#select-grade-overide');
    const yearTableHeader = document.querySelector('#school-year-table-header');
    const gradeTableHeader = document.querySelector('#grade-table-header');
    const lepTableHeader = document.querySelector('#lep-indicator-code-table-header');

    //CALCULATE FUNCTIONS

    const calculate = (grade, year) => {
        switch (grade) {
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
    });

}