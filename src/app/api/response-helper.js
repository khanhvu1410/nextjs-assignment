import { NextResponse } from 'next/server';

export const handleError = (
  errorMessage = 'Internal server error',
  status = 500
) => {
  return NextResponse.json(
    {
      success: false,
      error: errorMessage,
      timestamp: new Date().toISOString(),
    },
    { status }
  );
};
