var controller = require("../controllers/pollController")

  async function shortlink () { 
    var shortlink = require('shortlink');
    let randVar = shortlink.generate(8); // Random string of 8 characters, e.g. 'PJWn4T42' 
    var currentShortlinks = await controller.getExistingKeys()
    let dupeKeyArr = currentShortlinks.filter(shortlink => {
        shortlink.poll_key === randVar
    })
    return dupeKeyArr.length === 0 ? randVar : shortlink();
} 
module.exports = shortlink; 