module.exports =  
    [{
        testTitle:'Should not be able to send message without first name',
        firstName: `{backspace}`,
        lastName: `Smith`,
        email:`smitty@hotmail.com`,
        subject:`Need help`,
        messageText:`Yo call me now`,
        isValid:false,
        response:`Field is required!`
    },
    {
        testTitle:'Should be able to send a message successfully',
        firstName: 'Eva',
        lastName: 'Lindo',
        email:'elin93@yahoo.com',
        subject:'Great Store',
        messageText:'I love shopping here',
        isValid:true,
        response:'Message Sent!'
    },
    {
        testTitle:'Should not be able to send message without last name',
        firstName: 'Frank',
        lastName: '{backspace}',
        email:'bigman@gmail.com',
        subject:'Too expensive',
        messageText:'Why the gray couch have to cost so much, no sah',
        isValid:false,
        response:'Field is required!'
    },
    {
        testTitle:'Should not be able to send message without email address',
        firstName: 'Pat',
        lastName: 'Johnson',
        email:'{backspace}',
        subject:'When is new stock coming',
        messageText:'I would like to order 50,000 quality pillows',
        isValid:false,
        response:'Field is required!'
    },
    {
        testTitle:'Should not be able to send message without subject',
        firstName: 'Shernett',
        lastName: 'Williams',
        email:'shery33@yahoo.com',
        subject:'{backspace}',
        messageText:'Does the mac come with a warranty?',
        isValid:false,
        response:'Field is required!'
    },
    {
        testTitle:'Should not be able to send message without a message',
        firstName: 'Greg',
        lastName: 'Timothy',
        email:'timZup@hotmail.com',
        subject:'I got something to say',
        messageText:'{backspace}',
        isValid:false,
        response:'Field is required!'
    },
    {
        testTitle:'Should not be able to send message with incorrect email format',
        firstName: 'Percival',
        lastName: 'Towns',
        email:'yoyo97mail.com',
        subject:'Need an blue couch',
        messageText:'Got any blue couches?',
        isValid:false,
        response:'Email is invalid'
    }];
    
