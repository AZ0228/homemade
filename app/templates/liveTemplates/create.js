var ingredientCount = 0;
var stepsCount = 0;

function deleteElement() {
    var ingredientIndex = parseInt(this.getAttribute('name'));
    var ingredientField = document.getElementById('ingredientField-' + ingredientIndex);
    ingredientField.remove();
    // Update the labels and button names for the remaining ingredients
    var remainingIngredients = document.querySelectorAll('[id^="ingredientField-"]');
    remainingIngredients.forEach(function(element, index) {
      var currentIndex = parseInt(element.getAttribute('id').split('-')[1]);
  
      if (currentIndex > ingredientIndex) {
        var newIndex = currentIndex - 1;
        element.querySelector('label').innerHTML = 'Ingredient ' + (newIndex + 1) + ':';
        element.querySelector('label').setAttribute('name', 'label-' + newIndex);
        element.querySelector('input').setAttribute('name', 'ingredients-' + newIndex);
        element.querySelector('button').setAttribute('name', newIndex);
      }
    });
    ingredientCount--;
  }

document.getElementById('addIngredient').addEventListener('click', function() {
    var ingredientField = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');
    var button = document.createElement('button')

    label.innerHTML = 'Ingredient ' + (ingredientCount + 1) + ':';
    label.setAttribute('name', 'label-' + ingredientCount);
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'ingredients-' + ingredientCount);
    input.setAttribute('class', 'form-control');
    button.textContent = "Delete";
    button.setAttribute('name',ingredientCount);
    button.addEventListener('click', deleteElement);


    ingredientField.appendChild(label);
    ingredientField.appendChild(input);
    ingredientField.appendChild(button);
    ingredientField.setAttribute('id', 'ingredientField-' + ingredientCount);

    document.getElementById('ingredientFields').appendChild(ingredientField);

    ingredientCount++;
});

document.getElementById('addInstruction').addEventListener('click', function() {
    var ingredientField = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');
    var button = document.createElement('button')

    label.innerHTML = (stepsCount + 1) + ':';
    label.setAttribute('name', 'label-' + stepsCount);
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'ingredients-' + stepsCount);
    input.setAttribute('class', 'form-control');
    button.textContent = "Delete";
    button.setAttribute('name',stepsCount);
    button.addEventListener('click', deleteElement);


    ingredientField.appendChild(label);
    ingredientField.appendChild(input);
    ingredientField.appendChild(button);

    document.getElementById('instructionFields').appendChild(ingredientField);

    stepsCount++;
});