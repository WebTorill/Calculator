//function that display value
function display(val)
{
    document.getElementById("txtResult").value+=val;
}

//function that evaluates the digit and return result
function solve()
{
    let x = document.getElementById("txtResult").value;
    let y = eval(x);
    document.getElementById("txtResult").value = y;
}

//function that clear the display
function clr()
{
    document.getElementById("txtResult").value = "";
}

//function that clears the last entered value in the display
function clrLast()
{
    let existing = document.getElementById("txtResult").value;
    let newValue = existing.substring(0, existing.length-1);
    document.getElementById("txtResult").value = newValue;
}

