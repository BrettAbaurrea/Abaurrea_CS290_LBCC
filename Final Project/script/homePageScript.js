 //Ask user if they are just vistining Death-Cast.com (or if they are looking to register for Last Friend)
 let justBrowsing = window.confirm("Just Browsing? (Click OK)");
 if (justBrowsing != true){
     console.log("Redirecting to Last Friend App...");
     window.alert("Redirecting to last Friend App...");
     window.location.href="lastFriendPageFINAL.html";
 }
 else{
     console.log("Death-Cast Homepage for all");
 }