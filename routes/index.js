'use strict';
module.exports = function (control,google_api) {
    return new Promise((resolve, reject)=>{
        const main_route = require('./main_route');
        
        main_route(control,google_api);
        resolve()
    })
  };