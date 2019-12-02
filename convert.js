function convertMe()
{
    var val= document.getElementById("euro_am").value;
    var cust= document.getElementById("cus").value;
    let choice= document.getElementById("choice").value;
    let output; 
    
    switch (choice) {
        case "dollar":
            if(val<0)
            {
                output ="Invalid value..";
                console.log(output);
                document.getElementById("output").value=output;
            }
            else{
                output=val*1.25;
                
            }
            break;
        case "pound":
                if(val<0)
                {
                    output ="Invalid value..";
                    console.log(output);
                    document.getElementById("output").value=output;
                }
                else{
                    output=val*0.5;
                   
                }    
                break;
                case "rupee":
                if(val<0)
                {
                    output ="Invalid value..";
                console.log(output);
                document.getElementById("output").value=output;
                }
                else{
                    output=val*78.6;
                   
                }    
                break
    
        default:
               
            break;
    }
    document.getElementById("output").value = output;
}

function resetMe(){

    document.getElementById("0").reset();
}