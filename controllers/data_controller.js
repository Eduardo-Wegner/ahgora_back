class data_controller{
    constructor(){
       this.filters = require('../lib/filter_search')
    }

    static factory(){
        return new data_controller();
    }

    async get_video_list(res,query,count=1,array={},pTk=''){
        console.log(query)
        
        let json_id=array;
        if(count<=4) {
            console.log(query.search)
            let result = await youTube_search.search.list({part:'id',q:query.search, type:'video', maxResults:50,videoDuration:'any',pageToken:pTk}).catch((err)=>console.log(err)),
            aux_array =[];
            console.log(result)
            result.data.items.forEach((element,index) => {
                aux_array.push(element.id.videoId)
                if (index == result.data.items.length -1) {
                        json_id[count]=aux_array
                        count++;
                        this.get_video_list(res,query,count, json_id, result.data.nextPageToken)
                        
                    
                }
            });
        }else{
            console.log(query.daily_time)
            this.get_videos_details(res,query.daily_time,json_id)
            
        }
    }

    async get_videos_details(res,daily_time,videos_array){
        let array_result=[]
        for (let index = 1; index <=4; index++){
            let result = await youTube_search.videos.list({part:'snippet,contentDetails,statistics', id:videos_array[index].toString()})
            array_result = array_result.concat(result.data.items)

            console.log(array_result.length)
            if (index == 4) {
                console.log(array_result.length)
                // res.status(200).json(array_result)
                this.filters.filter(daily_time,array_result,res);
            }
        }
    }
}

module.exports = data_controller.factory()