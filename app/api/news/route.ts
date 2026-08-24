export async function GET() {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=${process.env.NEXT_PUBLIC_NEWSAPI_KEY}`);
    const data = await response.json();
    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}