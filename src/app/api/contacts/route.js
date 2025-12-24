import { db } from '@/lib/database';
import { NextResponse } from 'next/server';
import { handleError } from '../response-helper';

export async function POST(request) {
  try {
    const body = await request.json();

    // Validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    const newContact = await db.addContact(body);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
        data: newContact,
      },
      { status: 201 }
    );
  } catch (error) {
    handleError(error);
  }
}
