var data = '';

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
        // success(dataset);
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
        console.log('Response received from typeform.');
        data = JSON.parse(data);
        calcData(data);
    }
});

function calcData(data) {
    document.getElementById('data').innerText = 'Number of items: ' + get.totalItems();
}

const get = {
    totalItems: function() {
        return data.total_items;
    }
}