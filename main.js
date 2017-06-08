var container = document.querySelector(".container");





for (i = 0; i < formData.length; i++) {
    
    var control = formData [i];

    if (control.type == "select"){
        var inputElement = document.createElement('select');
        console.log(control.options.length);
        var options = control.options
        for (i =0; i < options.length; i++){
            var optionElement = document.createElement("option");
            optionElement.value = options[i].value;
            optionElement.innerHTML = options[i].label;
            inputElement.appendChild(optionElement);
        }

    }
    
    else if (control.type == "textarea"){
        var inputElement = document.createElement('textarea');
    }
    
    else {
        var inputElement = document.createElement('input');
    }

    
    inputElement.id = control.id;
    inputElement.type = control.type;
    inputElement.placeholder = control.label


    container.appendChild(inputElement);

}
