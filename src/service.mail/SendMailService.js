// 200 request - 1 month: https://www.emailjs.com/
// send To cho mail cá nhân chứ .edu không ổn
import emailjs from '@emailjs/browser';

export const sendEmail = (name, email, message) => {
    const serviceId = 'service_lq6ok2b';
    const templateId = 'template_pb3mpkt';
    const publicKey = 'BmrMTimHHpa47rYSB';

    const templateParams = {
        user_name: name,
        user_email: email,
        message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
};