<script>
  export let plateProgress;
</script>

<div class="shadow w-full bg-white mb-4 rounded">
  <div
    class="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded"
    style="width: {($plateProgress * 100).toFixed(0).toString()}%">
    {($plateProgress * 100).toFixed(0)}% Complete
  </div>
</div>
