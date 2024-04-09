import { redirect, type Handle } from "@sveltejs/kit";

const redirects: any = {
  "/schedule": "https://calendly.com/",
};

export const handle: Handle = async ({ event, resolve }) => {
  if (redirects[event.url.pathname])
    throw redirect(301, redirects[event.url.pathname]);
  return await resolve(event);
};
