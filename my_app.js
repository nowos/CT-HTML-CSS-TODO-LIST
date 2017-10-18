$(document).ready(function(){

var description;
var licznik = 1;

// po naciśnięciu przycisku Add:  
    $('#bt_add').click(function(){
//zmienna description przyjmuje wartość pola input    
    description = $('#it_1').val();
//tworzenie zmiennej element 
    
    element = $('<li>');
              
 //wprowadź tekst z pola wprowadzania tekstu  
    element.text(description); 
    $('ol').append(element);
   
 }); //end of add task
 
 
 //function handler(event) {
 //   event.target
 
//edycja zadania
    $('li').click(function(){
        //nowa wartośc description
      description = $('#it_1').val();
      (this).text(description);

    });
    
// usunięcie zadania
    $('li').dblclick(function(){
       //nowa wartośc description
     $(this).hide();

    });

     
});//end of main f-ction



    














