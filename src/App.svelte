<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import 'agnostic-svelte/css/common.min.css'
  import Byline from './lib/Byline.svelte';
</script>


<main>
  <div class="container">
    <header>
      <h1 class="myTitle">This will be our haunted game</h1>
    </header>

    <div class="mainStuff">
      <p>Hexagon asymmetrical cloud bread art party truffaut. Ugh cliche tilde thundercats butcher meditation prism bicycle
      rights succulents pok pok hammock man braid. Williamsburg cloud bread blue bottle sriracha artisan, dreamcatcher
      shoreditch woke. Vape Brooklyn YOLO banh mi truffaut.</p>

      <p>Glossier fit master cleanse kogi. Jean shorts cloud bread aesthetic tousled tote bag chambray small batch
      church-key. Retro tote bag kale chips street art waistcoat woke. Farm-to-table blog before they sold out fanny
      pack. Truffaut +1 neutra meh, artisan heirloom jean shorts humblebrag listicle hella.</p>

      <p>Kitsch wolf kinfolk hoodie sustainable, single-origin coffee palo santo raclette DIY jean shorts adaptogen
      leggings. Squid sartorial pork belly asymmetrical four dollar toast aesthetic, knausgaard thundercats food truck
      tbh lo-fi. Fam forage artisan, four loko kale chips live-edge hashtag try-hard craft beer offal chartreuse lyft
      keytar prism. Bruh iPhone tbh selfies, letterpress banjo meditation cold-pressed stumptown poutine humblebrag
      mukbang messenger bag semiotics.</p>

      <p>
        Shoreditch sriracha whatever, meh hammock retro fit slow-carb kombucha craft beer blog tumeric twee pug. Deep v
        pug gatekeep put a bird on it organic Brooklyn. Meh hella coloring book tumeric cloud bread. Single-origin coffee
        shoreditch sriracha pickled, succulents copper mug venmo taxidermy before they sold out vape street art bespoke
        iPhone selfies. Hoodie pok pok whatever banh mi roof party, poke plaid quinoa single-origin coffee stumptown
        edison bulb offal fingerstache lumbersexual.
      </p>

      <p>Kinfolk enamel pin green juice, lyft hell of gochujang kogi kombucha mustache offal butcher fixie chia shaman sus.
      Forage cred cronut stumptown. Unicorn banh mi Brooklyn hexagon fanny pack try-hard. Fashion axe meditation ascot
      next level vinyl biodiesel. Meggings cronut Brooklyn schlitz locavore. Freegan knausgaard same, woke VHS sriracha
      hexagon marfa kombucha swag godard kale chips. Jean shorts chia 3 wolf moon readymade hot chicken raclette twee,
      sriracha cornhole vape four loko cred tonx fashion axe marfa.</p>
    </div>

    <footer>
      <Byline />
    </footer>
  </div>

  
  <div class="card">
    <Counter />
  </div>

</main>

<style>
  .myTitle {
    background-color: #eb6123;

  }

  .container {
    display: grid;
    grid-template-areas:
      "header"
      "main"
      "footer";
    grid-template-rows: .8fr 3fr .8fr;
    gap: var(--fluid-12);
  }

  header {
    grid-area: header;
  }

  .mainStuff {
    grid-area: main;
  }
  .mainStuff p {
    margin-bottom:1.5em;
    text-align: left;
  }
  footer {
    grid-area: footer;
  }
</style>