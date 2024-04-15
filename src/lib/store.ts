import { writable } from 'svelte/store';


const isScroll = writable<boolean>(false);

export {
    isScroll
}