var container = document.querySelector(".container");

//console.log(formData[5]);

console.log(formData[5])
for (var i = 0; i < formData.length; i++) {
    
    var control = formData [i];

    if (control.type == "select"){
        console.log(control.type)
        var inputElement = document.createElement('select');
        //console.log(control.options.length);
        
        var options = control.options
       
        for (var n = 0; n < options.length; n++){
            var optionElement = document.createElement("option");
            optionElement.value = options[n].value;
            optionElement.innerHTML = options[n].label;
            inputElement.appendChild(optionElement);
        }

    }

    else if (control.type == "textarea"){
        console.log("Hi!");
        var inputElement = document.createElement('textarea');
    }
    
    else {
        var inputElement = document.createElement('input');
    }

    inputElement.id = control.id;
    inputElement.type = control.type;
    inputElement.placeholder = control.label;

    container.appendChild(inputElement);

}
