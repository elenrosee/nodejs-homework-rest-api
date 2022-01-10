const sgMail = require('@sendgrid/mail')

const { SENDGRID_API_KEY2 } = process.env

sgMail.setApiKey(SENDGRID_API_KEY2)

const sendEmail = async (data) => {
  const email = { ...data, from: 'ElenaOvcharenko15@gmail.com' }

  // eslint-disable-next-line no-useless-catch
  try {
    await sgMail.send(email).then(() => console.log('Email send succes'))
    return true
  } catch (error) {
    throw error
  }
}

module.exports = sendEmail
