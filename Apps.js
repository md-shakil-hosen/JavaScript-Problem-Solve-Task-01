// ----------------find maximum between two numbers--------------------

function betweenTwoNumbers()
			{
				var maxNum1,maxNum2 ;
				maxNum1 = Number(document.getElementById("maxnumber1").value);
				maxNum2 = Number(document.getElementById("maxnumber2").value);

				if(maxNum1>maxNum2 )
				{
					window.alert(maxNum1+"-is greatest");
				}
				else if(maxNum2>maxNum1)
				{
					window.alert(maxNum2+"-is greatst");
				}
				else
                {
                    window.alert(" Two Number is Same");
                }
			}
// ----------------find maximum between three numbers--------------------

function largest()
			{
				var num1, num2, num3;
				num1 = Number(document.getElementById("maxThreeNumber1").value);
				num2 = Number(document.getElementById("maxThreeNumber2").value);
				num3 = Number(document.getElementById("maxThreeNumber3").value);

				if(num1>num2 && num1>num3)
				{
					window.alert(num1+"-is greatest");
				}
				else if(num2>num1 && num2>num3)
				{
					window.alert(num2+"-is greatest");
				}
				else if(num3>num1 && num3>num1)
				{
					window.alert(num3+"-is greatest");
				}
			}

// program that checks if the number is positive, negative or zero----------

            
// input from the user
function findNegPosZero(){
  var negPosZero1;
  negPosZero1 = Number(document.getElementById("maxNegPosNumber").value);
  // check if number is greater than 0
if (negPosZero1 > 0) {
    window.alert("The number is positive");
}

// check if number is 0
else if (negPosZero1 == 0) {
    window.alert("The number is zero");
}

// if number is less than 0
else {
    alert("The number is negative");
}
}

// ---------------a number is divisible by 5 and 11 or not---------------------
function divisibleNum(){

    var divisibleNumberCheck;
    divisibleNumberCheck= Number(document.getElementById("divisibleNumber").value);

    if(!(divisibleNumberCheck % 5) && !(divisibleNumberCheck % 11)){
        alert("Number is divisible by 5 and 11");
    }
    else {
        alert("Number is not divisible by 5 and 11");
    }
}


// ---------------Check Whether a number is even or odd----------------
//check if the number is even
function odd_even(){
	var no;
	no=Number(document.getElementById("no_input").value);
	if(no%2==0)
	{
	alert("Even Number");
	}
	else
	{
	alert("Odd Number");
	}
	}

	// ---------------Check Whether a number is even or odd----------------