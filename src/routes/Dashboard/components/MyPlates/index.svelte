<script>
  import { _ } from 'svelte-i18n';

  import Plate from '../Plate/index.svelte';
  import { getId } from '../../../../helpers/getId';
  import Loader from '../../../../components/Loader.svelte';
  import Input from '../../../../components/Input.svelte';
  import plateStore from '../../../../store/plate';

  export let loading;
  export let myPlates;
  export let myPlatesSearchText;
  export let allMyPlates;

  const handleSearch = e => {
    if (e.target.value === '') {
      myPlates.set(allMyPlates);
    } else {
      plateStore.search(e.target.value, $myPlates);
    }
  };
</script>

<div class="shadow bg-white rounded-lg p-4">
  <h3 class="text-xl font-bold text-gray-700 mb-4 uppercase">My Plates</h3>
  <Input
    class="mb-4"
    type="text"
    name="search"
    placeholder={$_('dashboard.searchPlates')}
    value={myPlatesSearchText}
    on:keyup={handleSearch} />
  {#if loading}
    <Loader />
  {:else}
    {#each $myPlates as plate}
      <Plate
        title={plate.data.title}
        status={plate.data.status}
        id={getId(plate)} />
    {/each}
  {/if}
</div>
