var notesArray = [];
function onSubmitOfNote() {
    var note = document.getElementById("note-input").value;
    notesArray.push(note);
    localStorage.setItem("notes", notesArray.toString());
    fetchNotes()
    return false;
}

function fetchNotes() {
    var str = localStorage.getItem("notes"); // localstorage sends string                 
    notesArray = str.split(",");// conversion of string to array
    var htmlString = "";// string variable
    // for loop on array
    notesArray.forEach(ele => {
        htmlString += `<li> ${ele} </li>` // append all list items in a html string 
    }) 
    document.getElementById("note-list").innerHTML = htmlString; // converted htmlstring added as innerhtml to ul tag 
}