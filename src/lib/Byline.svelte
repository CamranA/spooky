<script>
    import { Card, Avatar } from 'agnostic-svelte'
    export let imgSource = 'blank'
</script>

<section>
    <Card isBorder="{true}" isRounded="{true}">
      <div class="p16">
        <img style="height:200px;width:200px;border-radius:200px" alt="pic" src="{imgSource}">
        <!--<Avatar imgUrl="https://media.gettyimages.com/photos/christopher-lee-british-actor-with-bloodshot-eyes-and-wearing-pale-picture-id119203148?s=612x612" size="xlarge"></Avatar>-->
      </div>
      <div class="p16 flex-grow-1 flex-shrink-1" style="flex-basis: 50ch;">
        The card comes with minimal
        <span class="quoted">skinning css</span>
        and no padding (the padding you see here is from the demo styles).
        By default Cards have a flex direction of <i>row</i>, so each child
        with a <i>flex</i> rule will get placed as a sort of column
        in the row (until the viewport is shrunk below a size that can support
        the content's flex-basis; under that it will wrap and thus stack).
      </div>
    </Card>
   
  </section>
