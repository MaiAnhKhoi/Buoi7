let inputWidth = prompt('Please enter width');
document.write("Enter width:" +"<br>")
document.write(inputWidth + "<br>");
let inputHeight = prompt('Please enter height');
document.write("Enter height :" +"<br>")
document.write(inputHeight + "<br>");
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
let area = width * height;
document.write("The area is: " + area);