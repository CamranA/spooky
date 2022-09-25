<script>
  import 'agnostic-svelte/css/common.min.css'
  import Router from 'svelte-spa-router'
  import Birds from './lib/routes/Birds.svelte'
  import Home from './lib/routes/Home.svelte';
  import nine11 from './lib/routes/nine11.svelte'
</script>

<Router routes={{
  '/': Home,
  '/Birds': Birds,
  '/nine11': nine11
}}/>

