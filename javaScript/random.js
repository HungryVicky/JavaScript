let a;

document.getElementById("myButton").onclick = function(){

 a = Math.floor(Math.random() * 6) + 1;
 document.getElementById("label1").innerHTML = a;

}
<!-- 
<!DOCTYPE html>
<html lang="en">

   <head>

      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="style.css">

    </head>
    <body style="font-family:sans-serif;">

      <button id="myButton">Roll</button>
      <label id="label1"></label> 





      
   <script src="index.js"></script> 
   </body>
   

</html>

-->