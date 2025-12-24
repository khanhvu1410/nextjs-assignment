import { db } from '@/lib/database';
import { NextResponse } from 'next/server';
import { handleError } from '../response-helper';

export async function GET() {
  try {
    const categories = await db.getCategories();
    return NextResponse.json({ data: categories });
  } catch (error) {
    handleError(error);
  }
}
