import { NextResponse } from 'next/server';

/**
 * Creates a dynamic Coinbase Commerce "Charge" whenever a guest clicks a booking button.
 */
export async function POST(req) {
  try {
    // Extract data sent from the frontend
    const { amount, roomType } = await req.json();

    // Request a unique checkout session from Coinbase Commerce
    const response = await fetch('https://api.commerce.coinbase.com/charges', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CC-Api-Key': process.env.COINBASE_API_KEY,
        'X-CC-Version': '2018-03-22',
      },
      body: JSON.stringify({
        name: `Kenya Chic Inn: ${roomType}`,
        description: `Boutique Stay Reservation for ${roomType}`,
        local_price: {
          amount: amount.toString(),
          currency: 'USD',
        },
        pricing_type: 'fixed_price',
        metadata: {
          room: roomType,
          source: 'Next.js App',
        },
        redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Coinbase Error:', data);
      return NextResponse.json({ error: 'Failed to create crypto charge' }, { status: 500 });
    }

    // Return the Hosted URL for the guest to pay
    return NextResponse.json({ url: data.data.hosted_url });
  } catch (error) {
    console.error('Checkout API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

