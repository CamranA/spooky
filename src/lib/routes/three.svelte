<script>
    import Main from '../Main.svelte'
    import Byline from '../Byline.svelte'
</script>

<Main>
    <span slot="theTitle">Aliens</span>
    <span slot="theBody">
        <p>With the Xyronian invaders regaining control of the Celestial Voyager and their fellow warriors, the
            situation seemed dire for the human crew. They were trapped, outnumbered, and outgunned. Captain Maestas
            knew that they needed a game-changing strategy to turn the tide.

            In a desperate bid to regain the upper hand, a brilliant scientist named Dr. Jamie Rodgers recalled a
            long-forgotten legend. He had heard rumors of a hidden compartment on the ship containing advanced prototype
            weapons developed for extreme space emergencies.

            Captain Maestas, with newfound hope, instructed the crew to search for this secret arsenal. They combed
            through the ship's blueprints and managed to locate a concealed compartment hidden in the lower decks.

            The compartment was securely sealed, but with the Xyronians closing in, the humans needed to figure out the combination to the lock. 
            With only moments to spare the crew tried to figure out how to open the box. There is 0 room for error.
        
            Opening it will surely lead to us repelling these invaders!</p>
    </span>
    <span slot="theByline">
        <Byline imgSource={'https://www.safeandvaultstore.com/cdn/shop/products/Big-Daddy-GM-Closed_ab632af1-2f07-4a00-965a-6fa8fa10fa61_600x.jpg?v=1648191379'}> <span
            slot="bylineText">
            Use the combination
    </span>
    </Byline>
    </span>
</Main>