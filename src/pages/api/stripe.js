const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body)
    try {
      const params = {
        submit_type: "pay",
        payment_method_types: ["card"],
        line_items: data.map((item) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          }
        }),
        mode: "payment",
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params)

      res.status(200).json(session)
      // res.redirect(303, session.url)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }
}
