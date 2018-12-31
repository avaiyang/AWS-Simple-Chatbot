
exports.handler = (event, context, callback) => {
    var msg = event.messages;
    
    switch (msg) {
        case 'Hello':
        case 'Hi':
        case 'Hey':
            callback(null, 'Hi there, how can I help?');
            break;
        case 'Which semester?':
            callback(null, 'Fall 2018');
            break;
        case 'Which class?':
            callback(null, 'This is Cloud Computing');
            break;
        case 'What is your name?':
            callback(null, 'I am Asley.');
            break;
        case 'Bye':
            callback(null, 'Bye');
            break;
        default:
            callback(null, "I am confused, I can only understand:" + "<br>" +
            "   1) Hello, Hey, Hi" + "<br>" +
            "   2) Which class?" + "<br>" +
            "   3) Which semester?" + "<br>" +
            "   4) What is your name?" + "<br>" +
            "   5) Bye");
    }
};