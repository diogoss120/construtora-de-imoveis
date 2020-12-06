var inpNome = document.getElementById('inpNome');
var inpEmail = document.getElementById('inpEmail');
var inpTel = document.getElementById('inpTel');

function validaForm(){
    if(inpNome.value.length <= 3){
        inpNome.style.outlineStyle = "solid";
        inpNome.style.outlineWidth = "1px"
        inpNome.style.outlineColor = "red";
        inpNome.focus();
        return false;
    } else{
        inpNome.style.outlineStyle = "none";
    }

    if(inpEmail.value.indexOf("@") == -1 || inpEmail.value.indexOf(".") == -1){
        inpEmail.style.outlineStyle = "solid";
        inpEmail.style.outlineWidth = "1px"
        inpEmail.style.outlineColor = "red";
        inpEmail.focus();
        return false;
    }else{
        inpEmail.style.outlineStyle = "none";
    }

    if(isNaN(inpTel.value) || inpTel.value == ""){
        inpTel.style.outlineStyle = "solid";
        inpTel.style.outlineWidth = "1px"
        inpTel.style.outlineColor = "red";
        inpTel.focus();
        return false;
    }else{
        inpTel.style.outlineStyle = "none";
    }
}