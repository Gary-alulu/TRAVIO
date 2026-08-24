export async function GET() {
  try {
    const response = await fetch('https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=304554', {
      headers: {
        'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com',
        'x-rapidapi-key': process.env.NEXT_PUBLIC_TRIPADVISOR_KEY!
      }
    });
    
    if (!response.ok) throw new Error('Failed to fetch restaurants');
    
    return Response.json({
      success: true,
      data: await response.json()
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}