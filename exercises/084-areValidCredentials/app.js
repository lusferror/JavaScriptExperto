// Write your function here
function areValidCredentials(nombre,contrasena){
    if(nombre.length>3 && contrasena.length>=8){
        return true;
   }
   else{
    return false;
   }
}
