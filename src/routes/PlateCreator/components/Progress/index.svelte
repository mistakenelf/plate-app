<script>
  export let plateProgress;
</script>

<div class="shadow w-full bg-white mb-4 rounded h-6">
  <div
    class:text-gray-700={$plateProgress <= 0}
    class:text-white={$plateProgress > 0}
    class:ml-12={$plateProgress <= 0}
    class="bg-blue-500 text-xs leading-none text-center rounded h-6 flex
    whitespace-no-wrap items-center justify-center"
    style="width: {($plateProgress * 100).toFixed(0).toString()}%">
    {($plateProgress * 100).toFixed(0)}% Complete
  </div>
</div>
