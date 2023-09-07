import { json } from '@sveltejs/kit';

export async function GET() {
	const response = await fetch(
		`https://site-devbymarcos.prismic.io/api/v2/documents/search?ref=ZPkVmRIAAB4Ad6kF`
	);
	const json = await response.json();
	console.log(json);
	return json;
}
