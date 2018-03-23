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
            },
            dataType: 'json'
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
        // data = JSON.parse(data);
        calcData(data);
    }
});

function calcData(data) {
    document.getElementById('data').innerText = 'Number of items: ' + get.totalItems();
}

const get = {
    totalItems: () => {
        return data.total_items;
    },
    q1Answers: () => {
        // perform a for loop generating a list of answers chosen added to an array.
    }
}

/*
Why did you join the military?
id: S0i1qDAxfMrN

How much time do you have left on your enlistment? 
id: P1jzxhwfWL0D

Why are you separating from the military?
id: FSXFvUeeD1aG

Why are you staying in the military?
id: CIopzf7otWN6

*/