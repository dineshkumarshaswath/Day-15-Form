
//This is the submit function;

var submitformdatas = document.getElementById("submit")

submitformdatas.addEventListener("click",function(event){
event.preventDefault()
   
     // var firstname=document.getElementById("firstname").value
     // console.log(firstname)
    
    // var lastname=document.getElementById("lastname").value
    // console.log(lastname)
    // var address=document.getElementById("address").value
    // console.log(address);
    // var pin=document.getElementById("pin").value;
    // console.log(pin)

    var Gender=document.getElementsByName("gender")
     
    var findgender;
    for(var i=0;i<Gender.length;i++){
        if(Gender[i].checked){
            findgender= Gender[i].value
        }
    }
    //console.log(findgender);

    var foodtype= document.getElementsByName("food")
    var fooddata = []
    
   // console.log(foodtype)
    for(var i=0;i<foodtype.length;i++){
        if(foodtype[i].checked){
            fooddata.push(foodtype[i].value)
           
        }
    }
    if(fooddata.length>=2){
        var data = fooddata.join(",")
    }else{
        data = alert("Choose atleast 2 options out of 5 in food")
    }

    // var state=document.getElementById("state").value
    // console.log(state)
    // var country=document.getElementById("country").value
    // console.log(country)
      
    
    userdata(firstname.value,lastname.value,address.value,
        pin.value,findgender,data,state.value,country.value);
    firstname.value = ""
    lastname.value=""
    address.value=""
    pin.value=""
    state.value=""
    country.value=""
})

function userdata(firstname,lastname,address,pin,findgender,foodlist,state,country){
        var tbody = document.getElementById("table")
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")
        var td4 = document.createElement("td")
        var td5 = document.createElement("td")
        var td6 = document.createElement("td")
        var td7 = document.createElement("td")
        var td8 = document.createElement("td")

        td1.innerHTML = firstname;
        td2.innerHTML = lastname;
        td3.innerHTML = address;
        td4.innerHTML = pin;
        td5.innerHTML = findgender;
        td6.innerHTML = foodlist;
        td7.innerHTML = state;
        td8.innerHTML = country;

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8,)  

         tbody.append(tr)

}
        
    


    
   