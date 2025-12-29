import { db } from '@/lib/database';
import { NextResponse } from 'next/server';
import { handleError } from '../../../helper/route-helper';
import { CONTACTS_LIMIT } from '@/constant/pagination-limit';
import { verifyToken } from '@/lib/auth';

export async function GET(request) {
  try {
    await verifyToken(request);

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || `${CONTACTS_LIMIT}`);

    const result = await db.getContacts({ page, limit });

    return NextResponse.json({
      success: true,
      ...result,
    });
  } catch (error) {
    return handleError(error);
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newContact = await db.addContact(body);

    return NextResponse.json(
      {
        success: true,
        data: newContact,
      },
      { status: 201 }
    );
  } catch (error) {
    return handleError(error);
  }
}
