# EmailJS Setup Instructions

Follow these steps to make your contact form functional:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Connect Your Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your Gmail account
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message: {{subject}}

**Body:**
```
You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to "Account" → "General" in EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abcdefghijk`)

## Step 5: Configure Environment Variables
1. Create a `.env` file in your project root
2. Add these variables with your actual values:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Test the Form
1. Restart your development server: `npm run dev`
2. Fill out the contact form on your website
3. Check your email for the message

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Perfect for portfolio websites

## Security Note
The environment variables are safe to use in frontend applications as they only allow sending emails through your pre-configured template.

---

**Need Help?**
- EmailJS Documentation: https://www.emailjs.com/docs/
- Contact form will show proper error messages once configured
