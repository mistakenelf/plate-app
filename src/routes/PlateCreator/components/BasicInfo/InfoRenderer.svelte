<script>
  export let newTitle;
  export let newStatus;
</script>

<div class="flex flex-row justify-between items-center w-full">
  <h1 class="font-bold text-3xl mb-2 md:text-5xl">{newTitle}</h1>
  <div class="flex items-center ml-4">
    <div
      class:bg-green-500={newStatus === 'completed'}
      class:bg-orange-500={newStatus === 'in progress'}
      class:bg-blue-500={newStatus === 'open'}
      class="px-4 py-1 text-white text-lg rounded font-bold inline-block">
      {newStatus}
    </div>
  </div>
</div>
