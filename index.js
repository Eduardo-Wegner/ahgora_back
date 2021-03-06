class start{
    constructor(){
        
            global.schedule = require('./services/timers');
            this.loaders = require('./loaders');
            this.routes = require('./routes');
            this.google_api;
            
            // setInterval(() => this.log.info(new Date), 1000);
            // setInterval(()=>this.log = logger.createSimpleFileLogger({logFilePath:'logger'+new Date+'.log',timeStampFormat:"MM-DD-YYY HH:mm:ss.SSS"}),10000)
        
    }

    static factory(){
        return new start();
    }

    load_modules(){
        this.loaders.load_modules().then(()=>this.load_routes())
    }
    load_routes(){
        this.google_api = require('./services/google_auth');
        this.routes(this.control,this.google_api).then(() => {
            
            app.listen(process.env.PORT_HTTP,  ()=>{
                logger.info(`Listening on PORT: ${process.env.PORT_HTTP}`);
                console.log(`Listening on PORT: ${process.env.PORT_HTTP}`);
                logger.info('####  SERVER INITIALIZED   ####');
                console.log('####  SERVER INITIALIZED   ####');
            });
        })
    }
}

const start_app = start.factory();
start_app.load_modules();