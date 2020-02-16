<script>
  import { _ } from 'svelte-i18n';

  import Plate from '../Plate/index.svelte';
  import Input from '../../../../components/Input.svelte';
  import plateStore from '../../../../store/plate';
  import { getId } from '../../../../helpers/getId';
  import NoPlatesFound from '../NoPlatesFound/index.svelte';

  export let loading;
  export let myPlates;
  export let myPlatesSearchText;
  export let allMyPlates;

  const handleSearch = e => {
    if (e.target.value === '') {
      myPlates.set(allMyPlates);
    } else {
      plateStore.searchMyPlates(e.target.value, $myPlates);
    }
  };
</script>

<div class="shadow bg-white rounded-lg p-4">
  <h3 class="text-xl font-bold text-gray-700 mb-4 uppercase">
    {$_('dashboard.myPlates')}
  </h3>
  <Input
    class="mb-4"
    type="text"
    name="search"
    placeholder={$_('dashboard.searchPlates')}
    value={myPlatesSearchText}
    on:keyup={handleSearch} />
  {#if loading}
    {#each [1, 2, 3, 4] as step}
      <div class="p-3 mb-4 h-8 bg-gray-200 rounded" />
    {/each}
  {/if}
  {#if !$myPlates && !loading}
    <div class="mt-4">
      <NoPlatesFound notFoundText={$_('dashboard.myPlatesNotFound')} />
    </div>
  {/if}
  {#if $myPlates && !loading}
    {#each $myPlates as plate}
      <Plate
        title={plate.object.data.object.title}
        status={plate.object.data.object.status}
        id={getId(plate.object)} />
    {/each}
  {/if}
</div>
