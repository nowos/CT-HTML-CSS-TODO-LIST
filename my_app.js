$(document).ready(function(){

var description;
var licznik = 0;

// po naciśnięciu przycisku Add:  
    $('#bt_add').click(function(){
//zmienna description przyjmuje wartość pola input    
     description = $('#it_1').val();
//tworzenie zmiennej element 
    element = $('#li'+licznik);     
     
     
  //IF jeśli wybrany element już jest widoczny - to przejdź do następnego   
    if(element.css("visibility","visible")){
    licznik = licznik + 1;  
    element = $('#li'+ licznik);     
    $(element).css({
    "visibility":"visible"
    });
 //wprowadź tekst z pola wprowadzani tekstu  
    $(element).text(description); 
        
    }; //end of IF
    
 }); //end of add task
 
 
//edycja zadania
    $('li').click(function(){
        //nowa wartośc description
      description = $('#it_1').val();
      $(this).text(description);

    });
    
// usunięcie zadania
    $('li').dblclick(function(){
       //nowa wartośc description
     $(this).hide();

    });

     
});//end of main f-ction



    














