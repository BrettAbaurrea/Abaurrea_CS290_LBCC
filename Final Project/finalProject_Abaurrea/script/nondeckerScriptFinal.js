//DONE [3/6]
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
document.getElementById("provide").onclick = function(){
    var provide = prompt("What Will You Provide to a Decker?");
    document.getElementById("outputProvide").innerText = provide;
}
document.getElementById("understand").onclick = function(){
    var understand = prompt("Do You Understand Deckers Have Less Than 24 Hours to Live and there's No Changing That?");
    document.getElementById("outputUnderstand").innerText = understand;
}