<script>
  import Main from '../Main.svelte'
  import Byline from '../Byline.svelte'
  let props = {
    title: "",
    mainBody: ``,
    byline: ""
  }
</script>
<Main>
  <span slot="theTitle">This will be our haunted game</span>
  <span slot="theBody">
    <p>Hexagon asymmetrical cloud bread art party truffaut. Ugh cliche tilde thundercats butcher meditation prism
      bicycle
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

    <p>Kinfolk enamel pin green juice, lyft hell of gochujang kogi kombucha mustache offal butcher fixie chia shaman
      sus.
      Forage cred cronut stumptown. Unicorn banh mi Brooklyn hexagon fanny pack try-hard. Fashion axe meditation ascot
      next level vinyl biodiesel. Meggings cronut Brooklyn schlitz locavore. Freegan knausgaard same, woke VHS sriracha
      hexagon marfa kombucha swag godard kale chips. Jean shorts chia 3 wolf moon readymade hot chicken raclette twee,
      sriracha cornhole vape four loko cred tonx fashion axe marfa.</p>
  </span>
  <span slot="theByline">
    <Byline
      imgSource={'https://npr.brightspotcdn.com/dims4/default/4ac985d/2147483647/strip/true/crop/1000x635+0+0/resize/880x559!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F64%2Fbe%2F0271a6904e03be6b0e72595f364b%2Fcharliedayimdb.jpg'}/>
  </span>     
</Main>