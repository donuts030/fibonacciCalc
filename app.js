console.log("connected to app.js");

function submitHandler(){
    const lenOfSeq = document.getElementById("lenOfSeq").valueAsNumber;
    console.log("submitted: ", lenOfSeq);
    fibonacciCalc(lenOfSeq);
}

function fibonacciCalc(lenOfSeq){
    const fibArr = [];
    if(lenOfSeq === 1){
        fibArr.push(0)
        console.log(fibArr)
    }
    else if(!isNaN(lenOfSeq) && lenOfSeq > 1){
        fibArr.push(0, 1)
        for(let i = 2; i < lenOfSeq; i++){
            const currFibNumb = fibArr[i - 2] + fibArr[i - 1];
            fibArr.push(currFibNumb)
        }
        console.log(fibArr);
    }
    outputDisplay(fibArr);
}

function outputDisplay(fibArr){
    let displayFib = "No values input"

    if (fibArr.length <= 0){
        displayFib = "Input empty or equals to 0"
    }
    else {
        displayFib = fibArr.join();
    }

    const displayHtml = document.createElement("p");
    const displayText = document.createTextNode(displayFib)
    displayHtml.appendChild(displayText)
    document.getElementById("output").appendChild(displayHtml);
}