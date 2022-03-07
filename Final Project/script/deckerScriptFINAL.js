//DONE [3/6/22]

//asking for user input
document.getElementById("name").onclick = function(){
    var name = prompt("Enter your name");
    document.getElementById("outputName").innerText = name;
}
document.getElementById("age").onclick = function(){
    var age = prompt("Enter your age");
    document.getElementById("outputAge").innerText = age;
}
document.getElementById("gender").onclick = function(){
    var gender = prompt("Enter your gender");
    document.getElementById("outputGender").innerText = gender;
}
document.getElementById("height").onclick = function(){
    var height = prompt("Enter your height");
    document.getElementById("outputHeight").innerText = height;
}
document.getElementById("weight").onclick = function(){
    var weight = prompt("Enter your weight");
    document.getElementById("outputWeight").innerText = weight;
}
document.getElementById("ethnicity").onclick = function(){
    var ethnicity = prompt("Enter your ethnicity");
    document.getElementById("outputEthnicity").innerText = ethnicity;
}
document.getElementById("orientation").onclick = function(){
    var orientation = prompt("Enter your sexual orientation: ");
    document.getElementById("outputSexualOrientation").innerText = orientation;
}
document.getElementById("job").onclick = function(){
    var job = prompt("Enter your job");
    document.getElementById("outputJob").innerText = job;
}
document.getElementById("interests").onclick = function(){
    var interests = prompt("Enter your interests: ");
    document.getElementById("outputInterests").innerText = interests;
}
document.getElementById("favorite").onclick = function(){
    var favorite = prompt("Enter your favorite TV Show, Movie, and/or Book: ");
    document.getElementById("outputFavorite").innerText = favorite;
}
document.getElementById("past").onclick = function(){
    var past = prompt("Who were you in your life?");
    document.getElementById("outputPast").innerText = past;
}
document.getElementById("bucket").onclick = function(){
    var bucket = prompt("What's on your bucket list?");
    document.getElementById("outputBucket").innerText = bucket;
}
document.getElementById("final").onclick = function(){
    var final = prompt("What are your final thoughts?");
    document.getElementById("ouputFinal").innerText = final;
}