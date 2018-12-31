function awsChat()
{
    var message = document.getElementById("msgId").value;
    var d = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
                        "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var textarea = document.getElementById('chatbottext');

    var apigClient = apigClientFactory.newClient({
      apiKey: 'xxxxxxxx'    // enter your API key
    });

    var params = {

    };

    var body = {
        "messages" : message.charAt(0).toUpperCase() + message.slice(1)
    };

    var additionalParams = {

    };

    $("#chatbottext").append('<div class="you">'  + message.charAt(0).toUpperCase() + message.slice(1) + '<div class="timestamp">'  + d.getHours() + ":" + ('0'+d.getMinutes()).slice(-2) + '</div></div>');

    apigClient.chatbotPost(params, body, additionalParams)
        .then(function(result){
//        console.log(result)
//        console.log(result.data)
            $("#chatbottext").append( '<div class="bot">' + result.data + '<div class="timestamp">'  + monthNames[d.getMonth()] + " " + d.getDate() + ", "+ d.getHours() + ":" + ('0'+d.getMinutes()).slice(-2) + '</div></div>');
          
            textarea.scrollTop = textarea.scrollHeight;

            $('#msgId').val(function(){
                return this.defaultValue;
            });
        }).catch( function(result){
          alert(result.body);
        });
    
};

