let result = document.getElementById("input_text");

// Save Number To Input Box

function calculate(number) {
    result.value += number;

}



// Eval Two Number 

function Result() {
    try{
        result.value=eval(result.value);
    }
    catch(err){
    alert("Enter The Valid Input");
    }
}

// clear Function 

function clr() {
    result.value = " ";
}

// delete Function

function del() {
result.value = result.value.slice(0,-1);

}