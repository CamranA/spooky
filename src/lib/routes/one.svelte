<script>
    import Main from '../Main.svelte'
    import Byline from '../Byline.svelte'
    let x = localStorage.getItem('Start') || ''
    function resetLocalStor() {
        localStorage.clear()
        location.reload()
    }
</script>
{#if x.toUpperCase() == 'START'}
<button on:click|once={resetLocalStor}>GDPR Compliance Button</button>
<Main>
    <span slot="theTitle">Aliens</span>
    <span slot="theBody">
        <p>In the cold, unforgiving depths of space, the SS Celestial Voyager navigated through the cosmos, blissfully
            unaware of the impending danger. The ship was on a critical mission to study a mysterious asteroid cluster
            near the outer reaches of the galaxy. On board, a team of scientists and engineers were going about their
            work, meticulously examining data and conducting experiments.

            Little did they know that they were being watched by a ruthless and power-hungry alien species called the
            Xyronians. These extraterrestrial conquerors had been scouring the universe for advanced technology and
            resources to fuel their empire. Upon discovering the Celestial Voyager, they saw it as a prime opportunity
            to seize advanced Earth technology and expand their dominion.

            4 sleek Xyronian scout ships silently approached the Voyager, each carrying a team of elite Xyronian
            warriors. Using advanced cloaking technology, the scout ships evaded the human vessel's radar, allowing them
            to dock on the Celestial Voyager without detection.

            As the Xyronian warriors disembarked, they quickly spread throughout the ship, their alien forms unsettling
            to the human crew. The Celestial Voyager's inhabitants, taken by surprise, realized that their peaceful
            mission was now a life-or-death struggle for survival.</p>
    </span>
    <span slot="theByline">
        <Byline imgSource={'https://www.speakeragency.co.uk/media/si2bowhh/astronaut_690x460_image.jpg'}> <span
            slot="bylineText">
            We must protect the ship!
    </span>
    </Byline>
    </span>
</Main>
{:else}
    <p>Each page will have a number for the combination of the weapons safe, they are in order (first page is first digit, second is second digit, etc.), when you are ready to begin type "start" in the box below.</p>
    <input bind:value={x} on:change={() => localStorage.setItem('Start', x)}>
{/if}