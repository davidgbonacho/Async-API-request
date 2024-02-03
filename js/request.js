
function makeCall() {

    //  create object with params(do this if you plan to send a json)
    /*      const params = {
            param1: 'value1',
            param2: 'value2',
        }; */

    //  write params if you send a querystring
    let params = 'param1=value1&param2=value2';
    /* this is the same as
    let params = new URLSearchParams();
    params.append("param1", "value1");
    params.append("param2", "value2");*/


    // with fetch
    // fetch('php/service.php', {
    //     method: 'POST',
    //     /*body: JSON.stringify(params),*/
    //     body: params,
    //     headers: {
    //         /* 'Content-type': 'application/json; charset=UTF-8' */
    //         'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'

    //     }
    // }).then(function (response) {
    //     return response.json();
    // }).then(function (value) {
    //     document.getElementById("res").innerHTML = runObject(value);
    // }).catch(function (err) {
    //     console.warn('Error: ', err);
    // });



    // with ajax
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "php/service.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.onreadystatechange = runObject;
    // xhttp.send(JSON.stringify(params));
    xhttp.send(params);

}

/* function runObject(object) {

    let content = '';
    for (var key in object) content += key + ' ' + object[key] + ' ';

    return content;
} */


function runObject() {

    if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.responseText);

        let content = '';
        for (var key in object) content += key + ' ' + object[key] + ' ';

        document.getElementById("res").innerHTML = content;
    }
}