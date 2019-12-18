<script>
  export let status = 'open';
  export let isLarge = false;
</script>

<div
  class:bg-green-500={status === 'complete'}
  class:bg-yellow-500={status === 'in progress'}
  class:bg-blue-700={status === 'open'}
  class:text-2xl={isLarge}
  class:px-4={isLarge}
  class="px-2 py-1 text-xs font-bold mr-4 text-white uppercase rounded flex
  items-center justify-center">
  {status}
</div>
