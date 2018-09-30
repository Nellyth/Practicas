function verificar(){
    var user=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
    if(user=="Nellyth" && pass==123456){
        alert("Se A Logueado correctamente \nBienvenido "+user);
        limpiar()
        location.href ="Inicio.html";
    }else{
        alert("Usuario y/o contraseña incorrecta");
        limpiar()
    }
}
function limpiar(){
    document.getElementById("datos").reset()
}
function registrar(){
    alert("Opción Deshabilitada en estos momentos");
}