$(document).ready(function(){
   

});








function submit_by_id() {


    var name = document.getElementById("name");
    var pname = document.getElementById("pname");
    var objet = document.getElementById("objet");
    var jour = document.getElementById("jour");
    var service = document.getElementById("service");
    var quantité = document.getElementById("quantité");
    var rediochecked = document.querySelectorAll('#transport:checked');



    var nomReg = /[A-Za-z0-9]+/g;
    var objetReg = /\S+/g;

    var testValid = 0;
    
    if (!(name.value).match(nomReg) ) {
        name.className +="Invalid";
        testValid++;
    }
    if (!(pname.value).match(nomReg)) {
        pname.className +="Invalid";
        testValid++;
    }
    if (!(objet.value).match(objetReg)) {
        objet.className +="Invalid";
        testValid++;
    }
    if (jour.value == "") {
        jour.className +="Invalid";
        testValid++;
    }
    if (service.value == "") {
        service.className +="Invalid";
        testValid++;
    }
    if (quantité.value == "" || quantité.value <= 0 ) {
        quantité.className +="Invalid";
        testValid++;
    }
    if (rediochecked.length == 0) {
        rediochecked.className +="Invalid";
        testValid++;
    }
    
    if(testValid == 0){
        document.getElementById("myForm").submit();
    }

}









