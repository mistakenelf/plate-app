<script>

export let statData
</script>


<style>
  .StatCard:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.01);
    }
</style>

<!-- <statCard status="completed" count={completedCount} />
<statCard status="open" count={openCount} /> -->
<div class= " StatCard max-w-sm rounded-lg m-10 flex-1 overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{statData.text} </div>
     <div class="text-6xl">{statData.count} </div>
   </div>
</div>




