function function1(){
    window.open("https://www.google.com");
}

function function2(){
    document.getElementById('email').value = '';
    document.getElementById('login').value = '';
    document.getElementById('password').value = '';
}

function function_check(){
    var check = prompt("Enter word: ", "enter here");
    checkWord(check);
}

function checkWord(name){
    var nums = [0,1,2,3,4,5,6,7,8,9];
    var flag = false;
    for(var i = 0; i < nums.length; i++){
        if(name.includes(nums[i])){
            document.getElementById('demo').value = name.split("").reverse().join("");
            flag = true;
            break;
        }
    }

    if(!flag){
        var array = name.split("");
        for(var ii = 0; ii < array.length; ii++){
            if(ii % 2 == 0){
                array[ii] = array[ii].toUpperCase();
            }
        }
        document.getElementById('demo').value = array.join("");
    }
}



