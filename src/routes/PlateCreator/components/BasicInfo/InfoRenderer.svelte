<script>
  import dayjs from 'dayjs';
  import { _ } from 'svelte-i18n';

  export let newTitle;
  export let newDueDate;
  export let newStatus;
</script>

<h1 class="font-bold text-3xl mb-2 md:text-5xl">{newTitle}</h1>
<div class="flex items-center mb-4">
  <div class="text-sm md:text-xl">
    {$_('plateCreator.basicInfoDueOn')}: {dayjs(newDueDate).format('MMMM D, YYYY')}
  </div>
  <div
    class:bg-green-500={newStatus === 'completed'}
    class:bg-orange-500={newStatus === 'in progress'}
    class:bg-blue-500={newStatus === 'open'}
    class="p-1 text-white text-xs rounded font-bold inline-block ml-4">
    {newStatus}
  </div>
</div>
