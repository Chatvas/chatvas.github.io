const uri = 'ws://35.196.185.160:3080/';
let s = new WebSocket(uri);

function appendMessage(text, me) {
    document.querySelector('main').innerHTML += `<p class='message-${me? 'sent':'received'}'>${text}</p>`;
}

s.onmessage = m => {
    // this function runs when a message is received from the server
    // it is called by the WebSocket object automatically
    appendMessage(m.data);
    console.log(`receieved ${m} from server`);
};

function sendMessage() {
    alert('sending message');
    inputBox = document.getElementById('message');
    let message = inputBox.value;
    if(!message) {
        alert('Please type in some text!');
    }else{
	// send the message to the server
	s.send(message);

	// display the message on-screen
	appendMessage(message, true);
	
        // After hitting send, empty all text
	inputBox.value='';
    }
    
}
