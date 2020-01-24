<script>
  export let title;
  export let description;
</script>

<svelte:head>
  <title>Plate - {title}</title>
  <meta name="description" content={description} />
</svelte:head>
