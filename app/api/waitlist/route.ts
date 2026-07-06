import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const email = formData.get("email")?.toString().trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    // TODO: Store in PocketBase waitlist collection
    console.log("[Waitlist] New subscriber:", email);

    return NextResponse.json(
      { success: true, message: "You're on the list! We'll be in touch soon." },
      { status: 200 },
    );
  } catch (error) {
    console.error("[Waitlist] Error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
