<script>
  export let category;
  export let dueDate;
  export let title;
  export let description;
</script>

<div class="bg-white rounded-lg shadow p-2">
  <div class="flex flex-row items-center justify-between mb-6">
    <div class="text-sm text-gray-600">{category}</div>
    <div class="text-sm text-gray-600">{dueDate}</div>
  </div>
  <div class="text-xl text-gray-800 mb-2">{title}</div>
  <p class="text-gray-700 text-sm h-24">{description}</p>
  <hr class="mb-4" />
  <div class="flex flex-row items-center mb-2">
    <div class="bg-green-200 rounded text-xs px-1 text-green-900">
      In Progress
    </div>
  </div>
</div>
