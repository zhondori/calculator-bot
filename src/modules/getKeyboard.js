const path = require("path");
const fs = require("fs/promises");

module.exports = async () => {
    try {
        let dataPath = path.join(__dirname, "..", "assets", "keyboard.json");
        let file = await fs.readFile(dataPath, "utf-8");
        return JSON.parse(file);
    } catch (err) {
        console.log(err.message);
    }
}