const {google} = require('googleapis'),
    open = require('open'),
    moment = require('moment'),
    wordFrequency = require('./wordFrequency');

class google_api{
    constructor(){
        this.api_list = google.getSupportedAPIs();
        this._bearer_token='';
        this._CLIENT_ID=process.env.GOOGLE_CLIENT_ID;
        this._CLIENT_SECRET=process.env.GOOGLE_CLIENT_SECRET;
        this._REDIRECT_URL=process.env.GOOGLE_REDIRECT_URL;
        this._SCOPE = process.env.GOOGLE_SCOPE;
        this._TOKENS;
        this.oauth2Client;
        this.tubiu;
    }

    static factory(){
        return new google_api();
    }

    async confirm_authorization(res){
        console.log(this)
        this.oauth2Client = new google.auth.OAuth2(this._CLIENT_ID, this._CLIENT_SECRET, this._REDIRECT_URL);
        let auth_url = this.oauth2Client.generateAuthUrl({access_type:'offline', scope:this._SCOPE});
        res.status(200).json({url:auth_url})
        // open(auth_url, {wait: false}).then((res)=>console.log(res));
        // res.status(200).json({url:auth_url})
        // let code='4/wgH01jk99Mx6XU2qUSabvdUa63VfuKtClPdDyVM2u92yteJpr4Hhr5ncWMQAOr4Epkstwg2eKKGnecPGyDMmDlk'
        
    }

    async get_tokens(code,url ,res){
        let {tokens} = await this.oauth2Client.getToken(code)
        console.log(tokens)
        console.log(url)
        this.tubiu = await google.youtube({
            version: 'v3',
            auth: process.env.GOOGLE_API_TOKEN
          })
        global.youTube_search = this.tubiu;
        res.status(200).redirect(301,'http://'+url+'/?authorized=true')
        // res.status(200).redirect(301,'http://'+url)
        // res.status(200).send('SUCCESS')
        // this.get_video_list(res);
    }

    // async get_video_list(res,count=1,array={},pTk=''){
    //     let json_id=array;
    //     if(count<=4) {
    //         let result = await this.tubiu.search.list({part:'id',q:'cocomelon', type:'video', maxResults:50,videoDuration:'any',pageToken:pTk}),
    //         aux_array =[];
    //         result.data.items.forEach((element,index) => {
    //             aux_array.push(element.id.videoId)
    //             if (index == result.data.items.length -1) {
    //                     json_id[count]=aux_array
    //                     count++;
    //                     this.get_video_list(res, count, json_id, result.data.nextPageToken)
                        
                    
    //             }
    //         });
    //     }else{
    //         this.get_videos_details(res,json_id)
            
    //     }
    // }

    // async get_videos_details(res,videos_array){
    //     let array_result=[]
    //     for (let index = 1; index <=4; index++){
    //         let result = await this.tubiu.videos.list({part:'snippet,contentDetails,statistics', id:videos_array[index].toString()})
    //         array_result = array_result.concat(result.data.items)

    //         console.log(array_result.length)
    //         if (index == 4) {
    //             console.log(array_result.length)
    //             // res.status(200).json(array_result)
    //             this.filters(50,array_result,res);
    //         }
    //     }
    // }

  

    get SupportedAPIs(){
        return (google.SupportedAPIs())
    }


}
module.exports = google_api.factory();