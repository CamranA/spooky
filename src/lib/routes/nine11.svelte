<script>
    import Main from '../Main.svelte'
    import Byline from '../Byline.svelte'
    let props = {
        title: "nine eleven",
        mainBody: "",
        byline: ""
    }
    </script>
    
    <Main>
        <span slot="theTitle">nine eleven</span>
        <span slot="theBody">this is the nine eleven</span>
        <span slot="theByline"><Byline imgSource={'https://upload.wikimedia.org/wikipedia/commons/d/d4/George-W-Bush.jpeg'}/></span>
    </Main>