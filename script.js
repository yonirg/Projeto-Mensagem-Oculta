function btn(){
  var alfabeto = ("abcdefghijklmnopqrstuvwxyz")

    var mensagem = document.querySelector('#mensagem')






  if(document.querySelector('#base').checked){
      if(document.querySelector('#codificar').checked){
          function codificar64(texto) {
          return btoa(texto);
    }

    var codificada = codificar64(mensagem.value)
    
      alert("Sua mensagem codificada é: "+ codificada) 
      }
    }

    
    //decodificar base64;
    if(document.querySelector('#base').checked){
      if(document.querySelector('#decodificar').checked){
    function decodificar64(texto) {

      
      return atob(texto);
    }
    var decodificada = decodificar64((mensagem.value) )
    decodificada = decodificada.toLowerCase()
    alert("Sua mensagem decodificada é: "+ decodificada) 
  }
    
  }



  if(document.querySelector('#cifra').checked){     
mensagem = mensagem.value
    if(document.querySelector('#codificar').checked){
    /*if(mensagem.length < 26){
        mensagem.length = 26

    }*/     
      var resultado = []

    for(i = 0 ; i < mensagem.length ; i++){
    //var exiteNaFrase = mensagem.indexOf(alfabeto[i])
    // if(exiteNaFrase != -1)
      //var convertido = mensagem[exiteNaFrase].replace(alfabeto[i],cifras[i])
      //console.log(convertido) 
      if (mensagem[i].match(/[^[a-zA-Z]+|\d+/gmi)) {
         resultado = resutado + mensagem[i];
    }

    if (mensagem[i].match(/[a-z]+[^A-Z]?/gm)) {


        let localAlfabeto = alfabeto.indexOf(mensagem[i]);
        var localResult = localAlfabeto + 3;
        if(localResult == 27){
          localResult = 1
        }
         else if(localResult == 28){
          localResult = 2
        }
        else if(localResult == 29){
          localResult = 3

        
        }
          resultado += alfabeto[localResult]



    }
    



  }
      alert('Sua mensagem codificada é: ' + resultado)

    }
}
}