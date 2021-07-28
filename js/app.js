let B1 = document.getElementById('btn1');
let B2 = document.getElementById('btn2');
let group = document.getElementById('participants');



B1.addEventListener("click", randomActivity);
B2.addEventListener("click", userActivity);


function randomActivity(e){
    axios.request({
        method: "GET",
        url: "http://www.boredapi.com/api/activity/"
    }).then(success).catch(fail);
}

function userActivity(e){
    axios.request({
        method: "GET",
        url: "http://www.boredapi.com/api/activity?participants="+group.value
    }).then(triumph).catch(fail);
}

function triumph(results){
    let groupActiv= results.data.activity;
    document.getElementById('p2').innerText=groupActiv;
    console.log(results);
}


    



















function success(result){
    let activ = result.data.activity;

    document.getElementById('p').innerText=activ;
    console.log(result);
}
function fail(error){
    console.error(error);
}