var order=prompt("what do you want tea coffee?");
var numberofcups=0;
while (order!=='tea'&&order!=='coffee')
{
     order=prompt("plaese order coffee or tea its for FREE :) ");

}

if (order=='tea')
{
 numberofcups=prompt ("how many cups do you want ?");
 alert("5 mintues and you will have you tea :)");
   var prepared =  0 ;

   for (prepared=0 ; prepared<numberofcups;prepared++)
   {
    var TEACUP = '<img src = "a-cup-of-tea.jpg"/>';
    document.write(TEACUP);
   }
 } 

 if (order=='coffee')
  {
    numberofcups=prompt ("how many cups do you want ?");
    alert("5 mintues and you will have you coffee :)");  
    var pre;
    for(pre=0; pre<numberofcups; pre++)
    {
    var coffeeCUP = '<img src = "gettyimages-500740897.jpg"/>';
    document.write(coffeeCUP);
    }
  }   

