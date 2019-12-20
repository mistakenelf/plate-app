<script>
  import Plate from '../../../components/Plate';
  import { getId } from '../../../helpers/getId';
  export let plates;
</script>

<div class="m-4 mb-24">
  {#each plates as plate, i}
    <Plate
      name={plate.data.name}
      status={plate.data.status}
      id={getId(plate)} />
  {/each}
</div>
