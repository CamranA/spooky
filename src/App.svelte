<script>
  import 'agnostic-svelte/css/common.min.css'
  import Router from 'svelte-spa-router'
  import Birds from './lib/routes/Birds.svelte'
  import Home from './lib/routes/Home.svelte';
  import nine11 from './lib/routes/nine11.svelte'
  import QShaman from './lib/routes/QSham.svelte'
  import Aliens from './lib/routes/Aliens.svelte'
  import Moon from './lib/routes/Moon.svelte'
  import Simulation from './lib/routes/Simulation.svelte'
</script>

<Router routes={{
  '/': Home,
  '/Birds': Birds,
  '/nine11': nine11,
  '/Qshaman': QShaman,
  '/Aliens': Aliens,
  '/Moon': Moon,
  '/Simulation': Simulation,
}}/>

