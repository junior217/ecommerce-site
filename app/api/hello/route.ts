export async function GET() {
  return new Response(JSON.stringify({message: "Hello, Next.js! route handler here!"}), {
    status: 200,
  });
}

export async function POST() {
  return new Response(JSON.stringify({message: "Thank you for posting to this Handler!"}), {
    status: 200,
  })

}
