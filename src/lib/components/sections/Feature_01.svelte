<script lang="ts">
    // svelte core
    
    // svelte plugins
    import { getContext } from 'svelte';
    // flowbite plugins

    // node modules
    
    // local
    import { layoutConfig } from '../../data/layout';
    // Access functions from the context

</script>
<section id="feature" class="flex w-full flex-wrap items-center justify-center py-2 lg:py-4 text-center">
    <div class="text-sm basis-full">
        <p class="text-neutral-900/50 dark:text-neutral-100/50 sr-only">Features</p>
    </div>
    <div class="overflow-hidden py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="lg:ml-auto lg:pl-4 lg:pt-4">
              <div class="lg:max-w-lg">
                <h2 class="text-base font-semibold leading-7">What You Get</h2>
                <p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Working With Me</p>
                <p class="mt-6 text-lg leading-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                  <div class="relative px-2">
                    <p class="inline font-semibold">
                        <svg class="inline-block w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                      Marketing.</p>
                      <p class="inline font-normal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                  </div>
                  <div class="relative px-2">
                    <p class="inline font-semibold">
                        <svg class="inline-block w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                        Business Automation.
                    </p>
                    <p class="inline font-normal">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p>
                  </div>
                  <div class="relative px-2">
                    <p class="inline font-semibold">
                        <svg class="inline-block w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
                        Revenue Streams.
                    </p>
                    <p class="inline font-normal">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                  </div>
                  <div class="relative px-2">
                    <p class="inline font-semibold">
                        <svg class="inline-block w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                        Team Oriented.
                    </p>
                    <p class="inline font-normal">Suspendisse nec eleifend tellus, sed vehicula orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </dl>
              </div>
            </div>
            <div class="flex items-center justify-end content-center lg:order-first">
                <img class="max-w-[550px] rounded-lg ring-1 ring-gray-400/10 sm:w-[57rem]" src={layoutConfig.logo.src} alt={layoutConfig.logo.alt} loading="lazy" />
              <!-- <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl ring-1 ring-gray-400/10 sm:w-[57rem]" width="2432" height="1442"> -->
            </div>
          </div>
        </div>
      </div>

</section>