'use strict';
const data_control = require('../controllers/data_controller'),
    express = require('express');
    
module.exports = function (control, google_api) {
    //Express Static Page
    app.use(express.static(`${__dirname}/../build`));
  
    app.route('/authorize')
        .get((req, res) => {
            console.log(req.query)
            google_api.confirm_authorization(res);
            // res.send('UHUUUULLLL')
        })
    app.route('/authcode')
        .get((req, res) => {
            google_api.get_tokens(req.query.code,req.headers.host, res)
            // res.send('UHUUUULLLL')
        })
    app.route('/search')
        .get((req, res) => {
            let query = req.query;
            // console.log(query)
            data_control.get_video_list(res,query)
            
            // google_api.get_tokens(req.query.code, res)
            // res.send('UHUUUULLLL')
        })

    //Not Found
    app.use((req, res, next) => {
        res.status(404).send(req.url+" - NOT FOUND")
    })
    //Any ERROR
    app.use((err, req, res, next) => {
        res.status(500).json({message:"OPS!!!! Something went wrong!!!", error:err})
    })
};