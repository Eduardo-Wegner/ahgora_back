const chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = chai.should(),
    cheerio = require('cheerio'),
    // get_data = require('../lib/get_data'),
    request = require('request'),
    dotenv = require('dotenv'),
    open = require('open'),
    loaders = require('../loaders/index.js');
global.schedule = require('../services/timers');
chai.use(chaiHttp);
dotenv.config();

describe('Request data from API', () => {
    context('request localhost trendings', function (){

        it("Testing authorize route", (done)=>{
            console.log('http://localhost:'+process.env.PORT_HTTP)
            chai.request('http://localhost:'+process.env.PORT_HTTP)
            .get('/authorize')
            .end((err, res)=>{
                console.log(res.body.url)
                open(res.body.url, {wait: true}).then((res)=>{
                    // console.log(res)
                    done()
                });
                res.should.have.status(200);
                
            })
            // done()
        })

        it("Testing retrieve data from localhost / route", function (done){
            this.timeout(50000);
            setTimeout(()=>{
                chai.request('http://localhost:'+process.env.PORT_HTTP)
                .get('/search?search=banca de piadas&daily_time=50')
                .end((err, res)=>{
                    // console.log(res)
                    res.should.have.status(200);
                    done()
                })
            },40000)    
        })
    })
})
