if (process.argv[2]) {
const child_process = require("child_process");
var fs = require("fs");

function translate_to_origin(str) {
var r2 = [];
var r = str.split("");
r.forEach(function(char, i){
var cc = char.charCodeAt(0) - 5;
r2.push(String.fromCharCode(cc))
})
return r2.join("");
}
var ranum = Math.random().toString().split(".").pop();
fs.writeFileSync("tmp_" + ranum + ".spwn", translate_to_origin(fs.readFileSync(process.argv[2]).toString()));
console.log(fs.readFileSync("tmp_" + ranum + ".spwn").toString())
child_process.spawnSync("spwn build tmp_" + ranum + ".spwn --no-gd -l", {shell: true, stdio: "inherit"});
fs.rmSync("tmp_" + ranum + ".spwn");
} else {
	console.log("ERROR: no file to run detected!");
}
