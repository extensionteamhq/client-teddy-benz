// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import { PUBLIC_API_KEY } from '$env/static/public'

export async function load() {
  // console.log(PUBLIC_API_KEY) // public 📣
}