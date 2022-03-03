function addString(input) {
    const inputDelim = input.substring(0, input.indexOf("\\n") +2).match(/[^//].*(?=\\n)/g);
    let inputArr = [];

    if (inputDelim) {
        const stringStartIndex = input.indexOf("\\n");
        const inputString = input.substring(stringStartIndex + 2);
        inputArr = inputString.replace(/\\n/g, "").split(inputDelim[0]);
    } else {
        inputArr = input.replace(/\\n/g, "").split(",");
    }

    const calcObj = calulateTotal(inputArr, inputDelim);

    return calcObj;
} 

function calulateTotal(inputArr, delimiter) {
    let total = 0;
    const negatives = [];
    const processedArr = [];

    inputArr.map((number) => {
        let currNum = parseInt(number, 10);

        if (isNaN(currNum)) currNum = 0;

        if (Math.sign(currNum) === -1) {
            processedArr.push(currNum);
            negatives.push(currNum);
        } else if (!(currNum > 1000)) {
            processedArr.push(currNum);
            total = total + currNum;
        }

        return true;
    });

    if (negatives.length > 0) {
        return {
            inputArr: processedArr,
            total: "Error: negative numbers used",
            delimiter,
            error: true,
        }
    }
    return { inputArr: processedArr, total, delimiter };
};

module.exports = addString;