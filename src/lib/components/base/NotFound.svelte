<script lang="ts">
  // @ts-nocheck
 
  // svelte core
  import { page } from "$app/stores";
  import { goto } from '$app/navigation';
  // svelte plugins

  // flowbite plugins

  // node modules

  // local
  function navigateToHome() {
    goto('/');
  }
  export let error: string;
</script>
<div class="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center">
    <a href="/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve" class="h-44 w-44 inline-block mb-10">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9999 6C9.79077 6 7.99991 7.79086 7.99991 10C7.99991 12.2091 9.79077 14 11.9999 14C14.209 14 15.9999 12.2091 15.9999 10C15.9999 7.79086 14.209 6 11.9999 6ZM17.1115 15.9974C17.8693 16.4854 17.8323 17.5491 17.1422 18.1288C15.7517 19.2966 13.9581 20 12.0001 20C10.0551 20 8.27215 19.3059 6.88556 18.1518C6.18931 17.5723 6.15242 16.5032 6.91351 16.012C7.15044 15.8591 7.40846 15.7251 7.68849 15.6097C8.81516 15.1452 10.2542 15 12 15C13.7546 15 15.2018 15.1359 16.3314 15.5954C16.6136 15.7102 16.8734 15.8441 17.1115 15.9974Z" fill="#323232" />
      </svg>
    </a>
    <p class="text-base font-semibold">
      404
    </p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
      Page {error}
    </h1>
    <p class="mt-6 text-base leading-7">
      Sorry, we could not find the page you were looking for.
    <!-- </p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <button 
        onclick={navigateToHome} 
        class="rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm text-white bg-gray-700 hover:bg-gray-400 focus-visible:outline-gray-400 focus-visible:outline">
        Go To Our Home Page
      </button>
    </div> -->
  </div>
</div>