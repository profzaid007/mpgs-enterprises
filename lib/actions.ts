"use server";

export async function subscribeToWaitlist(formData: FormData) {
  try {
    const email = formData.get("email");

    if (!email || typeof email !== "string") {
      return { success: false, message: "Email is required." };
    }

    // Log submission for now
    console.log("Waitlist submission:", { email });

    return { success: true, message: "Successfully joined the waitlist." };
  } catch (error) {
    console.error("Waitlist error:", error);
    return { success: false, message: "An error occurred. Please try again." };
  }
}

export async function submitContact(formData: FormData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || typeof name !== "string") {
      return { success: false, message: "Name is required." };
    }

    if (!email || typeof email !== "string") {
      return { success: false, message: "Email is required." };
    }

    if (!message || typeof message !== "string") {
      return { success: false, message: "Message is required." };
    }

    // Log submission for now
    console.log("Contact submission:", { name, email, message });

    return { success: true, message: "Message sent successfully." };
  } catch (error) {
    console.error("Contact error:", error);
    return { success: false, message: "An error occurred. Please try again." };
  }
}
