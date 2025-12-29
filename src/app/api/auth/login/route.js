import { NextResponse } from 'next/server';
import { handleError } from '../../../../helper/route-helper';
import { createSession } from '@/lib/session';
import { login } from '@/lib/auth';

export async function POST(request) {
  try {
    const body = await request.json();
    const user = await login(body);

    await createSession({ id: user.id, role: user.role });

    return NextResponse.json({
      message: 'Login successfully',
      success: true,
    });
  } catch (error) {
    return handleError(error);
  }
}
