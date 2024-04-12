<script lang="ts">
    // @ts-nocheck
    // svelte core

    // svelte plugins

    import { form, field } from 'svelte-forms';
    import { required, email as validNewsEmail } from 'svelte-forms/validators';

    // other plugins and modules

    // local
    import ErrorMessage from '$lib/utils/ErrorMessage.svelte';

    let isNewsForm: boolean = false;
    let isNews: boolean = false;
    let newsHoneyPot: string = '';

    const newsEmail = field('newsEmail', '', [required(), validNewsEmail()]);
    const myNews = form(newsEmail);

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();

        try {
            isNews = true;
            await myNews.validate();
            const valid = $myNews.valid;

            if (valid) {
                if (newsHoneyPot) return console.log('HoneyPot was populated.');
                const body = { ...$myNews.summary };
                // sends to brandedsites@extension.team
                const req = await fetch('https://formspree.io/f/xjvnpana', {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (req.ok) {
                    isNewsForm = true;
                    isNews = false;
                    myNews.reset();
                } else {
                    console.log('Failed to submit form:');
                }
            }
        } catch (error) {
            console.log('Something Wrong');
            console.log(error);
        }
    };
</script>

<section id="newsletter" class="py-8 lg:py-16 my-10 text-center relative text-neutral-100 dark:text-neutral-900">
    <div class="w-full max-w-screen-2xl mx-auto pt-4 px-8">
        <div class="gap-16 justify-between items-center p-6 rounded-lg bg-neutral-900 dark:bg-neutral-100 lg:flex lg:gap-24 md:p-12">
            <div class="w-full">
                <h2 class="mb-4 font-extrabold tracking-tight leading-none text-3xl md:text-4xl xl:text-5xl">Sign Up For My Newsletter</h2>
                <p class="sm:text-xl"
                    >Stay up to date with my progress, get announcements and exclusive discounts&mdash;feel free to sign up with your email.</p>
            </div>
            {#if !isNewsForm}
                <div class="mt-6 w-full lg:mt-0">
                    <form action="/" method="POST" on:submit={handleFormSubmit}>
                        <div class="items-center mb-0 sm:flex sm:space-y-0">
                            <div class="relative w-full">
                                <label for="newsEmail" class="hidden mb-2 text-sm font-medium">Email address</label>
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg class="w-5 h-5 text-neutral-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                        ><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path
                                            d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path
                                        ></svg>
                                </div>
                                <input
                                    type="email"
                                    name="newsEmail"
                                    id="newsEmail"
                                    autocomplete="email"
                                    required
                                    class="p-3 pl-10 sm:!rounded-none sm:!rounded-l-lg text-neutral-900 dark:text-neutral-100 !bg-neutral-100 dark:!bg-neutral-900 placeholder:text-neutral-500 placeholder:dark:text-neutral-500"
                                    placeholder="Enter your email"
                                    bind:value={$newsEmail.value} />
                            </div>
                            <div>
                                <button type="submit" class="sm:rounded-none sm:rounded-r-lg !bg-neutral-600 dark:!bg-neutral-300 !m-0">Subscribe</button>
                            </div>
                        </div>
                        <div class="leading-7 relative text-left">
                            {#if $myNews.hasError('newsEmail.required')}
                                <ErrorMessage
                                    message="Email is required!"
                                    containerClassName="text-left inline-block"
                                    textClassName="leading-6 text-neutral-100 dark:text-neutral-900 p-0 m-0 inline-block" />
                            {/if}
                            {#if !$myNews.hasError('newsEmail.required') && !$newsEmail.valid}
                                <ErrorMessage
                                    message="Email is invalid (e.g., handle@domain.com)!"
                                    containerClassName="text-left inline-block"
                                    textClassName="leading-6 text-neutral-100 dark:text-neutral-900 p-0 m-0 inline-block" />
                            {/if}&nbsp;
                        </div>
                        <div class="text-sm text-left"
                            >We care about the protection of your data. <a href="/privacy-policy" class="font-medium hover:underline">Read our Privacy Policy</a
                            >.</div>
                    </form>
                </div>
            {:else}
                <div class="mt-6 w-full lg:mt-0 max-w-screen-md m-auto text-left">
                    <div
                        class="p-5 px-10 leading-8 text-lg rounded-lg ring-1 ring-inset ring-neutral-500 dark:ring-neutral-400 bg-neutral-300 dark:bg-neutral-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="mt-5 w-10 h-10 m-auto text-center">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <p class="mt-4">Yah! You are subscribed. Check your inbox (or spam) for a confirmation link.</p>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</section>
