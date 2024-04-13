<script lang="ts">
    export let checked: boolean = false;
    export let handleChange: () => void
</script>

<label class="toggle-switch">
    <input type="checkbox" on:change={handleChange} bind:checked />
    <span class="toggle-slider"></span>
</label>

<style>
    .toggle-switch {
        position: relative;
        display: inline-block;
        width: 32px;
        height: 18px;
    }

    .toggle-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .toggle-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #111827;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 34px;
    }

    .toggle-slider:before {
        position: absolute;
        content: '';
        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 1px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
    }

    input:checked + .toggle-slider {
        background-color: #111827;
    }

    input:focus + .toggle-slider {
        background-color: #111827;
    }

    input:checked + .toggle-slider:before {
        -webkit-transform: translateX(13px);
        -ms-transform: translateX(13px);
        transform: translateX(13px);
    }
</style>
