import { db } from '@/lib/database';
import { NextResponse } from 'next/server';
import { handleError } from '../../../../helper/route-helper';

export async function GET(_, { params }) {
  try {
    const { id } = await params;
    const categoryId = parseInt(id);
    const category = await db.getCategoryById(categoryId);

    if (!category) {
      return handleError('Category not found', 404);
    }

    return NextResponse.json({ success: true, data: category });
  } catch (error) {
    return handleError(error);
  }
}
