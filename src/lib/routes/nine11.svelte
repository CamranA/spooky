<script>
    import Main from '../Main.svelte'
    import Byline from '../Byline.svelte'
</script>
    
<Main>
    <span slot="theTitle">nine eleven</span>
    <span slot="theBody">this is the nine eleven</span>
    <span slot="theByline"><Byline imgSource={'https://upload.wikimedia.org/wikipedia/commons/d/d4/George-W-Bush.jpeg'}>
        <span slot="bylineText">Dont let George W Bush Choking on a pretzel distract you from the fact that the Undertake threw Mankind off hell in a cell and plummeted 16 feet into an announcers table
        </span>
    </Byline>
    </span>
</Main>