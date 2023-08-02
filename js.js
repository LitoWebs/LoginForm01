// Form validation
(function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom style
      var inputs = document.getElementsByClassName('form-control');
  
      // Loop over each input and watch blur event
      var validation = Array.prototype.filter.call(inputs, function (input) {
  
        input.addEventListener('blur', function (event) {
          // Reset
          input.classList.remove('is-invalid');
          input.classList.remove('is-valid');
  
          if (input.checkValidity() === false) {
            input.classList.add('is-invalid');
          } else {
            input.classList.add('is-valid');
          }
        }, false);
      });
    }, false);
  })();  