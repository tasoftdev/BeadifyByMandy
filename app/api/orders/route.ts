import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  console.log("ORDER API WAS CALLED");

  try {
    const order = await request.json();

    console.log("Received order data:", order);

    if (
      !order?.reference ||
      !order?.customer?.name ||
      !order?.customer?.email ||
      !order?.customer?.phone ||
      !order?.delivery?.address ||
      !order?.delivery?.city ||
      !order?.delivery?.state ||
      !Array.isArray(order?.products) ||
      order.products.length === 0 ||
      typeof order?.total !== "number"
    ) {
      console.error("Invalid order information:", order);

      return NextResponse.json(
        {
          success: false,
          error: "Invalid order information.",
        },
        {
          status: 400,
        }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    if (!process.env.ORDER_EMAIL) {
      console.error("ORDER_EMAIL is missing.");

      return NextResponse.json(
        {
          success: false,
          error: "Order email is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const orderItems = order.products
      .map(
        (item: {
          name: string;
          quantity: number;
          price: number;
        }) => `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              ${item.name}
            </td>

            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              ${item.quantity}
            </td>

            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              ₦${Number(item.price).toLocaleString()}
            </td>

            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              ₦${(
                Number(item.price) * Number(item.quantity)
              ).toLocaleString()}
            </td>
          </tr>
        `
      )
      .join("");

    console.log("Sending order email...");

    const emailResult = await resend.emails.send({
      from:
        process.env.EMAIL_FROM ||
        "BeadifyByMandy <onboarding@resend.dev>",

      to: [process.env.ORDER_EMAIL],

      subject: `New BeadifyByMandy Order ${order.reference}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #2B2527;
          "
        >

          <h1 style="color: #C96B8A;">
            New Product Order
          </h1>

          <p>
            A new order has been placed on BeadifyByMandy.
          </p>

          <h2>Order Information</h2>

          <p>
            <strong>Order Reference:</strong>
            ${order.reference}
          </p>

          <h2>Customer Information</h2>

          <p>
            <strong>Name:</strong>
            ${order.customer.name}
          </p>

          <p>
            <strong>Email:</strong>
            ${order.customer.email}
          </p>

          <p>
            <strong>Phone:</strong>
            ${order.customer.phone}
          </p>

          <h2>Delivery Information</h2>

          <p>
            <strong>Address:</strong>
            ${order.delivery.address}
          </p>

          <p>
            <strong>City:</strong>
            ${order.delivery.city}
          </p>

          <p>
            <strong>State:</strong>
            ${order.delivery.state}
          </p>

          ${
            order.delivery.instructions
              ? `
                <p>
                  <strong>Delivery Instructions:</strong>
                  ${order.delivery.instructions}
                </p>
              `
              : ""
          }

          <h2>Order Items</h2>

          <table
            style="
              width: 100%;
              border-collapse: collapse;
              margin-top: 15px;
            "
          >
            <thead>
              <tr>
                <th style="text-align: left; padding: 10px;">
                  Product
                </th>

                <th style="text-align: left; padding: 10px;">
                  Quantity
                </th>

                <th style="text-align: left; padding: 10px;">
                  Unit Price
                </th>

                <th style="text-align: left; padding: 10px;">
                  Total
                </th>
              </tr>
            </thead>

            <tbody>
              ${orderItems}
            </tbody>
          </table>

          <div style="margin-top: 25px;">

            <p>
              <strong>Subtotal:</strong>
              ₦${Number(order.subtotal).toLocaleString()}
            </p>

            <p>
              <strong>Delivery Fee:</strong>
              ₦${Number(order.deliveryFee).toLocaleString()}
            </p>

            <p style="font-size: 20px;">
              <strong>Total:</strong>
              ₦${Number(order.total).toLocaleString()}
            </p>

          </div>

          <hr />

          <p>
            This order was submitted through the
            BeadifyByMandy website.
          </p>

        </div>
      `,
    });

    console.log("Resend response:", emailResult);

    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);

      return NextResponse.json(
        {
          success: false,
          error: "Unable to send order email.",
          details: emailResult.error.message || "Resend failed.",
        },
        {
          status: 500,
        }
      );
    }

    console.log("ORDER EMAIL SENT SUCCESSFULLY");
    console.log("ORDER API SUCCESS");

    return NextResponse.json(
      {
        success: true,
        message: "Order submitted successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("ORDER API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while submitting the order.",
      },
      {
        status: 500,
      }
    );
  }
}

