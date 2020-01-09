<script>
import statCard from '../components/StatCard.svelte';

</script>

<statCard status="completed" count={completedCount} />
<statCard status="inProgress" count={inProgress } />
<statCard status="open" count={openCount} />




