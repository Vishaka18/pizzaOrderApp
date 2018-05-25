// JavaScript source code


$(document).ready(function () {
    var PizzaMenu = JSON.parse(data);
    var x = [];
    var y = [];
    for (i = 0; i < PizzaMenu.length; i++) {
        x[i] = PizzaMenu[i].PizzaName;
        y[i] = PizzaMenu[i].price;
        
            //console.log(document.getElementById("demo" + this.x[i]).innerHTML = x[i]);
            
           // document.getElementById("demoprice" + this.x[i]).innerHTML = y[i];
        
    }

    document.getElementById("demo").innerHTML = x[0];
    document.getElementById("demo1").innerHTML = x[1];
    document.getElementById("demo2").innerHTML = x[2];
    
    document.getElementById("demoprice").innerHTML = y[0];
    document.getElementById("demoprice1").innerHTML = y[1];
    document.getElementById("demoprice2").innerHTML = y[2];

 
    $('.incVal').click(function(){
        //alert('hiiii');
        var count = 0;
        var a=count+1;
        $("#number").text(a);
    });

   

   
})

