import React, { useRef } from 'react';
import { sendEmail } from './SendMailService';

export const SendMailDemo = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const name = formData.get('user_name');
        const email = formData.get('user_email');
        const message = formData.get('message');
        sendEmail(name, email, message);
    };

    return (
        <form ref={form} onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};
