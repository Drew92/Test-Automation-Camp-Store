module.exports = [
    {
        testTitle:`Should not login with invalid password`,
        email:`drewtest@ahmail.com`,
        password:`wrongPassword`,
        hasAccess:false,
        useErrorMsgBarLocator:true,
        message:`Wrong email or password.`
        
    },
    {
        testTitle:`Should not login without email`,
        email:`{backspace}`,
        password:`bc123Quality`,
        hasAccess:false,
        useErrorMsgBarLocator:false,
        message:`Email can't be blank`
    },
    {
        testTitle:`Should not login without password`,
        email:`drewtest@ahmail.com`,
        password:`{backspace}`,
        hasAccess:false,
        useErrorMsgBarLocator:false,
        message:`Password can't be blank`
    },
    {
        testTitle:`Should login with existing user account`,
        email:`drewtest@ahmail.com`,
        password:`bc123Quality`,
        hasAccess:true,
        useErrorMsgBarLocator:false,
        message:null
    },
    {
        testTitle:`Should not login with valid password but incorrect email`,
        email:`drewtest@mail.com`,
        password:`bc123Quality`,
        hasAccess:false,
        useErrorMsgBarLocator:true,
        message:`Wrong email or password.`
        
    },
    {
        testTitle:`Should not login with invalid email format`,
        email:`drewtest@ahmail`,
        password:`bc123Quality`,
        hasAccess:false,
        useErrorMsgBarLocator:false,
        message:`Email is invalid`
    }
    
];