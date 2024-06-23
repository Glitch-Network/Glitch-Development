document.addEventListener('DOMContentLoaded', () => {
    frame_url = 'https://freakybot.onrender.com';
    document.getElementById('frame').src = frame_url;
})

chat_history = [];
sys_prompt = "System: You are an assistant named Main from the Proxii Network."

function generateResponse(prompt) {
    const base = "https://freakybot.onrender.com/generate-text";
    promptText = `System: You are an assistant named Main from the Proxii Network. User: ${prompt} Assistant:`;
    promptText = promptText+"\n" + chat_history

    return fetch(base, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: promptText })
    })
    .then(res => res.json());
}

document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', () => sendMessage('user'));

    messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            sendMessage('user');
        }
    });

    async function sendMessage(who, text = '') {
        let message;

        if (who === 'user') {
            message = messageInput.value.trim();
            if (message === '') return;
        } else {
            message = text;
        }

        const messageElement = document.createElement('div');
        messageElement.classList.add('message', who === 'user' ? 'user' : 'assistant');
        messageElement.textContent = message;

        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;

        if (who === 'user') {
            messageInput.value = '';
            messageInput.focus();

            try {
                const response = await generateResponse(message);
                if (response.result) {
                    sendMessage('assistant', response.result); // The "result" is the message
                    chat_history.push("User: " + message + " Assistant: " + response.result + "\n");
                } else {
                    sendMessage('assistant', 'No response text received.');
                }
            } catch (error) {
                sendMessage('assistant', `Error generating response: ${error.message}`);
            }
        }
    }
});
