'use server'
import ContactFormEmail from '@/email/contact-form-email'
import { getErrorMessage, isValidString } from '@/lib/utils'
import React from "react"
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!isValidString(email, 500)) {
    return {
      error: 'Invalid sender email',
    }
  }
  if (!isValidString(message, 5000)) {
    return {
      error: 'Invalid sender message',
    }
  }
  let data;
  try {
      data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'anthonybturner@icloud.com',
      subject: 'Message from contact form',
      replyTo: email,
      react: React.createElement(ContactFormEmail, {
        message: message, 
        email: email}),
    })
  } catch (error: unknown) {
    getErrorMessage(error)
  }

  return {
    data,
  }
}
