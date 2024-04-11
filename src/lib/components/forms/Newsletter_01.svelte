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

    const newsEmail = field('newsEmail', '', [required()]); //, validNewsEmail()
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

<section class="relative" id="newsletter">
    <div class="py-16 sm:py-24 lg:py-32">
        {#if !isNewsForm}
            <div
                class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 md:text-center xl:text-left justify-items-center justify-center">
                <div class="w-full m-auto lg:col-span-6 text-3xl font-bold tracking-tight sm:text-4xl">
                    <h2 class="inline sm:block lg:inline xl:block">Want news and updates?</h2>
                    <p class="inline sm:block lg:inline xl:block leading-10">Sign up for our newsletter.</p>
                </div>
                <!-- contact form -->
                <form class="relative w-full lg:max-w-full md:max-w-md m-auto lg:col-span-6 lg:pt-2" method="POST" on:submit={handleFormSubmit}>
                    <!-- {#if $myNews.hasError('newsEmail.required')}
                        <ErrorMessage message="Email is required!" containerClassName="!m-0 my-0 leading-none" />
                    {/if}
                    {#if !$myNews.hasError('newsEmail.required') && !$newsEmail.valid}
                        <ErrorMessage message="Email is invalid!" containerClassName="!m-0 my-0 leading-none" />
                    {/if} -->
                    <div class="flex gap-x-4 items-baseline">
                        <label for="newsEmail" class="sr-only">Email address</label>
                        <input
                            type="email"
                            name="newsEmail"
                            id="newsEmail"
                            autocomplete="email"
                            required
                            class="items-center w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-600 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-neutral-600 dark:focus:ring-neutral-300 sm:text-sm sm:leading-6 bg-neutral-300 dark:bg-neutral-600 !h-10"
                            placeholder="Enter your email"
                            bind:value={$newsEmail.value} />
                        <button type="submit" class="!h-10 items-center">Subscribe</button>
                    </div>

                    <p class="m-0 p-0 text-sm leading-6">We care about your data. Read our <a href="/" class="font-semibold">privacy policy</a>.</p>
                    <div class="hidden sm:col-span-2">
                        <label for="newsHoneyPot">Leave this field blank</label>
                        <input type="text" name="newsHoneyPot" id="newsHoneyPot" autocomplete="off" bind:value={newsHoneyPot} />
                    </div>
                </form>
            </div>
        {:else}
            <!-- success message -->
            <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:px-8 lg:py-48 max-w-md m-auto">
                <div class="p-5 px-10 leading-8 text-lg rounded-lg ring-1 ring-inset ring-neutral-300 dark:ring-neutral-600">
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
</section>
