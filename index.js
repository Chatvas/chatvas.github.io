var socket=io.connect('http://127.0.0.1:3000');
var message=document.getElementById('message');

$('button').click(()=>{

    if($("#message")[0].value==null || $("#message")[0].value==''){
        console.log('Please type in some text!');
    }else{
        socket.emit('message',{text:message.value});
        //console.log(message.value);
        $('.main').append('<p class="p1">'+' '+' '+message.value+' '+' '+'</p>'+'<br/>'+'<br/>'+'<p style="height: 16px;">'+'</p>');
        
        // After hitting send, empty all text
        $("#message")[0].value='';
        return false;
    }
    
});
socket.on('push message',(data)=>{
    console.log(data.text);
    $('.main').append('<p class="p2">'+' '+' '+data.text+' '+' '+'</p>'+'<br/>'+'<br/>'+'<p style="height: 16px;">'+'</p>');
});
