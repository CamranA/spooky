<script>
    import Main from '../Main.svelte'
    let props = {
        title: "nine eleven",
        mainBody: "this is the nine eleven",
        byline: "https://upload.wikimedia.org/wikipedia/commons/d/d4/George-W-Bush.jpeg"
    }
    </script>
    
    <Main {...props}/>