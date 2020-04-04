<script>
  export let category;
  export let dueDate;
  export let title;
  export let description;
</script>

<div class="bg-gray-700 rounded-lg shadow p-2">
  <div class="flex flex-row items-center justify-between mb-6">
    <div class="text-sm text-gray-300">{category}</div>
    <div class="text-sm text-gray-300">{dueDate}</div>
  </div>
  <div class="text-xl text-gray-200 mb-2">{title}</div>
  <p class="text-gray-300 text-sm h-24">{description}</p>
  <hr class="mb-4" />
  <div class="flex flex-row items-center mb-2">
    <div class="bg-green-500 rounded font-bold text-xs px-2 text-green-100">
      In Progress
    </div>
  </div>
</div>
