import { createTransport } from 'nodemailer';

const email = process.env.MAILER_EMAIL;
const password = process.env.MAILER_PASSWORD;

export const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});

export const baseMailOptions = {
  from: email,
};