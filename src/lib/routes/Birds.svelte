<script>
    import Main from '../Main.svelte'
    import Byline from '../Byline.svelte';
    let x = ''
</script>


{#if x.toUpperCase() == 'TRUTH'}
<Main>
    <span slot="theTitle">Birds Aren't Real</span>
    <span slot="theBody">
        <p>On October 25th, 1963 Kennedy was shown a prototype of the Turkey X500- a robot that specialized in killing
        larger birds like eagles and falcons. The robot displayed its surveillance skills, as well as its ability to
        find and track escaped criminals. Kennedy was impressed with what he was shown but continued to demand the immediate
        shutdown of the operation; and less than a month later he was dead. Now I’m not saying that these events are
        correlated, but I am. JFK was murdered by the CIA because he was against the mass murder of every feathered
        flying creature in the United States. He was to be the first and only President to stand against the murder of
        the birds; from Lyndon Johnson to Donald Trump, every President we’ve had since has turned a blind eye to the
        atrocities that began in 1959. After Kennedy was killed, the CIA started rigging elections. They would only
        allow candidates who were anti-bird and pro citizen surveillance to win the Presidency.</p>
        
        <p>The government would send individuals to local night clubs and bars- who would then scope out a
        candidate who looked like they could assemble a robot bird, and would tell that person that they were having a
        costume party on acid. It was the 60s and 70s, where acid was more accepted than bottled water. These people
        were then given work overalls (their costume) and a small tab of “acid” which was actually just a piece of
        colored paper. The ‘acid trip’ they expected was actually the bus ride to the entrance of the bunker, where they
        were given a tool box and a pair of headphones that played Pink Floyd nonstop. This combination of assembling a
        robot bird inside a 5 story government fallout bunker led them to believe they were on the most insane trip of
        their life.

        Many of these individuals would later be heard saying,” the craziest trip I had was back in ’76 when I met this
        guy who gave me this crazy tab- from then all I remember is riding through the desert for 45 minutes on the top
        of a sawed off school bus, then walking down a stair case into a huge warehouse that was underground, and having
        some guy tell me to follow some instructions and make some sort of flying robot bird.”

        There you have it, the reason why so many contributed to the construction and why none of them remember.</p>
        <p>Now nearly half a century later, our avian friends are no longer with us, an <em>Inside Job</em> by the US government. To truly understand the depth of this corruption, we must consider all avenues of possible deception. Birds aren't the only thing that fly...</p></span>
    <span slot="theByline">
        <Byline
            imgSource={'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_2.0/c_limit,w_600/f_jpg/fl_lossy,q_auto/v1543339661/181127-weill-birds-arent-real-tease_ipeive'}>
            <span slot="bylineText">The Birds Aren't Real movement has been active since 1976. Once a preventative cause, our initial goal was to stop the genocide of real birds. Unfortunately this was unsuccessful, and the government has since replaced every living bird with robotic replicas. Now our movement's prerogative is to make everyone aware of this fact.
    </span>
    </Byline>
    </span>
</Main>
{:else}
    <p>Enter the code below, it is contained on the previous page.</p>
    <input bind:value={x}>
{/if}