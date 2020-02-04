<script>
  import page from 'page';

  import { _ } from 'svelte-i18n';
</script>

<div class="flex items-center h-full">
  <div
    class="w-16 cursor-pointer h-full flex justify-center items-center
    bg-gray-700"
    on:click={() => page('/')}>
    <div class="flex text-3xl mb-2">🍛</div>
  </div>
  <div
    class="ml-4 text-2xl font-bold cursor-pointer text-white"
    on:click={() => page('/')}>
    {$_('defaultLayout.brand')}
  </div>
</div>
