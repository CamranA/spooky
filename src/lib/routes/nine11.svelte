<script>
    import Main from '../Main.svelte'
    import Byline from '../Byline.svelte'
    let x = ''
</script>
{#if x.toUpperCase() == 'INSIDEJOB' || x.toUpperCase() == 'INSIDE JOB'}    
<Main>
    <span slot="theTitle">Nine Eleven</span>
    <span slot="theBody"><p>The towers collapsed like a building that was being demolished. It was preset to blow. 
        The towers would’ve been able to withhold itself even with the planes and heat. 9/11 was planned by the skull and bones Bush administration. 
        They needed a new Pearl Harbor so this was orchestrated to be such. 9/11 has esoteric meaning. 9 represents the divine beginning and end. 
        11 or 1 & 1 represents a portal or a gate for new beginnings to come through. Once the towers collapsed the two 1+1 be came one 1 the freedom tower. 
        The amount of years the tower lasted has esoteric significance as well. This has been planned for a long time. Groups like the UN, trilateral commission and bilderburg group (and now WEF) 
        use corporate power and favors to manipulate the political process quietly. The people who attend these groups are owned by cults and secret societies that fight each other for the collective control of this 
        planet, having most of the human history and truths at their disposal. Though the Illuminati was created in the 1700’s it also collectively includes these groups that fight each other. 
        They all operate in the shadows creating webs of lies. They know things that the collective does not and if we do know about it, it is generally unpopular and believed to be untrue.</p>
        <p>This all seems too scripted. Like there was some train track that life is attached to and we're just passengers along for the ride.</p>
    <p><strong style="font-size:1.5em;">M</strong>aybe</p>
    <p><strong style="font-size:1.5em;">A</strong>ll of us</p>
    <p><strong style="font-size:1.5em;">T</strong>rapped</p>
    <p><strong style="font-size:1.5em;">R</strong>esting</p>
    <p><strong style="font-size:1.5em;">I</strong>n</p>
    <p><strong style="font-size:1.5em;">X</strong>enial silence</p>
    </span>
    <span slot="theByline"><Byline imgSource={'https://upload.wikimedia.org/wikipedia/commons/d/d4/George-W-Bush.jpeg'}>
        <span slot="bylineText">
            I wish you'd have given me this written question ahead of time so I could plan for it...
            I'm sure something will pop into my head here in the midst of this press conference, 
            with all the pressure of trying to come up with an answer, but it hadn't yet...I don't want to sound like I have made no mistakes. 
            I'm confident I have. I just haven't—you just put me under the spot here, and maybe I'm not as quick on my feet as I should be in coming up with one.
        </span>
    </Byline>
    </span>
</Main>
{:else}
    <p>Enter the code below, it is contained on the previous page.</p>
    <input bind:value={x}>
{/if}