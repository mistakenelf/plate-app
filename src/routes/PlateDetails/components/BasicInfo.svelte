<script>
  export let title;
  export let dueDate;
  export let status;
</script>

<div class="m-4 text-gray-700">
  <div class="p-4 bg-white rounded w-full md:w-1/2 shadow mb-6">
    <h1 class="font-bold text-3xl md:text-5xl mb-3">{title}</h1>
    <hr class="mb-2" />
    <div class="mb-3 text-lg md:text-xl">Due On: {dueDate}</div>
    <div class="flex items-center mb-3 text-lg md:text-xl">
      Status: {status}
    </div>
  </div>
</div>
