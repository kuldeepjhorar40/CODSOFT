// function btnAction(el){
//     console.log(`el is${el}`);
//     // let ans = 0 ;
//     // ans = ans + el ;
//     // console.log(ans);
// }


function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
