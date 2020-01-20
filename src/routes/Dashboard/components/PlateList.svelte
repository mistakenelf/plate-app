<script>
  import { getId } from '../../../helpers/getId';

  import Plate from './Plate.svelte';

  export let plates;
</script>

<div class="m-4 mb-24">
  {#each plates as plate, i}
    <Plate
      title={plate.data.title}
      status={plate.data.status}
      id={getId(plate)} />
  {/each}
</div>
