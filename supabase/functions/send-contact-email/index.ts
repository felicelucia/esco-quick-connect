import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactRequest = await req.json();

    console.log("Received contact form submission:", { name, email, phone });

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send email to GEA Energy
    const emailResponse = await resend.emails.send({
      from: "GEA Energy Website <onboarding@resend.dev>",
      to: ["info@geaenergy.it"],
      subject: `Nuova richiesta di consulenza da ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a365d; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
            Nuova Richiesta di Consulenza
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Telefono:</strong> ${phone || "Non specificato"}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #1a365d; margin-top: 0;">Messaggio:</h3>
            <p style="line-height: 1.6; color: #334155;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <p style="color: #64748b; font-size: 12px; margin-top: 20px; text-align: center;">
            Questa email è stata inviata automaticamente dal sito web GEA Energy
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to the user
    await resend.emails.send({
      from: "GEA Energy <onboarding@resend.dev>",
      to: [email],
      subject: "Abbiamo ricevuto la tua richiesta - GEA Energy",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a365d; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
            Grazie per averci contattato!
          </h2>
          
          <p style="line-height: 1.6; color: #334155;">
            Ciao ${name},
          </p>
          
          <p style="line-height: 1.6; color: #334155;">
            Abbiamo ricevuto la tua richiesta di consulenza e ti risponderemo entro 24 ore lavorative.
          </p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1a365d; margin-top: 0;">Riepilogo della tua richiesta:</h3>
            <p style="line-height: 1.6; color: #334155;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <p style="line-height: 1.6; color: #334155;">
            A presto,<br>
            <strong>Il Team GEA Energy</strong>
          </p>
          
          <p style="color: #64748b; font-size: 12px; margin-top: 20px; text-align: center;">
            GEA Energy Srl - ESCO Certificata | Società di Ingegneria
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent to user");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
