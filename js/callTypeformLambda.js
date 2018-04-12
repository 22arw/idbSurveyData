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


var DATA = '';
const lambdaURL = '/.netlify/functions/typeform';
const Q1ID = 'S0i1qDAxfMrN';
const Q2ID = 'P1jzxhwfWL0D';
const Q3ID = 'FSXFvUeeD1aG';
const Q4ID = 'CIopzf7otWN6';


// unique function for setting up an array.
Array.prototype.unique = function() {
    var a = this.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
};

// Where it all begins!
$(function() {
    getData(lambdaURL);
});

async function getData(url) {
    const dataset = await $.ajax({
        type: 'GET',
        url: url,
        data: {},
        success: function(resp){
            DATA = resp;
            success(resp);
        }
      });
}

function success(resp) {
    console.log('Response received from typeform.');
    DATA = JSON.parse(resp);
    begin();
}

const get = {
    totalResponses: () => {
        return DATA.total_items;
    },
    q1AnswerChoices: () => {
        var choices = [];
        for (i = 0; i < get.totalResponses(); i++) {
            for (j = 0; j < DATA.items[i].answers.length; j++) {
                if (DATA.items[i].answers[j].field.id == Q1ID) {
                    if (DATA.items[i].answers[j].choices.labels){
                        choices = choices.concat(DATA.items[i].answers[j].choices.labels)
                    } else if (DATA.items[i].answers[j].choices.other) {
                        choices.push('other');
                    }
                }
            }
        }
        return choices.unique();
    },
    q2AnswerChoices: () => {
        var choices = [];
        for (i = 0; i < get.totalResponses(); i++) {
            for (j = 0; j < DATA.items[i].answers.length; j++) {
                if (DATA.items[i].answers[j].field.id == Q2ID) {
                    choices.push(DATA.items[i].answers[j].choice.label);
                }
            }
        }
        return choices.unique();
    },
    q3AnswerChoices: () => {
        var choices = [];
        for (i = 0; i < get.totalResponses(); i++) {
            for (j = 0; j < DATA.items[i].answers.length; j++) {
                if (DATA.items[i].answers[j].field.id == Q3ID) {
                    if (DATA.items[i].answers[j].choices.labels){
                        choices = choices.concat(DATA.items[i].answers[j].choices.labels)
                    } else if (DATA.items[i].answers[j].choices.other) {
                        choices.push('other');
                    }
                }
            }
        }
        return choices.unique();
    },
    q4AnswerChoices: () => {
        var choices = [];
        for (i = 0; i < get.totalResponses(); i++) {
            for (j = 0; j < DATA.items[i].answers.length; j++) {
                if (DATA.items[i].answers[j].field.id == Q4ID) {
                    if (DATA.items[i].answers[j].choices.labels){
                        choices = choices.concat(DATA.items[i].answers[j].choices.labels)
                    } else if (DATA.items[i].answers[j].choices.other) {
                        choices.push('other');
                    }
                }
            }
        }
        return choices.unique();
    },
    q1AnswerCount: () => {
        var arr = get.q1AnswerChoices(); // change
        var countChoices = {};
        var otherChoices = [];

        for (i = 0; i < arr.length; i++) {
            countChoices[arr[i]] = 0;
        }

        for (i = 0; i < get.totalResponses(); i++) {
            for (j = 0; j < DATA.items[i].answers.length; j++) {
                if (DATA.items[i].answers[j].field.id == Q1ID) { // change
                    var path = DATA.items[i].answers[j].choices;
                    if (Array.isArray(path.labels)) {
                        path.labels.forEach((el) => {
                            countChoices[el]++;
                        });
                    } else {
                        otherChoices.push(path.other);
                    }
                }
            }
        }
        countChoices['other'] = otherChoices.length;
        return [countChoices, otherChoices];
    },
    q2AnswerCount: () => {
        var arr = get.q2AnswerChoices(); // change
        var countChoices = {};
        for (i = 0; i < arr.length; i++) {
            countChoices[arr[i]] = 0;
        }

        for (i = 0; i < get.totalResponses(); i++) {
            for (j = 0; j < DATA.items[i].answers.length; j++) {
                if (DATA.items[i].answers[j].field.id == Q2ID) { // change
                    var path = DATA.items[i].answers[j].choice.label;
                    countChoices[path]++;
                }
            }
        }
        console.log(countChoices);
        return countChoices;

    },
    q3AnswerCount: () => {
        var arr = get.q3AnswerChoices(); // change
        var countChoices = {};
        var otherChoices = [];

        for (i = 0; i < arr.length; i++) {
            countChoices[arr[i]] = 0;
        }

        for (i = 0; i < get.totalResponses(); i++) {
            for (j = 0; j < DATA.items[i].answers.length; j++) {
                if (DATA.items[i].answers[j].field.id == Q3ID) { // change
                    var path = DATA.items[i].answers[j].choices;
                    if (Array.isArray(path.labels)) {
                        path.labels.forEach((el) => {
                            countChoices[el]++;
                        });
                    } else {
                        otherChoices.push(path.other);
                    }
                }
            }
        }
        countChoices['other'] = otherChoices.length;
        return [countChoices, otherChoices];
    },
    q4AnswerCount: () => {
        var arr = get.q4AnswerChoices(); // change
        var countChoices = {};
        var otherChoices = [];

        for (i = 0; i < arr.length; i++) {
            countChoices[arr[i]] = 0;
        }

        for (i = 0; i < get.totalResponses(); i++) {
            for (j = 0; j < DATA.items[i].answers.length; j++) {
                if (DATA.items[i].answers[j].field.id == Q4ID) { // change
                    var path = DATA.items[i].answers[j].choices;
                    if (Array.isArray(path.labels)) {
                        path.labels.forEach((el) => {
                            countChoices[el]++;
                        });
                    } else {
                        otherChoices.push(path.other);
                    }
                }
            }
        }
        countChoices['other'] = otherChoices.length;
        return [countChoices, otherChoices];
    }
}

function begin() {
    // console.log('the number of items: ' + get.totalResponses());
    // console.log('Q1: ' + get.q1AnswerChoices());
    // console.log('Q2: ' + get.q2AnswerChoices());
    // console.log('Q3: ' + get.q3AnswerChoices());
    // console.log('Q4: ' + get.q4AnswerChoices());
    // console.log('Q1 answer count: ' + get.q1AnswerCount());
    // console.log('Q2 answer count: ' + get.q2AnswerCount());
    // console.log('Q3 answer count: ' + get.q3AnswerCount());
    // console.log('Q4 answer count: ' + get.q4AnswerCount());
    setChartHolder();
    q1Chart();
    q2Chart();
    q3Chart();
    q4Chart();
    setHeaderData();
}

const q = {
    count: (q) => {
        switch(q) {
            case 1:
                let obj = get.q1AnswerCount()[0];
                let arr = [];
                for (var i in obj) {
                    arr.push(obj[i]);
                }
                return arr;
                break;
            case 2:
                let obj2 = get.q2AnswerCount();
                let arr2 = [];
                for (var i in obj2) {
                    arr2.push(obj2[i]);
                }
                return arr2;
                break;
            case 3:
                let obj3 = get.q3AnswerCount()[0];
                let arr3 = [];
                for (var i in obj3) {
                    arr3.push(obj3[i]);
                }
                return arr3;
                break;
            case 4:
                let obj4 = get.q4AnswerCount()[0];
                let arr4 = [];
                for (var i in obj4) {
                    arr4.push(obj4[i]);
                }
                return arr4;
                break;
            default:
                console.log('Something went wrong when you called q.count(' + q + ')');
        }
    },
    other: (q) => {
        switch(q) {
            case 1:
                return get.q1AnswerCount()[1];
                break;
            case 2:
                console.log("don't call this function: q.other(2)");
                break;
            case 3:
                return get.q3AnswerCount()[1];
                break;
            case 4:
                return get.q4AnswerCount()[1];
                break;
            default:
                console.log('Something went wrong when you called q.other(' + q + ')');
        }
    }
}

function setHeaderData() {
    let headerDataText = '<p>Survey Responses: ';
    document.getElementById('headerData').innerHTML = headerDataText + get.totalResponses() + '</p>';
}

function reloadData() {
    let since = document.getElementById('dateFrom').value + "T00%3A00%3A00";
    let until = document.getElementById('dateTo').value + "T00%3A00%3A00";

    let url = lambdaURL + "?since=" + since + "&until=" + until;

    setChartHolder();
    getData(url);
}

// function clearCharts() {
//     document.getElementById('q1').innerText = '';
//     document.getElementById('q1Other').innerText = '';
//     document.getElementById('q2').innerText = '';
//     // document.getElementById('q2Other').innerText = '';
//     document.getElementById('q3').innerText = '';
//     document.getElementById('q3Other').innerHTML = '';
//     document.getElementById('q4').innerText = '';
//     document.getElementById('q4Other').innerText = '';
// }

function setChartHolder() {
    document.getElementById('chartHolder').innerHTML = '';
    document.getElementById('chartHolder').innerHTML = `<canvas id="q1"></canvas>
    <div id='q1Other'></div>
    <br><br><br><hr><br><br><br>
    <canvas id="q2"></canvas>
    <br><br><br><hr><br><br><br>
    <canvas id="q3"></canvas>
    <div id='q3Other'></div>
    <br><br><br><hr><br><br><br>
    <canvas id="q4"></canvas>
    <div id='q4Other'></div>
    <br><br><br><hr><br><br><br>`;
}