import { NextResponse } from 'next/server';
import crypto from 'crypto';

/**
 * Coinbase webhook handler:
 * - Verifies the signature (security)
 * - Confirms successful payments before reserving anything
 */
export async function POST(req) {
  try {
    // Get the raw body + webhook signature header
    const rawBody = await req.text();
    const signature = req.headers.get('x-cc-webhook-signature');
    const webhookSecret = process.env.COINBASE_WEBHOOK_SECRET;

    // SECURITY CHECK: Verify signature
    const hmac = crypto.createHmac('sha256', webhookSecret);
    const hash = hmac.update(rawBody).digest('hex');

    if (hash !== signature) {
      console.error('Invalid Webhook Signature');
      return new NextResponse('Invalid Signature', { status: 400 });
    }

    // Parse verified event data
    const event = JSON.parse(rawBody).event;
    console.log(`Received Webhook Event: ${event.type}`);

    // If payment is fully confirmed:
    if (event.type === 'charge:confirmed') {
      const customerEmail = event.data.metadata?.customer_email;
      const roomType = event.data.metadata?.room;
      const amountPaid = event.data.pricing.local.amount;

      console.log(`SUCCESS: ${customerEmail} paid $${amountPaid} for ${roomType}`);

      // Insert your booking persistence logic here (DB update, emails, etc.)
    }

    // Respond 200 OK so Coinbase stops retrying
    return new NextResponse('Webhook Received', { status: 200 });
  } catch (error) {
    console.error('Webhook Error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

