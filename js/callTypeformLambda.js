$(function() {

    async function getData(url) {
        const dataset = await $.ajax({
            type: 'GET',
            url: url,
            data: {},
            success: function(resp){
                data = resp;
                success(resp);
            }
          });
        success(dataset);
    }

    getData('/.netlify/functions/typeform');

    // $.ajax({
    //     type: 'GET',
    //     url: '/.netlify/functions/typeform',
    //     data: {},
    //     success: function(resp){
    //         data = resp;
    //         success(resp);
    //     }
    //   });

      function success(resp) {
          document.getElementById('data').innerText = resp;
      }
});