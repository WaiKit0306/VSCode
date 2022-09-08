
const submitBtn = document.getElementById("submitBtn");




submitBtn.addEventListener("click", generateNum)


function generateNum()
{

     var value = document.getElementById("numVal").value;
  
    var base = 100;
    var r1 = randombetween(1, value-5);
    var r2 = randombetween(1, value-4-r1);
    var r3 = randombetween(1, value-3-r1-r2);
    var r4 = randombetween(1, value-2-r1-r2-r3);
    var r5 = randombetween(1, value-1-r1-r2-r3-r4);
    var r6 = value - r1 - r2 - r3 - r4 - r5;
    
    
    function randombetween(base, value) {
      return Math.floor(Math.random()*(value-base+1)+base);
    }
    document.getElementById("num1").innerHTML = r1;
    document.getElementById("num2").innerHTML = r2;
    document.getElementById("num3").innerHTML = r3;
    document.getElementById("num4").innerHTML = r4;
    document.getElementById("num5").innerHTML = r5;
    document.getElementById("num6").innerHTML = r6;

}
   