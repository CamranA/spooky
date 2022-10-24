<script>
    import Main from '../Main.svelte'
    import Byline from '../Byline.svelte'
    let x = localStorage.getItem('Aliens') || ''
</script>
{#if x.toUpperCase() == 'REDPILL' || x.toUpperCase() == 'RED PILL'}    
<Main>
    <span slot="theTitle">Aliens</span>
    <span slot="theBody">
        <p>I was driving home for the weekend from partying in Vegas. It takes me about two hours to get home, and I left Vegas around 10 pm. At exactly 10:53, 
        I am on a rural stretch of the two-lane highway I take home when I notice what appeared to be flashing lights behind me. I thought, "Great, I'm getting pulled over," 
        so I turned onto the next country road about a quarter-mile from where I noticed the lights. As the car came to a stop and I started to open my glove box to get out my registration and proof of insurance, 
        the lights suddenly disappeared, and no car drove past.

        Now here is where the story takes a turn for the weird, and I am sure you guys will think I'm just making it all up because it really does seem like something straight out of a typical UFO movie or story.
        
        The electronics in my car started to go haywire. The radio was randomly changing stations while the volume kept going up and down while the dome light and headlights start to flicker, turn off, and back on. 
        This was at 10:56 pm. I start thinking to myself that my battery must be failing or else I have a short somewhere in the electric system of my car. 
        I lean down to pop the hood, so I can take a look at the battery - and that is the last thing I remember doing.
        
        The next thing I know, I open my eyes and see nothing but the night sky full of bright stars - it was a cold night, and it seemed like I had never seen stars that bright in my life. 
        I sat up and looked around, and I saw the signs, Area 51.
    
        Not only is Area 51 real, but its run by the aliens. This must be why they try so hard to protect it. I searched the area and found Majorie's plans for the Jewish Space Lasers, so thats how she knew about it... She created them. I then picked up a pamphlet from a nearby table about their home base, the Moon. 
        This entire time they have been hiding on the Moon in plain sight, orchestrating everything from afar. Humans have allegedly travelled to the moon, but if the aliens are up there... Does that mean the moon landing was FAKE?
        Only one way to find out...</p>
    </span>
    <span slot="theByline"><Byline imgSource={'https://c.files.bbci.co.uk/8890/production/_95806943_gettyimages-590147780.jpg'}>
        <span slot="bylineText">
            I saw some really anomalous stuff one night out in the desert, zipping across the stars, horizon to horizon, zig zagging. That really blew my mind because no satellites move that way. But, I can’t tell you what it was. I think like most people, the stuff that I’ve seen is a lot of stuff on the internet where I bet some of it really is true, but you really don’t know which pieces.
        </span>
    </Byline>
    </span>
</Main>
{:else}
    <p>Enter the code below, it is contained on the previous page.</p>
    <input bind:value={x} on:change={() => localStorage.setItem('Aliens', x)}>
{/if}