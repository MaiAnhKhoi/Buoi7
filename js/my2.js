function convert()
{
    tmp = document.getElementById("money");
    txt = document.getElementById("result");
    if(document.getElementById("from").value == "VND" && document.getElementById("to").value == "VND")
    {
        txt.innerText = "Result: " + tmp.value;
    }
    else if(document.getElementById("from").value == "VND" && document.getElementById("to").value == "USD")
    {
        txt.innerText = "Result: "+ tmp.value/23000;
    }
    else if(document.getElementById("to").value == "USD" && document.getElementById("from").value == "USD")
    {
        txt.innerText = "Result: "+ tmp.value;
    }
    else if(document.getElementById("to").value == "USD" && document.getElementById("from").value == "VND")
    {
        txt.innerText = "Result: "+ tmp.value*23000;
    }
    else
    {
        txt.innerText = "Error: "+ tmp.value;
    }
}