<script>
    import 'agnostic-svelte/css/common.min.css'
    import { blur } from 'svelte/transition'
  </script>
  
    <main in:blur>
      
        <div class="container">
          <header>
            <h1 class="myTitle"><slot name="theTitle"></slot></h1>
            
          </header>
      
          <div class="mainStuff">
            <slot name="theBody"></slot>
          </div>
      
          <footer>
            <slot name="theByline"></slot>
          </footer>
        </div>
      </main>
      
      <style>
        .myTitle {
          background-color: #6CC417;
      
        }
      
        .container {
          display: grid;
          grid-template-areas:
            "header"
            "main"
            "footer";
          grid-template-rows: auto;
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
  