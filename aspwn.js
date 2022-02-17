if (process.argv[2]) {
const child_process = require("child_process");
var fs = require("fs");
var other_args = process.argv.slice(3);
function translate_to_origin(str) {
return str.split("").map(x => x = String.fromCharCode(x.charCodeAt(0) - 5)).join("")
}
var ranum = Math.random().toString().split(".").pop();
fs.writeFileSync("tmp_" + ranum + ".spwn", translate_to_origin(fs.readFileSync(process.argv[2]).toString()));
console.log(fs.readFileSync("tmp_" + ranum + ".spwn").toString())
child_process.spawnSync("spwn build tmp_" + ranum + ".spwn " + other_args.join(" "), {shell: true, stdio: "inherit"});
fs.rmSync("tmp_" + ranum + ".spwn");
} else {
	console.log("ERROR: no file to run detected!");
}
