var word = new Array();
    word[0] = "BANANA";
    word[1] = "PERA";
    word[2] = "UVA";
    word[3] = "PESSEGO";
    word[4] = "ABACATE";
    word[5] = "ABACAXI";
    word[6] = "LARANJA";
    word[7] = "MORANGO";
    word[8] = "MELANCIA";
    word[9] = "MANGA";
    word[10] = "DAMASCO";
    word[11] = "JACA";
    word[12] = "ACEROLA";
    word[13] = "AMEIXA";
    word[14] = "AMORA";
    word[15] = "GOIABA";
    word[16] = "GRAVIOLA";
    word[17] = "TANGERINA";
    word[18] = "GUARANA";
    word[19] = "KIWI";

var j = 0;
var w = Math.floor(Math.random()*20);
var ki = new Array(word[w].length);
var i = 0;
var error = 0;

function hide(id){
    document.getElementById(id).style.visibility = 'hidden';
}

function hideR(id){
    document.getElementById(id).style.visibility = 'hidden';
    var w = Math.floor(Math.random()*10);
    location.reload();
}

var p = new Array();
function loadLine(){

for(j=0;j<word[w].length;j++){
        ki[j]=" __ ";
   }
  
    for(j = 0; j < word[w].length; j++){
   		p[j] = j;
	}
    
    //Carrega as linhas
    for(i=0; i < j; i++){
        
        document.getElementById("let").innerHTML = document.getElementById("let").innerHTML + ki[i];
    }
}

function getLetter(id){
    var palavra = "";
    letter = document.getElementById(id).innerHTML;
    //console.log(letter);
    
     var nome = word[w];
     nome.split(" ");
    
     for(j = 0; j < word[w].length; j++){
      
		if(nome[j] == letter){
 
                ki[j] = letter;
 
         }
         
          if(ki[j] != "__") {
 
                palavra =  palavra + ki[j];
 
             }
       
    }
     if(palavra.match(letter) == letter){
       
        //  ENCONTROU
      } else {
               error++;
               //console.log("errou ")
             }
    
    //console.log(error);
    if(error == 1){
        document.getElementById("forc").classList.add('forca-h');
    }else if(error == 2){
        document.getElementById("forc").classList.add('forca-hb');
    }else if(error == 3){
        document.getElementById("forc").classList.add('forca-hbl1');
    }else if(error == 4){
        document.getElementById("forc").classList.add('forca-hbl12');
    }else if(error == 5){
        document.getElementById("forc").classList.add('forca-hbl12p1');
    }else if(error >= 6){
        document.getElementById("forc").classList.add('forca-lose');
        document.getElementById("let").style.visibility = 'hidden';
        document.getElementById("letLose").innerHTML = word[w];
        document.getElementById("win-lose").classList.add('result');
        document.getElementById("forc").classList.add('forca');
        document.getElementById("wl").innerHTML = "<br><font style='font-size: 35pt; color:#cc0000;'>Não foi dessa vez...</font><br><br><font style='font-size: 25pt;'>Você Perdeu!</font><br><br><br><br>Clique aqui para continuar jogando..."

    }
    
     document.getElementById("let").innerHTML = " " + palavra + " ";
     //console.log(palavra);
    
     if(palavra == word[w]){
        //console.log("VOCE GANHOU")
        document.getElementById("win-lose").classList.add('result');
        document.getElementById("forc").classList.add('forca');
        document.getElementById("wl").innerHTML = "<br><font style='font-size: 45pt; color:#32CD32;'>Parabéns!</font><br><br><font style='font-size: 25pt;'>Você ganhou!</font><br><br><br><br>Clique aqui para continuar jogando...";
        
    }
}
    


    


