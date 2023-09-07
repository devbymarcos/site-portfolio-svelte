export async function load({ fetch }) {
	const res = await fetch(`/api/projects`);
	const item = await res.json();
	return item;
}
