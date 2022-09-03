let button = document.querySelector("button");
for(let i = 1; i<=5; i++){
    let checker = () =>{
        argumentpassed = i;
        validate(argumentpassed);
    }
    document.getElementById("a"+i).addEventListener("input", checker);


button.addEventListener("click", log);

function log () {
    let counter = 0;
    for(let i = 1; i<=5; i++){
        if(document.getElementById("a"+i).value !== ""){
          counter += 1;  
        };
        
    }
    if(counter==5){
        document.querySelector("#bottom").classList.remove("none");
        document.querySelector(".right").classList.add("none");
    }
    else{
        for(let i = 1; i<=3; i++){
            if(document.getElementById("a"+i).value!=""){
                document.getElementById("b"+i).classList.add("none");
                console.log("everything is ok!")
            }
            else{
        
                document.getElementById("b"+i).classList.remove("none");   
                }
            }
        }
    }
    

}

function validate (argumentpassed) {
    switch(argumentpassed){
            case 1:
                document.querySelector("#name").innerHTML = document.getElementById("a1").value;
                break;
            case 2:
                document.querySelector("#zeros").innerHTML = document.getElementById("a2").value;
                break;
            case 3:
                document.querySelector("#month").innerHTML = document.getElementById("a3").value;
                break;
            case 4:
                document.querySelector("#year").innerHTML = document.getElementById("a4").value;
                break;
            case 5:
                document.querySelector("#CVC").innerHTML = document.getElementById("a5").value;
                break;
        }
    
    if(document.getElementById("a"+argumentpassed).value!=""){
        document.getElementById("b"+argumentpassed).classList.add("none");
        console.log("everything is ok!")}
        /*
        TODO: handle basic errors
        */
        
    
    else{

        document.getElementById("b"+argumentpassed).classList.remove("none");   
        }
    }