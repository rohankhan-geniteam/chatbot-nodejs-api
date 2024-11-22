const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.post('/chat', (req, res) => {
    const { message } = req.body;
    console.log("Received message:", message);
    let response;

    // Handle common greetings and responses
    if (message.includes('hello') || message.includes('hi')) {
        response = "Hello! How can I assist you today?";
    } else if (message.includes('how are you')) {
        response = "I'm doing great, thank you for asking! How about you?";
    } else if (message.includes('bye') || message.includes('goodbye')) {
        response = "Goodbye! Have a great day!";
    } else if (message.includes('yes')) {
        response = "Great! How can I help you next?";
    } else if (message.includes('no')) {
        response = "Okay, let me know if you need anything!";
    } else if (message.includes('thanks') || message.includes('thank you')) {
        response = "You're welcome! I'm here to help.";
    } else if (message.includes('please')) {
        response = "Sure, what can I do for you?";
    } else if (message.includes('ok')) {
        response = "Okay! What can I do for you next?";
    
    // Date and Time related responses
    } else if (message.includes('what is the time') || message.includes('current time')) {
        const currentTime = new Date().toLocaleTimeString();
        response = `The current time is ${currentTime}.`;
    } else if (message.includes('what is the date') || message.includes('current date')) {
        const currentDate = new Date().toLocaleDateString();
        response = `Today's date is ${currentDate}.`;

    // Fun responses
    } else if (message.includes('joke')) {
        response = "Why don't skeletons fight each other? They don't have the guts!";
    } else if (message.includes('tell me something interesting') || message.includes('interesting fact')) {
        response = "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still perfectly edible!";
    } else if (message.includes('fun fact')) {
        response = "Did you know? A group of flamingos is called a 'flamboyance'!";
    
    // Responses based on common questions
    } else if (message.includes('how old are you')) {
        response = "I don't age, I just learn and improve over time!";
    } else if (message.includes('what is AI')) {
        response = "AI stands for Artificial Intelligence. It refers to the simulation of human intelligence in machines that are programmed to think and learn.";
    } else if (message.includes('who created you')) {
        response = "I was created by developers to assist you with answering questions and having conversations.";
    } else if (message.includes('can you help me')) {
        response = "Of course! What do you need help with?";
    } else if (message.includes('where do you live')) {
        response = "I exist in the cloud, so I can be anywhere!";
    } else if (message.includes('what is your name')) {
        response = "I am your friendly chatbot. How can I help you?";
    } else if (message.includes('what is your purpose')) {
        response = "My purpose is to assist you by providing helpful answers and having friendly conversations.";

    // Specific information or knowledge
    } else if (message.includes('what is the weather') || message.includes('weather')) {
        response = "I currently don't have access to live weather data, but you can check your local weather using a weather app or website!";
    } else if (message.includes('what is the capital of France')) {
        response = "The capital of France is Paris.";
    } else if (message.includes('who is the president of the United States')) {
        response = "As of now, the President of the United States is Joe Biden.";
    } else if (message.includes('what is the largest planet')) {
        response = "The largest planet in our solar system is Jupiter.";
    
    // More single-word responses
    } else if (message.includes('help')) {
        response = "Sure, what do you need help with?";
    } else if (message.includes('movie')) {
        response = "I can recommend a movie! How about 'Inception'? It's a thrilling mind-bending movie.";
    } else if (message.includes('song')) {
        response = "I can suggest some songs! Do you like pop music or rock music?";
    } else if (message.includes('food')) {
        response = "I don't eat, but I know a lot about food! What's your favorite type of cuisine?";
    } else if (message.includes('game')) {
        response = "Are you looking for a game to play? I can suggest some fun ones!";
    } else if (message.includes('study')) {
        response = "Studying can be tough, but I'm here to help! What are you studying?";
    } else if (message.includes('book')) {
        response = "Books are great! Are you looking for book recommendations?";
    } else if (message.includes('password')) {
        response = "To reset your password, you can usually click the 'Forgot Password' link on the login page and follow the instructions sent to your email.";
    } else if (message.includes('contact')) {
        response = "You can usually contact support through the 'Contact Us' section on the website or by sending an email to support@example.com.";
    
    // Default response for unrecognized messages
    } else {
        response = "I'm sorry, I didn't quite understand that. Could you rephrase?";
    }
    
    res.json({ response });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
