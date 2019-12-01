

const functions     = require('firebase-functions');
const nodemailer    = require('nodemailer');
const admin         = require('firebase-admin');
const rp            = require('request-promise');
const config        = require('./config/config').config;

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: config.dbUrl
});


const smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: config.emailUser,
        pass: config.emailPassword
    }
}

const secretRecaptchaKey = config.captchaSecretKey;

const mailTransport = nodemailer.createTransport(smtpConfig);



exports.processApplication = functions.database.ref('/applications/{pushId}')
    .onCreate((snapshot, context) => {
      if (!config) {
          throw new Error('Missing config file');
      }
      try {
        const original = snapshot.val();
        console.log(original);
        console.log({captchaSecretKey: secretRecaptchaKey });
        validateCaptcha(original.captcha_token)
            .then(res => {
                if (res) {
                    return sendEmail(original);
                }
            })
            .catch((err) => { console.log('Captcha validation error: ', err); });
       
      } catch (err) {
          console.log(err);
      }
      return Promise.resolve();
});


function validateCaptcha(token) {
    console.log('Validating token: ', token);
    const options = {
        method: 'POST',
        uri: 'https://recaptcha.google.com/recaptcha/api/siteverify',
        qs: {
            secret: secretRecaptchaKey,
            response: token
        },
        json: true
    };
    
    return rp(options)
        .then(response => {
            console.log({ captchaResponse: response });
            return response.success;
        });
}


function sendEmail(original) {
    console.log('About to send emails to', config.targetEmails);
    const today = new Date().toLocaleDateString() +', '+ new Date().toLocaleTimeString();
    const subjectStr = `Нова заявка на навчання від ${original.name}, ${today}`;
    const bodyStr = `
    <b>Ви отримали нову заявку на навчання з сайту kids-school</b>
    <div>Ім'я заявника:</div><div>${original.name}</div>
    <div>Ел. скринька:</div>
    <div>${original.email}</div>
    <div>Телефонний номер:</div>
    <div>${original.phone}</div>`;


        const mailOptionsDef = {
            from: '"no-reply" <omicrontos@gmail.com>', // sender address
            to: config.targetEmails, // list of receivers
            subject: subjectStr, // Subject line
            html: bodyStr // html body
        }
        console.log('About to send email', mailOptionsDef);
        return mailTransport.sendMail(mailOptionsDef, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Email sent successfully', info.response);
            }
        })
    
}

