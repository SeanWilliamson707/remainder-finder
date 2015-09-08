var remainderFind = function (num1, num2) {
    var divisCheck = function () {
        // checks if result of num1/num2 is a float
        var numResult = num1/num2;

        if (num1 > num2 && num1 !== 0 && num2 !== 0) {
            return numResult % 1 === 0 ? divisible() : notDivisible();
        } else if (num2 > num1 && num1 !== 0 && num2 !== 0) {
            return divisOver();
        } else if (num1 === num2 && num1 !== 0 && num2 !== 0) {
            console.log("%s goes into %s one time.", num1, num2);
        } else if (num1 === 0) {
            console.log("Result is zero.");
        } else {
            console.log("Cannot divide by zero.");
        }

    };

    var divisible = function () {
        console.log("%s goes into %s %s times.", num2, num1, num1/num2);
    };

    var notDivisible = function () {
        dividend = num1 - 1;
        console.log("%s goes into %s %s times with a remainder of %s", num2, num1, Math.floor(dividend/num2), num1%num2);
    };

    var divisOver  = function () {
        var decimal = num1/num2;
        console.log("Decimal of %s", decimal.toFixed(2));
    };

    return divisCheck();
};

//input numbers
remainderFind(10, 3);
