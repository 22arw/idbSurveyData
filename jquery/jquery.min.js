$(function() {

    $.ajax({
        type: 'GET',
        url: 'https://wizardly-bose-2e74c3.netlify.com/.netlify/functions/typeform',
        data: {},
        success: function(resp){
            data = resp;
            success(resp);
        }
      });

      function success(resp) {
          alert(resp);
      }
});