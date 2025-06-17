function calculate(oparator) {
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    let result;
    switch (oparator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'X':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0)
                result = num1 / num2;
            else
                result = "Lỗi chia 0";
            break;
        default:
            result = "Phép toán không hợp lệ";
    }
    document.getElementById('result').innerText = "Result là:" + result
}