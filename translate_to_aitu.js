const fs = require("fs");
var file = process.argv[2];

if (file) {
function translate_to_aitu(str) {
str = str.split("");
var h = [];
str.forEach(function(e){
h.push(String.fromCharCode(e.charCodeAt(0) + 5))
})
return h.join("");
}

fs.writeFileSync(file.split(".").slice(0, -1).join(".") + ".aitu", translate_to_aitu(fs.readFileSync(file).toString()))
} else {
console.log("ERROR: no file to translate found!");
}
