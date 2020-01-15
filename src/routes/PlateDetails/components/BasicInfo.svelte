<script>
  import dayjs from 'dayjs';

  export let title;
  export let dueDate;
</script>

<div class="text-gray-700 shadow rounded md:h-full p-4 bg-white mb-6">
  <h1 class="font-bold text-3xl md:text-5xl mb-3">{title}</h1>
  <hr class="mb-2" />
  <div class="mb-3 text-lg md:text-xl">
    Due On: {dayjs(dueDate).format('MMMM D, YYYY')}
  </div>
</div>
