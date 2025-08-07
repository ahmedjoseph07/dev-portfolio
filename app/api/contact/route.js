import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
console.log(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        const sendResponse = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "ahmedjoseph11@gmail.com",
            subject: `New message from ${name}`,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        });

        console.log("Email sent response:", sendResponse);

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
