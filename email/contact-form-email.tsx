import { Body, Container, Head, Heading, Hr, Html, Link, Preview, Section, Text } from '@react-email/components'

type ContactFormEmailProps = {
  message: string
  email: string
}

export default function ContactFormEmail({ message, email }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your Portfolio site</Preview>
      <Body style={{ fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ margin: '0 auto', padding: '20px' }}>
          <Section>
            <Heading as="h1">You received the following message from the contact form</Heading>
            <Text style={{ fontSize: '14px', lineHeight: '24px', margin: '16px 0' }}>{message}</Text>
            <Hr style={{ width: '100%', border: 'none', borderTop: '1px solid #eaeaea' }} />
            <Text style={{ fontSize: '14px', lineHeight: '24px', margin: '16px 0' }}>
              The sender&apos;s email is: <Link href={`mailto:${email}`}>{email}</Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
