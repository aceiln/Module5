var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function handleSubmit(event) {
    event.preventDefault();
    var input = $('#shopping-input');
    var inputVal = input.val();

    var listItemEl = $('<li>');
    listItemEl.text(inputVal);
    shoppingListEl.append(listItemEl);

}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit',handleSubmit);