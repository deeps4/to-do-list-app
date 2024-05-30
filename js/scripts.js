function newItem(){


    let inputValue = $('#input').val();
    let li = $('<li></li>');
    li.text(inputValue);

    if (inputValue === ''){
        alert("you must write somethimg")
    } else{
        $('#list').append(li);
    }

    // li.on(doubleClick, function(){
    //     li.addClass('strike');
    // });

    function crossOut(){
        li.toggleClass('strike');
    }

    li.on('dblclick', function crossOut(){
        li.toggleClass('strike');
    })

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);
    function deleteListItem(){
        li.addClass('delete');
    }

    $('#list').sortable();
     
}