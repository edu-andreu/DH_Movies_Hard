const fs = require("fs");

//json parser
function jsonParser(jsonPath) {
        let jsonFile = fs.readFileSync(jsonPath,"utf-8");
        return JSON.parse(jsonFile);
    }

//line breaks
const lb1 = '\n' //line break * 1
const lb2 = '\n\n' //line break * 2

//titulos
const appName = '🎥DH MOVIES 🎥';

module.exports = {
    jsonParser,
    lb1,
    lb2,
    appName
}