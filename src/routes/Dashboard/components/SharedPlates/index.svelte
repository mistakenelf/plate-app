<script>
  import { _ } from 'svelte-i18n';

  import Plate from '../Plate/index.svelte';
  import { getId } from '../../../../helpers/getId';
  import Loader from '../../../../components/Loader.svelte';
  import Input from '../../../../components/Input.svelte';
  import plateStore from '../../../../store/plate';

  export let loading;
  export let sharedPlates;
  export let sharedPlatesSearchText;
  export let allSharedPlates;

  const handleSearch = e => {
    if (e.target.value === '') {
      sharedPlates.set(allSharedPlates);
    } else {
      plateStore.searchSharedPlates(e.target.value, $sharedPlates);
    }
  };
</script>

<div class="shadow bg-white rounded-lg p-4">
  <h3 class="text-xl font-bold text-gray-700 mb-4 uppercase">Shared with me</h3>
  <Input
    class="mb-4"
    type="text"
    name="search"
    placeholder={$_('dashboard.searchPlates')}
    value={sharedPlatesSearchText}
    on:keyup={handleSearch} />
  {#if loading}
    <Loader />
  {:else}
    {#each $sharedPlates as plate}
      <Plate
        title={plate.data.title}
        status={plate.data.status}
        canShare={false}
        canDelete={false}
        id={getId(plate)} />
    {/each}
  {/if}
</div>
