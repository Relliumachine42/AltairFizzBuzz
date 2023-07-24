function getValues() {
    let fizzNumber = document.getElementById('fizzValue').value;
    let buzzNumber = document.getElementById('buzzValue').value;
    let endNumber = document.getElementById('endValue').value;
    fizzNumber = Number(fizzNumber);
    buzzNumber = Number(buzzNumber);
    endNumber = Number(endNumber);
    if(isNaN(fizzNumber) == true || isNaN(buzzNumber) == true || isNaN(endNumber) == true) {
        Swal.fire({
            title: "I'm sorry!",
            text: 'We only accept numbers here.',
            icon: 'error',
            backdrop: false
        });
    } else if(endNumber > 10000) {
        Swal.fire({
            title: '10,000 Limit',
            text: "You don't really need more than 10,000.",
            icon: 'error',
            backdrop: false
        });
    } else {
        let contentArray = generateFizzBuzz(fizzNumber, buzzNumber, endNumber);
        displayFizzBuzz(contentArray);
    }
}
function generateFizzBuzz(fizz, buzz, end) {
    let range = [];
    for (let number = 1; number <= end; number++) {
        if(number % fizz == 0 && number % buzz == 0) {
            range.push('FizzBuzz');
        } else if(number % fizz == 0) {
            range.push('Fizz');
        } else if(number % buzz == 0) {
            range.push('Buzz');
        } else {
            range.push(number);
        }
    }
    return range;
}
function displayFizzBuzz(contentToDisplay) {
    let tableHtml = '';
    for(let index = 0; index < contentToDisplay.length; index++) {
        let currentContent = contentToDisplay[index];
        tableHtml += `<div class="col ${currentContent}">${currentContent}</div>`;
    }
    document.getElementById('results').innerHTML = tableHtml;
}