/*
* Inspired by: https://stackoverflow.com/a/39046913
*/

function Random() {
    var rnd = Math.floor(Math.random() * 10);   //Find a random number between 0-9
    var nameValue;
    document.getElementById("outputName").innerText = nameValue
    if(rnd <= 4){    //if 0,1,2,3,4 the person is deemed living
        window.alert("They recieved a call today...");
    }
    if(rnd > 4){    //if 5, 6, 7, 8, 9,
        window.alert("They did not recieve a call today!");
    }
    console.log(rnd);
}