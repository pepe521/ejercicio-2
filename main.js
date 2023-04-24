texto=prompt("Introduzca una palabra");
let espalindromo=true; 
texto=texto.toLowerCase().replace(/\s/g,"");
for(n = 0; n < texto.lenght / 2; n++){
	if(texto[n] != texto[texto.lenght - 1 - n]) {
   espalindromo=false;
   break;
  }
}
if(espalindromo){
	document.write("La palabra es palindromo");
}else{
	document.write("la palabra no es palindromo");
}
