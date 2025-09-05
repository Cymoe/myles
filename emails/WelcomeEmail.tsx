import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface WelcomeEmailProps {
  userEmail?: string;
  leadMagnet?: string;
}

export const WelcomeEmail = ({
  userEmail = 'subscriber@example.com',
  leadMagnet = 'resources',
}: WelcomeEmailProps) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://myleskameron.com';
  
  return (
    <Html>
      <Head />
      <Preview>Your boring business resources are ready 🎯</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img
              src={`${baseUrl}/images/myles_hero.JPG`}
              width="60"
              height="60"
              alt="Myles Kameron"
              style={profileImage}
            />
            
            <Heading style={heading}>
              Your resources are ready
            </Heading>
            
            <Text style={paragraph}>
              Hey there,
            </Text>
            
            <Text style={paragraph}>
              Thanks for joining. Your {leadMagnet} is ready:
            </Text>

            <Section style={buttonContainer}>
              <Link
                style={button}
                href={`${baseUrl}/welcome`}
              >
                Access Your Resources →
              </Link>
            </Section>

            <Text style={paragraph}>
              Inside you'll find:
            </Text>

            <Text style={list}>
              • Revenue Tracking Spreadsheet<br />
              • 50 Boring Businesses That Print Money<br />
              • The Business Acquisition Checklist
            </Text>


            <Text style={signature}>
              – Myles
            </Text>

            <Hr style={hr} />

            <Text style={footer}>
              P.S. Hit reply anytime. I read everything.
            </Text>

            <Text style={footer}>
              <Link href={`${baseUrl}/unsubscribe`} style={link}>
                Unsubscribe
              </Link>
              {' • '}
              <Link href={`${baseUrl}`} style={link}>
                myleskameron.com
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const profileImage = {
  margin: '0 auto',
  marginBottom: '16px',
  borderRadius: '50%',
  display: 'block',
};

const heading = {
  fontSize: '28px',
  fontWeight: '700',
  lineHeight: '1.3',
  textAlign: 'center' as const,
  color: '#333',
  marginBottom: '24px',
};

const paragraph = {
  color: '#404040',
  fontSize: '16px',
  lineHeight: '26px',
  marginBottom: '16px',
};

const list = {
  color: '#404040',
  fontSize: '16px',
  lineHeight: '26px',
  marginBottom: '24px',
  marginLeft: '16px',
};

const buttonContainer = {
  textAlign: 'center' as const,
  marginTop: '24px',
  marginBottom: '24px',
};

const button = {
  backgroundColor: '#786254',
  borderRadius: '4px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 32px',
  fontWeight: '600',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '32px 0',
};

const signature = {
  color: '#404040',
  fontSize: '16px',
  lineHeight: '26px',
  marginTop: '32px',
  marginBottom: '8px',
};

const footer = {
  color: '#8898aa',
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'center' as const,
  marginBottom: '8px',
};

const link = {
  color: '#786254',
  textDecoration: 'underline',
};

const Hr = ({ style }: { style?: React.CSSProperties }) => (
  <hr
    style={{
      ...style,
      border: 'none',
      borderTop: '1px solid #e6ebf1',
    }}
  />
);

export default WelcomeEmail;