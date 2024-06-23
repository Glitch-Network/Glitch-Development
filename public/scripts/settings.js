
localStorage.setItem("in_bounds",1) // DO NOT REMOVE THIS LINE, ITS ESSENTIAL FOR THE ARROW SYSTEM
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("themes") != null) {
        document.getElementById("theme").value = localStorage.getItem("themes");
    }
    if (localStorage.getItem("search_engine") != null) {
        document.getElementById("engine").value = localStorage.getItem("search_engine");    
    }
    setInterval(function() {
        env = document.getElementById("engine").value
        localStorage.setItem("search_engine", env);
    }, 10)
})
const debug = document.getElementById("debug");
debug.innerHTML =+ "Host:" + location.host + "<br>" + "Protocol:" + location.protocol + "Version: " + "v6 Beta" + "<br>" + "Connecting from: " + navigator.connection.effectiveType + " internet" + "<br> Platform: " + navigator.platform;

document.addEventListener("DOMContentLoaded", function() {

    if (localStorage.getItem("themes") == "true" || true) {
        document.getElementById("theme").style.display = "block";
        document.getElementById("theme_div").style.display = "block";
    }
    if (localStorage.getItem("ai_teacher_detection") == "true" || true) {
        document.getElementById("ai").style.display = "block";
        document.getElementById("ai_div").style.display = "block";
    }
})



// Define the themes
const themes = [
{ id: "dark", backgroundColor: "black", color: "white", class: "stars" },
{ id: "ocean", backgroundColor: "#005493", color: "white", class: "" },
{ id: "light", backgroundColor: "white", color: "black", class: "" },
{ id: "forest", backgroundColor: "#013220", color: "white", class: "forest" },
{ id: "forest2", backgroundColor: "#013220", color: "white", class: "forest2" },
{ id: "sunset", backgroundColor: "orange", color: "white", class: "" },
{ id: "rain", backgroundColor: "black", color: "white", class: "rain" },
{ id: "wheat", backgroundColor: "black", color: "white", class: "" },
{ id: "capy", backgroundColor: "black", color: "white", class: "capy" },
// dedicated to friends, well i think their my friends? maybe not idk
{ id: "s1", backgroundColor: "black", color: "white", class: "s1" },
{ id: "s2", backgroundColor: "black", color: "white", class: "s2" },
{ id: "s3", backgroundColor: "black", color: "white", class: "s3" }, // Except, this one, im not friends with SGA
{ id: "custom-image", backgroundColor: "black", color: "white", class: "" },
];
str = ""
        document.addEventListener("keypress",function(e) {
            str += e.key
            if (str == "glitch approves of galaxys art") {
                // add option for "Eve" in the menu
                document.getElementById("theme").innerHTML += "<option value='s1'>Eve</option>"

            }

            if (str == "im a bread man") {
                // Add a bread man option
                document.getElementById("theme").innerHTML += "<option value='s2'>Bread Man</option>"

            }

            if (str == "aye, i caught a fish") {
                // Add a fish option
                document.getElementById("theme").innerHTML += "<option value='s3'>SGA's Fishin'</option>"
            }
        })




document.addEventListener("DOMContentLoaded", function() {
const themeSelect = document.getElementById("theme");
const engineSelect = document.getElementById("engine");
const debug = document.getElementById("debug");
const aiToggle = document.getElementById("ai");

// Update debug information
debug.innerHTML = "Host:" + location.host + "<br>Protocol:" + location.protocol + " Version: " + "v5 Beta" + "<br>Connecting from: " + navigator.connection.effectiveType + " internet" + "<br> Platform: " + navigator.platform;

// Load initial theme
updateTheme();

// Load initial search engine
if (localStorage.getItem("search_engine")) {
engineSelect.value = localStorage.getItem("search_engine");
}

// Set search engine on change
engineSelect.addEventListener("change", function() {
localStorage.setItem("search_engine", this.value);
});

// Theme change handling
themeSelect.addEventListener("change", function() {
localStorage.setItem("theme", this.value);
if (this.value === "custom-image") {
    const fileInput = document.getElementById("fileinput");
    fileInput.style.display = "block";
    const fileButton = document.getElementById("filebtn");
    fileButton.style.display = "block";
}
else {
    const fileInput = document.getElementById("fileinput");
    fileInput.style.display = "none";
    const fileButton = document.getElementById("filebtn");
    fileButton.style.display = "none";
}

});

document.getElementById("filebtn").addEventListener("click", function () {
const fileInput = document.getElementById("fileinput");
const reader = new FileReader();

if (!fileInput.files[0]) {
alert("No image selected");
return;
}

// Check if the selected file is an image
const file = fileInput.files[0];
if (!file.type.startsWith('image/')) {
alert("Please select an image file.");
return;
}

reader.onload = function(e) {
// Construct the full data URI header
const base64Image = `data:${file.type};base64,${e.target.result.split(',')[1]}`;
localStorage.setItem("theme", "custom-image");
localStorage.setItem("custom-image", base64Image);
console.log(base64Image);

updateTheme();
};

reader.onerror = function(e) {
alert("Error reading file");
reader.abort();
};

reader.readAsDataURL(file);
}

// close click listener
)


function updateTheme() {
const currentTheme = themes.find(t => t.id === localStorage.getItem("theme")) || themes[0];
//document.body.style.backgroundColor = currentTheme.backgroundColor;
//document.body.style.color = currentTheme.color;
const mainDiv = document.querySelector(".main");
if (mainDiv) {
    mainDiv.className = "main " + currentTheme.class;
}

}

// Conditional display of elements based on local storage
aiToggle.style.display = localStorage.getItem("ai_teacher_detection") ? "block" : "none";



});


// Initial theme setup
document.addEventListener("DOMContentLoaded", function() {
const savedThemeId = localStorage.getItem("theme");
const savedTheme = themes.find(t => t.id === savedThemeId) || themes[0];
//document.body.style.backgroundColor = savedTheme.backgroundColor;
//document.body.style.color = savedTheme.color;
const mainDiv = document.getElementsByClassName("main")[0];
if (mainDiv) {
mainDiv.className = "main " + savedTheme.class;
}
});



function save() {
let data = "";

for (const [key, value] of Object.entries(localStorage)) {
if (key.includes("data")) {
    data += key + "=" + value + "\n";
}
}

var blob = new Blob([btoa(data)], { type: "text/plain;charset=utf-8" });
var url = URL.createObjectURL(blob);
var a = document.createElement("a");
a.href = url;
a.download = "data.glitch";
document.body.appendChild(a); // Append the anchor to body
a.click(); // Simulate click on the anchor
document.body.removeChild(a); // Remove the anchor from body
URL.revokeObjectURL(url); // Clean up the URL object
}

function load() {
const input = document.getElementById("fileinput");
if (input) {
input.removeEventListener("change", handleFileSelect); // Safe to call if input exists
input.addEventListener("change", handleFileSelect);
input.click();
} else {
console.error("File input element not found!");
}
}


function handleFileSelect(event) {
const file = event.target.files[0];
const reader = new FileReader();

reader.onload = function (e) {
let contents = e.target.result;

// Decode Base64
contents = atob(contents);

// Split into lines
const lines = contents.split("\n");

for (const line of lines) {
    if (line.trim().length > 0) {
        const [key, value] = line.split("=");
        localStorage.setItem(key, value);
    }
}
};

reader.readAsText(file);
}


function setTheme() {
const color = document.getElementById("color").value;
localStorage.setItem("theme", "custom-color");
localStorage.setItem("custom-color", color);

updateTheme();
}

