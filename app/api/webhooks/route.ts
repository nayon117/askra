import { createUser, deleteUser, updateUser } from "@/lib/actions/user.action";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const eventType = evt.type;

    if (eventType === "user.created") {
      const {
        id,
        email_addresses,
        image_url,
        username,
        first_name,
        last_name,
      } = evt.data;
      const mongoUser = await createUser({
        clerkId: id,
        name: `${first_name} ${last_name ? `${last_name}` : ""}`,
        email: email_addresses[0]?.email_address || "",
        picture: image_url || "",
        username: username!,
      });
      return NextResponse.json(
        { message: "user created", user: mongoUser },
        { status: 201 },
      );
    } 
     if (eventType === "user.updated") {
      const {
        id,
        email_addresses,
        image_url,
        username,
        first_name,
        last_name,
      } = evt.data;
      const mongoUser = await updateUser({
        clerkId: id,
        updateData: {
          name: `${first_name} ${last_name ? `${last_name}` : ""}`,
          email: email_addresses[0]?.email_address || "",
          picture: image_url || "",
          username: username!,
        },
        path: `/profile/${id}`
      });
      return NextResponse.json(
        { message: "user created", user: mongoUser },
        { status: 201 },
      );
    }

    if(eventType === "user.deleted"){
        const {id} = evt.data;
        const deletedUser = await deleteUser({clerkId: id!});
        return NextResponse.json(
            {message: "user deleted", user: deletedUser}
        )
    }

    console.log(`Received webhook with event type of ${eventType}`);
    console.log("Webhook payload:", evt.data);

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
