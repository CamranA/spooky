<script>
import Main from '../Main.svelte'
let props = {
    title: "birds page",
    mainBody: "this is the birds page",
    byline: "https://media.gettyimages.com/photos/christopher-lee-british-actor-with-bloodshot-eyes-and-wearing-pale-picture-id119203148?s=612x612"
}
</script>

<Main {...props}/>