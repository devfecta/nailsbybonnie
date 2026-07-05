import { NextResponse } from "next/server";
//import { BusinessDetails } from "../../types/google-business";

export async function GET(request: Request) {

	

	// Get the placeId from the frontend request URL query parameters
	// const { searchParams } = new URL(request.url);
	// const placeId = searchParams.get('placeId');
	const placeId = "ChIJOdlpM-boQmoR38zz4JTXrzU";

	if (!placeId) {
		return NextResponse.json({ error: 'Missing placeId parameter' }, { status: 400 });
	}

	// Use your server-side environment variable for safety
	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API || ''; 
	//const apiKey = "AIzaSyAWmMN090CN8LbND8uVhF3SefzwB99u-wQ";
	const googleUrl = `https://places.googleapis.com/v1/places/${placeId}`;

	try {
		// The FieldMask tells Google exactly what data to return so you save on billing costs
		const res = await fetch(googleUrl, {
			method: 'GET',
			headers: new Headers({
				'Content-Type': 'application/json',
				'X-Goog-Api-Key': apiKey,
				'X-Goog-FieldMask': 'postalAddress,nationalPhoneNumber,internationalPhoneNumber,googleMapsUri,regularOpeningHours',
			}),
		});
		const data = await res.json();
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error: 'Failed to fetch from Google' }, { status: 500 });
	}


	
	// const { searchParams } = new URL(request.url);
	// const placeId = searchParams.get("placeId");

	

	// if (!placeId) {
	// 	return NextResponse.json(
	// 		{ error: "Place ID is required" },
	// 		{ status: 400 },
	// 	);
	// }

	// // const apiKey = process.env.GOOGLE_PLACES_API_KEY;

	// const apiKey = "AIzaSyAWmMN090CN8LbND8uVhF3SefzwB99u-wQ";
	
	// const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJOdlpM-boQmoR38zz4JTXrzU&fields=name,formatted_phone_number,website,opening_hours&key=${apiKey}`;

	// try {
	// 	const response = await fetch(url);
	// 	const data = await response.json();
	// 	console.log(data);

	// 	if (data.status !== "OK") {
	// 		return NextResponse.json({ error: data.status }, { status: 400 });
	// 	}

	// 	// Map to your custom type
	// 	const businessData: BusinessDetails = {
	// 		name: data.result.name,
	// 		formatted_address: data.result.formatted_address,
	// 		formatted_phone_number: data.result.formatted_phone_number,
	// 		rating: data.result.rating,
	// 		website: data.result.website,
	// 		opening_hours: data.result.opening_hours,
	// 		geometry: data.result.geometry,
	// 	};

	// 	return NextResponse.json(businessData);
	// } catch (error) {
	// 	return NextResponse.json(
	// 		{ error: "Failed to fetch business data" },
	// 		{ status: 500 },
	// 	);
	// }
}
