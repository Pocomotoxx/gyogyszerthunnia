const chatService = {
  sendMessage: (message) => {
    // In a real application, you would send the message to a server
    console.log('Sending message:', message);
  },
  onMessageReceived: (callback) => {
    // In a real application, you would listen for messages from a server
    // For now, we'll just simulate receiving a message every 5 seconds
    setInterval(() => {
      callback({
        author: 'System',
        text: 'This is a test message.',
      });
    }, 5000);
  },
};

export default chatService;
