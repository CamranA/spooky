<script>
    import Main from '../Main.svelte'
    import Byline from '../Byline.svelte'
    let x = localStorage.getItem('Moon') || ''
</script>
{#if x.toUpperCase() == 'FAKE'}    
<Main>
    <span slot="theTitle">The Moon</span>
    <span slot="theBody">
        <p>It has been my experience that the vast majority of the people who truly believe in the Moon landings know virtually nothing about the alleged missions. 
            And when confronted with some of the more implausible aspects of those alleged missions, the most frequently offered argument is the one that every ‘conspiracy theorist’ 
            has heard at least a thousand times: “That can’t possibly be true because there is no way that a lie that big could have been covered up all this time … too many people would have known about it”
            But what if your own eyes and your innate (though suppressed) ability to think critically and independently tell you that what all the institutions of the State insist is true is actually a lie? 
            What do you do then? Do you trust in your own cognitive abilities, or do you blindly follow authority and pretend as though everything can be explained away? If your worldview will not allow you 
            to believe what you can see with your own eyes, then the problem, it would appear, is with your worldview. So do you change that worldview, or do you live in denial?
        
        The aliens are up here, and controlling it all from afar. You have figured it out, a true conspiracy theorist.
        
        </p>
        <strong style="font-size:2em;">When you walk in golden halls
        you get to keep the gold that falls</strong><br>
        <strong style="font-size:2em;">069</strong>
    </span>
    <span slot="theByline"><Byline imgSource={'https://cdn.mos.cms.futurecdn.net/464QUPXKVDdmNDACrDzxtj.jpg'}>
        <span slot="bylineText">
            There is something haunting in the light of the Moon. It has all the dispassionateness of a disembodied soul and something of its inconceivable mystery.
        </span>
    </Byline>
    </span>
</Main>
{:else}
    <p>Enter the code below, it is contained on the previous page.</p>
    <input bind:value={x} on:change={() => localStorage.setItem('Moon', x)}>
{/if}