import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }): Promise<Response> => {
	const theme = event.cookies.get('theme') || 'light';
	event.cookies.set('theme', theme, {
		sameSite: true,
		path: '/',
		maxAge: 60 * 60
	});

	event.setHeaders({
		'cache-control': 'max-age=600'
	});

	const response = await resolve(event, {
		transformPageChunk: ({ html }): string => html.replace('data-theme=""', `data-theme="${theme}"`)
	});
	return response;
};
