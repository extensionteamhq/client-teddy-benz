<script lang="ts">
    // @ts-nocheck
    // svelte core

    // svelte plugins
    import { form, field } from 'svelte-forms';
    import { pattern, required, email as validEmail } from 'svelte-forms/validators';
    import { imask } from '@imask/svelte';
    // other plugins and modules

    // local
    import { layoutConfig } from '../../data/layout';
    import ErrorMessage from '$lib/utils/ErrorMessage.svelte';

    let inputPhone: any;
    let isSubmitForm: boolean = false;
    let isSubmit: boolean = false;
    let honeyPot: string = '';
    let showFirstName: string = '';

    // US Phone number RegEx
    let phonePattern = [pattern(/^(\([2-9]{3}\)|[2-9]{3})( ?|-|\.)([0-9]{3})( ?|-|\.)[0-9]{4}$/)];

    const fname = field('fname', '', [required()]);
    const lname = field('lname', '', [required()]);
    const email = field('email', '', [required(), validEmail()]);
    const phone = field('phone', '', [required(), ...phonePattern]);
    const message = field('message', '', [required()]);
    const myForm = form(fname, lname, email, phone, message);

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();

        try {
            isSubmit = true;
            await myForm.validate();
            const valid = $myForm.valid;

            if (valid) {
                if (honeyPot) return console.log('Honeypot was populated.');
                const body = { ...$myForm.summary };

                return
                // sends to brandedsites@extension.team
                const req = await fetch('https://formspree.io/f/xleqonkk', {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (req.ok) {
                    showFirstName = $fname?.value;
                    isSubmitForm = true;
                    isSubmit = false;
                    myForm.reset();
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

<section id="contact" class="py-8 lg:py-16 my-10 text-center relative">
    <div class="flex w-full flex-wrap items-center justify-center lg:px-12 text-left">
        <div class="text-sm basis-full">
            <p class="text-neutral-900/50 dark:text-neutral-100/50 text-center sr-only">Contact</p>
        </div>
        {#if !isSubmitForm}
            <!-- contact form -->
            <div class="mx-auto grid grid-flow-col auto-cols-max">
                <div class="py-10 mx-auto relative">
                    <form action="https://formspree.io/f/mknlbnzq" method="POST" class="relative" on:submit={handleFormSubmit}>
                        <h2 class="mb-4 font-extrabold tracking-tight leading-none text-3xl md:text-4xl xl:text-5xl text-center">Send A Message</h2>
                        <div class="grid grid-cols-1 gap-x-2 gap-y-4">
                            <div>
                                <label for="fname" class="block text-sm font-semibold leading-6">First name</label>
                                <div class="mt-2.5 relative h-14">
                                    <input
                                        type="text"
                                        name="fname"
                                        id="fname"
                                        autocomplete="given-name"
                                        class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-600 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-neutral-600 dark:focus:ring-neutral-300 sm:text-sm sm:leading-6 bg-neutral-300 dark:bg-neutral-600"
                                        required
                                        bind:value={$fname.value} />
                                    {#if $myForm.hasError('fname.required')}
                                        <ErrorMessage message="First Name is required!" />
                                    {/if}
                                </div>
                            </div>
                            <div>
                                <label for="lname" class="block text-sm font-semibold leading-6">Last name</label>
                                <div class="mt-2.5 relative h-14">
                                    <input
                                        type="text"
                                        name="lname"
                                        id="lname"
                                        autocomplete="family-name"
                                        class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-600 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-neutral-600 dark:focus:ring-neutral-300 sm:text-sm sm:leading-6 bg-neutral-300 dark:bg-neutral-600"
                                        required
                                        bind:value={$lname.value} />
                                    {#if $myForm.hasError('lname.required')}
                                        <ErrorMessage message="Last Name is required!" />
                                    {/if}
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="email" class="block text-sm font-semibold leading-6">Email</label>
                                <div class="mt-2.5 relative h-14">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autocomplete="email"
                                        class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-600 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-neutral-600 dark:focus:ring-neutral-300 sm:text-sm sm:leading-6 bg-neutral-300 dark:bg-neutral-600"
                                        required
                                        bind:value={$email.value} />
                                    {#if $myForm.hasError('email.required')}
                                        <ErrorMessage message="Email is required!" />
                                    {/if}
                                    {#if !$myForm.hasError('email.required') && !$email.valid}
                                        <ErrorMessage message="Email is invalid!" />
                                    {/if}
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="phone" class="block text-sm font-semibold leading-6">Phone number</label>
                                <div class="mt-2.5 relative h-14">
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        autocomplete="tel"
                                        class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-600 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-neutral-600 dark:focus:ring-neutral-300 sm:text-sm sm:leading-6 bg-neutral-300 dark:bg-neutral-600"
                                        required
                                        bind:value={$phone.value}
                                        />
                                    {#if $myForm.hasError('phone.required')}
                                        <ErrorMessage message="Phone is required!" />
                                    {/if}
                                    {#if $myForm.hasError('phone.pattern')}
                                        <ErrorMessage message="Phone is must be valid!" />
                                    {/if}
                                    <!-- use:imask={{ mask: '+{1} (000) 000-0000'}} -->
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block text-sm font-semibold leading-6">Message</label>
                                <div class="my-2.5 relative h-14">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="3"
                                        class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-600 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-neutral-600 dark:focus:ring-neutral-300 sm:text-sm sm:leading-6 bg-neutral-300 dark:bg-neutral-600"
                                        required
                                        bind:value={$message.value}></textarea>
                                    {#if $myForm.hasError('message.required')}
                                        <ErrorMessage message="Message is required!" />
                                    {/if}
                                </div>
                            </div>
                            <div class="hidden sm:col-span-2">
                                <label for="honeypot">Leave this field blank</label>
                                <input type="text" name="honeypot" id="honeypot" autocomplete="off" bind:value={honeyPot} />
                            </div>
                        </div>
                        <div class="mt-10 flex justify-end">
                            <button type="submit" class="">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        {:else}
            <!-- thank you message -->
            <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:px-8 lg:py-48">
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
                    <p>Hello {showFirstName}!</p>
                    <p>
                        A crack team of ninja squirrels has just somersaulted through the internet jungle to deliver your message directly to my digital
                        doorstep.
                    </p>
                    <p>They're currently huddled around it, planning their next mission: crafting a reply that's nuts in all the right ways.</p>
                    <p>These furry agents are fast, funny, and fur-ociously loyal to the cause of prompt communication.</p>
                    <p>Expect to hear back from me as soon as they've finished their tiny cups of acorn espresso.</p>
                    <p>In the meantime, may your day be as delightful as a squirrel with an unlimited supply of nuts!</p>
                    <p>
                        Cheers,
                        <br />
                        {layoutConfig.site.fullName}
                    </p>
                </div>
            </div>
        {/if}
    </div>
</section>
