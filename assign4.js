

const TelegramBot = require('node-telegram-bot-api');

const token = '6002823526:AAFgk92VIZAYGPd-ZURnsweSbdRVHAJWte8';

const bot = new TelegramBot(token, {polling: true});


const request = require('request');

bot.on('message', function(msg){

request('http://www.omdbapi.com/?t='+msg.text+'&apikey=6767e36f', function (error, response, body) {
  

if ((msg.text)==="hi" && (msg.text)==="/start") {
        bot.sendMessage(msg.chat.id,"Hellooo "+msg.chat.last_name);
        bot.sendMessage(msg.chat.id,"Enter any Movie name to know its details like Director,Actors,Ratings,Collections");
       }

else if(JSON.parse(body).Response=="True"){
    bot.sendMessage(msg.chat.id, "The Title of the Movie is ::  "+"**"+(JSON.parse(body).Title).toUpperCase()+"**"+"\n\n\n"+ "It was directed by - "+JSON.parse(body).Director +"\n\n"+ "The lead actors involved in this project are - "+JSON.parse(body).Actors  +"\n\n"+ "The plot of the movie is - \n"+JSON.parse(body).Plot+"\n\n"+  "When the ratings are concerned ,\nAs per IMDB the film is rated as "+JSON.parse(body).imdbRating  +"\n\n"+ " The Total Box-Office Collections of the movie as as follows,\n"+JSON.parse(body).BoxOffice);

  }
  else{

      bot.sendMessage(msg.chat.id, "Sorry.......... I can't get that , Retry entering valid Movie name \n\n(*** Movies already released are only considered ***)");

  }


});
})