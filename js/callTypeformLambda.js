$(function() {

    $.ajax({
        type: 'GET',
        url: '/.netlify/functions/typeform',
        data: {},
        success: function(resp){
            data = resp;
            success(resp);
        }
      });

      function success(resp) {
          document.getElementById('data').innerHTML = resp;
      }
});