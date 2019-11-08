function function1(){
    window.open("https://www.google.com");
}

function function2(){
    document.getElementById('email').value = '';
    document.getElementById('login').value = '';
    document.getElementById('password').value = '';
}

function function_check(){
    var person = prompt("Please enter your name", "Harry Potter");

    if (person != null) {
        var x=document.getElementById("demo").value;
        if (!isNaN(x)) 
        {
            document.getElementById("demo").innerHTML =
            "Hello " + person + "! How are you today?";
        }
        else{
            document.getElementById("demo").innerHTML =
            "Hello " + reverse(person) + "! How are you today?";
        }

    }
}

/*checking username for the contents of numbers
If username contain number, display the name backwards. Else translate letters and
numbers through a symbol to upper or lower case( LiKe_tHaT)*/
function reverse(str){
    let reversed = "";    
    for (var i = str.length - 1; i >= 0; i--){        
      reversed += str[i];
    }    
    return reversed;
  }