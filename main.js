var bicho = $("#bicho");
var medida;
var number, con1, con2, con3, con4, con5 , con6;
var quant_pegos= 0;
var finish = false;

document.addEventListener("DOMContentLoaded", function(event) {


    //$("#bicho").draggable();

    $(document).keydown(function(e) {
    
    if(finish)
      alert("Jogo terminou!");
    else
    {      

                switch (e.which) {
                case 37:
                    //left
                medida = $("#bicho").offset().left - 40;
                $("#bicho").animate({
                        left: medida + "px"
                    });
                    $("#bicho").css({'transform' : 'rotate('+ 0 +'deg)'});
                    jogando();
                    //Aparecer_personagem();
                    break;
                case 38:
                    //top
                    medida = $("#bicho").offset().top - 40;
                $("#bicho").animate({
                        top: medida + "px"
                    });
                    $("#bicho").css({'transform' : 'rotate('+ 90 +'deg)'});
                    jogando();
                    break;
                case 39:
                    //right
                    medida = $("#bicho").offset().left + 40;
                $("#bicho").animate({
                        left: medida + "px"
                    });
                    $("#bicho").css({'transform' : 'rotate('+ 0 +'deg)'});
                    jogando();
                    break;
                case 40:
                    //bottom
                    medida = $("#bicho").offset().top + 40;
                $("#bicho").animate({
                        top: medida + "px"
                    });
                    $("#bicho").css({'transform' : 'rotate('+ 90 +'deg)'});
                    jogando();
                    break;    
                }
    }            

    




});

$("#ir_para_jogo").click(function(){
        
        $("#instruncoes").css("display", "none")
    })



Aparecer_personagem();
  




})


function Aparecer_personagem (){

  var max = 9;  
  number = Math.floor( Math.random()* (max))+1;
  
  for(var i= 0; i<=max; i++)
  {
    
    $("#"+"a"+i).css("background-image","url('none')");
    
  }  


  $("#"+"a"+number).css("background-image","url('icone-personagem.jpg')");
  console.log("#"+"a"+number);


}



function jogando(){
    
    //var alvo = Aparecer_personagem();

  
    con1 =  ( ( ($("#bicho").offset().top) - ($("#"+"a"+number).offset().top)) )
    con2 =  ( ( ($("#bicho").offset().left) - ($("#"+"a"+number).offset().left)) ) 
    


        //console.log("Top distance: "+ ( ($("#bicho").offset().top) - ($("#"+"a"+number).offset().top)) )
        //console.log("Left distance: "+ ( ($("#bicho").offset().left) - ($("#"+"a"+number).offset().left)) )

   

     if( (-80 < con1) && ( con1 < 80) && (-80 < con2) && ( con2 < 80) )
     {
        
        quant_pegos++;
        $("#taken").text(quant_pegos);
        Aparecer_personagem () 
        
     }

    con3 =  ( ( ($("#bicho").offset().top) - ($("#tabuleiro").offset().top)) )
    con4 =  ( ( ($("#bicho").offset().left) - ($("#tabuleiro").offset().left)) ) 

      console.log("Top distance:"+ ( ($("#bicho").offset().top) - ($("#tabuleiro").offset().top)));
      console.log("Left distance:"+ ( ($("#bicho").offset().left) - ($("#tabuleiro").offset().left)));
    
    /*con5 = Math.sqrt( Math.pow(con3, 2) + Math.pow(con4, 2) ); 
    con6 =Math.sqrt( Math.pow(330,2) + Math.pow(220, 2) ); 

         console.log("Distance:" + Math.sqrt( Math.pow(con3, 2) + Math.pow(con4, 2) ));
         console.log("Padrão" + Math.sqrt( Math.pow(330,2) + Math.pow(220, 2) ));*/
    
    if( ((con3 < 1) || (con3 > 300)) || ((con4 < 0) || (con4 > 300)))
         finish = true;

    

}
