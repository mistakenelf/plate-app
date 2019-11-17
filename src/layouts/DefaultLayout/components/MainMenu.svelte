<script>
  import { fade } from 'svelte/transition';
  import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
  import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons/faTachometerAlt';
  import page from 'page';

  import Icon from '../../../components/Icon';
</script>

<style>
  .container {
    top: 45px;
  }
</style>

<div
  class="container w-40 absolute z-4 bg-white shadow right-0"
  transition:fade={{ duration: 200 }}>
  <div class="flex flex-col p-4">
    <div
      class="p-2 rounded border-solid border-2 border-gray-800 flex flex-col
      text-center justify-center items-center cursor-pointer mb-4"
      on:click={() => page('/')}>
      <Icon height="1.5em" width="1.5em" icon={faTachometerAlt} />
      <div class="uppercase text-sm mt-4">Dashboard</div>
    </div>
    <div
      class="p-2 rounded border-solid border-2 border-gray-800 flex flex-col
      text-center justify-center items-center cursor-pointer mb-4"
      on:click={() => page('/create-plate')}>
      <Icon height="1.5em" width="1.5em" icon={faPlusCircle} />
      <div class="uppercase text-sm mt-4">Create Plate</div>
    </div>
  </div>
</div>
