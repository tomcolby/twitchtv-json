//client ID=1pio6l0khk1i0ex6xzjvh2b7gjyg4n
//["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
//https://api.twitch.tv/kraken/channels/freecodecamp?client_id=1pio6l0khk1i0ex6xzjvh2b7gjyg4n


var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

$(function(){
  $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?client_id=1pio6l0khk1i0ex6xzjvh2b7gjyg4n').done(function(data){
   //console.log(data);
    if(data.stream === null){
      $('#fcc').html(' is offline');
    }else{
       $('#fcc').html(' is ONLINE!');
    }
  });
  
  for(var i=0; i < streams.length; i++){
    $.ajax({
     type: 'GET',
      url: 'https://api.twitch.tv/kraken/channels/'+ streams[i],
      headers: {
      'client-ID': '1pio6l0khk1i0ex6xzjvh2b7gjyg4n'
    },
      success: function(dataI){
        console.log(dataI);
       $.getJSON('https://api.twitch.tv/kraken/streams/'+ dataI.name +'?client_id=1pio6l0khk1i0ex6xzjvh2b7gjyg4n').done(function(data2){
   //console.log(data2);
         var name = data2._links.self.slice(37);
        console.log(name);
         if(data2.stream === null){
      $('#user').append('<a target = "blank" href= "https://www.twitch.tv/'+ name +'">'+ name +'</a><br>');
     $('#status').append('offline<br>')
     $('#game').append('N/A<br>')
    }else{
        $('#user').append('<a target = "blank" href= "https://www.twitch.tv/'+ name +'">'+ name +'</a><br>');
      $('#status').append('ONLINE!<br>')
       $('#game').append(data2.stream.game + '<br>');
    }
  });
      },
      error: function(err){
      //alert("Error: User not found");
   
    }
      
      
    });
    
    
  };
});