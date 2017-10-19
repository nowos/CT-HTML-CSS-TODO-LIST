$(document).ready(function () {

    var description;
    var licznik = 1;

// po naciśnięciu przycisku Add:  
    $('#bt_add').click(function () {
//zmienna description przyjmuje wartość pola input    
        description = $('#it_1').val();
//tworzenie zmiennej element 
        element = $('<li>');
        
        //wprowadź tekst z pola wprowadzania tekstu  
        element.text(description);
        $('ol').append(element);

    }); //end of add task

//edycja zadania
    $('ol').click(function (event) {
        description = $('#it_1').val();
        $(event.target).text(description);

    });

// usunięcie zadania

    $('ol').dblclick(function (event) {
        $(event.target).remove();
    });


});//end of main f-ction


















