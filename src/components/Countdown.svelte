<svelte:options tag="wc-countdown"/>

<script>
    import {onMount} from 'svelte';

    export let timestamp = new Date().getTime();

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    function startCounter() {
        let runningCounter = setInterval(() => {
            var countDownDate = new Date(parseInt(timestamp)).getTime();
            let timeDistance = countDownDate - new Date().getTime();
            if (timeDistance < 0) {
                clearInterval(runningCounter);
                return;
            }

            days = formatCounter(Math.floor(timeDistance / (1000 * 60 * 60 * 24)));
            hours = formatCounter(Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            minutes = formatCounter(Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60)));
            seconds = formatCounter(Math.floor((timeDistance % (1000 * 60)) / 1000));
        }, 1000);
    }

    function formatCounter(number) {
        return number.toString().padStart(2, '0');
    }

    onMount(() => startCounter());
</script>

<span>{days}</span> :
<span>{hours}</span> :
<span>{minutes}</span> :
<span>{seconds}</span>