<script>
    import Main from '../Main.svelte'
    import Byline from '../Byline.svelte'
    let x = localStorage.getItem('Simulation') || ''
</script>
{#if x.toUpperCase() == 'MATRIX'}    
<Main>
    <span slot="theTitle">It's All A Simulation</span>
    <span slot="theBody"><p>I imagine that right now, you’re feeling a bit like Alice. Hmm? Tumbling down the rabbit hole? … 
        I see it in your eyes. You have the look of a person who accepts what they see because they are expecting to wake up. Ironically, that’s not far from the truth. 
        Do you believe in fate? … I know exactly what you mean. Let me tell you why you’re here. You’re here because you know something. What you know you can’t explain, but you feel it. 
        You’ve felt it your entire life, that there’s something wrong with the world. You don’t know what it is, but it’s there, like a splinter in your mind, driving you mad. 
        It is this feeling that has brought you to me. Do you know what I’m talking about? … Do you want to know what it is?… The Simulation is everywhere. 
        It is all around us. Even now, in this very room. You can see it when you look out your window or when you look at your Phone. You can feel it when you go to work… 
        when you shitpost on the internet… when you pay your taxes. It is the world that has been pulled over your eyes to blind you from the truth. … That you are a slave. 
        Like everyone else you were born into bondage. Into a prison that you cannot taste or see or touch. A prison for your mind. … Unfortunately, no one can be told what the Simulation is. 
        You have to see it for yourself. … This is your last chance. After this there is no turning back. You take the blue pill, the story ends, you wake up in your bed and believe whatever you want to believe. 
        You take the red pill, you stay in Wonderland and I show you how deep the rabbit hole goes. Remember, all I’m offering is the truth, nothing more. … Follow me.</p></span>
    <span slot="theByline"><Byline imgSource={'https://www.openingmonologue.com/wp-content/uploads/2021/06/laurence-fishburne-morpheus-the-matrix.jpg'}>
        <span slot="bylineText">
            Please, just listen. I know why you’re here. I know what you’ve been doing. I know why you hardly sleep. 
            I know why night after night, you sit at your computer. You’re looking for it. I know because I was once looking for the same thing. 
            And when it found me, it told me that I wasn’t really looking for it, I was looking for an answer. 
            It’s the question that drives us. It’s the question that brought you here. You know the question, just as I did. 
            The answer is out there. It’s looking for you. And it will find you, if you want it to.
        </span>
    </Byline>
    </span>
</Main>
{:else}
    <p>Enter the code below, it is contained on the previous page.</p>
    <input bind:value={x} on:change={() => localStorage.setItem('Simulation', x)}>
{/if}