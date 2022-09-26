<script>
  import 'agnostic-svelte/css/common.min.css'
  import Router from 'svelte-spa-router'
  import Birds from './lib/routes/Birds.svelte'
  import Home from './lib/routes/Home.svelte';
  import nine11 from './lib/routes/nine11.svelte'
  import QShaman from './lib/routes/QSham.svelte'
</script>
<ul>
  <li style="display:inline;"><a href="/">Home</a></li>
  <li style="display:inline;"><a href="./#/Birds">Birds</a></li>
  <li style="display:inline;"><a href="./#/nine11">9/11</a></li>
  <li style="display:inline;"><a href="./#/QShaman">QShaman</a></li>
</ul>
<Router routes={{
  '/': Home,
  '/Birds': Birds,
  '/nine11': nine11,
  '/Qshaman': QShaman,
}}/>

