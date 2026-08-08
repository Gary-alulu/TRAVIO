export async function GET() {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=${process.env.NEXT_PUBLIC_NEWSAPI_KEY}`);
    // Add error handling
  } catch (error) {
    // Handle errors
  }
}