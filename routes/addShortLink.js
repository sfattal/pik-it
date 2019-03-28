// ISMUM

function shortlink () { 
var shortlink = require('shortlink');

let randVar = shortlink.generate(8); // Random string of 8 characters, e.g. 'PJWn4T42'  

return randVar; 

} 

module.exports.shortlink; 