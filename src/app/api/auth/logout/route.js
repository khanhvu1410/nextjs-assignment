import { handleError } from '@/helper/route-helper';
import { deleteSession } from '@/lib/session';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    await deleteSession();
    return NextResponse.json({
      message: 'Logout successfully',
      success: true,
    });
  } catch (error) {
    handleError(error);
  }
}
