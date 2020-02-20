const moment = require('moment'),
    wordFrequency = require('../services/wordFrequency');

exports.filter = async function(dailyTimer,array_result,res){
    console.log('PT' + dailyTimer + 'M')
    let _daily = moment.duration('PT'+dailyTimer+'M').asMilliseconds(),
        result=[],
        aux=[],
        titles='',
        descriptions='',
        total_duration=0,
        daily_duration=0,
        day=0;

    array_result.forEach(async (element,index) => {
        let video_duration = moment.duration(element.contentDetails.duration).asMilliseconds();
        console.log(_daily)
        console.log(video_duration)
        console.log(video_duration <= _daily+'\n\n')
        if (video_duration <= _daily) {
            total_duration = total_duration+video_duration;
            titles = titles.concat(element.snippet.title);
            descriptions = descriptions.concat(element.snippet.description)
            if (video_duration == _daily) {
                daily_duration = 0
                result.push([{title:element.snippet.title, description:element.snippet.description, thumbnail:element.snippet.thumbnails.medium.url, duration:element.contentDetails.duration}])
            } 
            if(video_duration+daily_duration <= _daily) {
                daily_duration = daily_duration+video_duration;
                aux.push({title:element.snippet.title, description:element.snippet.description, thumbnail:element.snippet.thumbnails.medium.url, duration:element.contentDetails.duration})
            }else{
                day=0
                daily_duration=0
                aux=[];
                result.push(aux);
                result.push([{title:element.snippet.title, description:element.snippet.description, thumbnail:element.snippet.thumbnails.medium.url, duration:element.contentDetails.duration}])
            }
        }
        if (array_result.length -1 == index ){
            let result_titles = await wordFrequency.filter_frequency(titles,10),
            result_descirptions = await wordFrequency.filter_frequency(descriptions,10);
            console.log({
                result: result,
                titles: result_titles,
                descriptions: result_descirptions,
                minutes_per_day: Math.ceil(moment.duration(_daily).asMinutes())+' Minutes',
                total_duration_days: Math.ceil(total_duration/_daily)+' days' ,
                total_duration_minutes: Math.ceil(moment.duration(total_duration).asMinutes())+' Minutes'
            })
            res.status(200).json({
                result: result,
                titles: result_titles,
                descriptions: result_descirptions,
                minutes_per_day: Math.ceil(moment.duration(_daily).asMinutes())+' Minutes',
                total_duration_days: Math.ceil(total_duration/_daily)+' days',
                total_duration_minutes: Math.ceil(moment.duration(total_duration).asMinutes())+' Minutes' ,
            })
        }
    });
    
}