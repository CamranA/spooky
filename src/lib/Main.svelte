<script>
    import 'agnostic-svelte/css/common.min.css'
    import Counter from './Counter.svelte'
    import Byline from './Byline.svelte';
    export let title = 'blank';
    export let mainBody = 'default';
    export let byline = 'default';
  </script>
  
    <main>
      
        <div class="container">
          <header>
            <h1 class="myTitle">{title}</h1>
          </header>
      
          <div class="mainStuff">
            {@html mainBody}
            
          </div>
      
          <footer>
            <Byline imgSource={byline}/>
          </footer>
        </div>
      <Counter count={5}>
      </Counter>
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
          grid-template-rows: .4fr 1fr .4fr;
          gap: var(--fluid-12);
        }
      
        header {
          grid-area: header;
        }
      
        .mainStuff {
          grid-area: main;
        }
        :global(.mainStuff p) {
          margin-bottom:1.5em;
          text-align: left;
        }
        footer {
          grid-area: footer;
        }
      </style>
  