// JavaScript source code
//MenuList = {
//    "PizzaMenu": [
//        { "PizzaName": "Farmhouse Pizza", "price": "300" },
//        { "PizzaName": "Margherrita Pizza", "price": "250" },
//        { "PizzaName": "Clubhouse Pizzza", "price": "Jones" }
//    ]
//}

//var PizzaMenu = [
//    {
//        "PizzaName": "Farmhouse Pizza",
//        "price": "300"
//    },
//    {
//        "PizzaName": "Margherrita Pizza",
//        "price": "250"
//    },
//    {
//        "PizzaName": "Clubhouse Pizza",
//        "price": "325"
//    }
//];

//function myFunction(arr) {
//    var out = "";
//    var i;
//    for (i = 0; i < arr.length; i++) {
//        out += 'pizza to be ordered: ' + arr[i].PizzaName + 'at' +
//            arr[i].price + '<br>';
//    }
//    document.getElementById("id01").innerHTML = out;
//}

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

    //console.log(parseInt(document.getElementById('number').value, 10));
   
 //function incrementValue()
   // {
     //   var value = parseInt(document.getElementById('number').value, 10);
       // value = isNaN(value) ? 0 : value;
       // value++;
       // document.getElementById('number').value = value;
    //}
    //obj = JSON.parse(text);
    //document.getElementById("demo").innerHTML =
    //    obj.PizzaMenu[1].PizzaName + " " + obj.employees[1].price;
    //var JSONObject = JSON.parse("{'PizzaName' : 1, 'price' : 2}");
    //console.log(JSONObject.PizzaName);  // Prints '1'.

    //var MenuList, x;
    //x = MenuList["PizzaMenu.PizzaName"];
    //document.getElementById("demo").innerHTML = x;

    //var t = JSON.parse('{"name": "", "skills": "", "jobtitel": "Entwickler", "res_linkedin": "GwebSearch"}');
    //alert(t['jobtitel'])

    //var x;
    //var t = JSON.parse(PizzaMenu);
    //alert(t['PizzaName']);

    //for (i = 0; i < PizzaMenu.length; i++) {
    //    x += PizzaMenu[i].PizzaName + "<br>";
    //}

    //document.getElementById("demo").innerHTML = x;

    //$.getJSON("server/pizza.json", function (json) {
    //    console.log("JSON Data: " + json.PizzaMenu.PizzaName[1]);
    //});

   
})

