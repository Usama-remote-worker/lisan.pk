import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      preferredResponseMethod = 'Email',
      sourceLanguage,
      targetLanguage,
      documentType,
      intendedUse,
      certificationNeeded,
      documentCount,
      pageCount,
      deadline,
      requestDetails,
      consent,
      marketingConsent
    } = body;

    // Required fields validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please complete this field.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Please confirm that you are authorised to share the document and accept the privacy notice.'
        },
        { status: 400 }
      );
    }

    // Generate unique Request Reference ID
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const referenceId = `LPK-2026-${randomSuffix}`;

    // Server-side audit log without exposing PII in public logs
    const timestamp = new Date().toISOString();
    console.log(
      `[LISAN Quote Request] Ref: ${referenceId} | Time: ${timestamp} | Lang: ${sourceLanguage || 'N/A'} -> ${targetLanguage || 'N/A'} | Doc: ${documentType || 'N/A'} | Preferred: ${preferredResponseMethod}`
    );

    return NextResponse.json({
      success: true,
      referenceId,
      message: 'Your translation request has been received'
    });
  } catch (error) {
    console.error('[LISAN Quote API Error]', error);
    return NextResponse.json(
      {
        success: false,
        error: "We couldn't confirm receipt of your request. Please try again or contact us directly."
      },
      { status: 500 }
    );
  }
}
