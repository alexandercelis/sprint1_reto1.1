function palindrome(cadena = document.getElementById("string").value){
    let array = cadena.split("");
    let reverse = array.reverse();
    return cadena == reverse.join("") ? document.getElementById("resultadoTrue").style.display = "block" : document.getElementById("resultadoFalse").style.display = "block"
}