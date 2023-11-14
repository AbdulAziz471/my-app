// FormValidation.js
import React, { useEffect } from 'react';

function FormValidation() {
  useEffect(() => {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
      'use strict';
      window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  return null; // This component doesn't render anything in the DOM
}

export default FormValidation;
