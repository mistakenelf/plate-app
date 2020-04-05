<script>
  import { onMount } from 'svelte';

  import { db } from '../../store/firebase';
  import Loader from '../../components/Loader/Loader';

  export let currentRoute;

  let plate = {};
  let loading = true;

  onMount(async () => {
    loading = true;

    const docRef = db.collection('plates').doc(currentRoute.queryParams.id);

    try {
      const doc = await docRef.get();

      if (doc.exists) {
        plate = doc.data();
        loading = false;
      } else {
        loading = false;
        console.log('Plate not found')
      }
    } catch (e) {
      loading = false;
      console.log(e);
    }
  });
</script>

{#if loading}
  <Loader fullPage />
{:else}
<div class="p-4">
  <h1 class="text-gray-300 text-3xl">{plate.title}</h1>
  <p class="text-gray-300">{plate.description}</p>
</div>
{/if}

