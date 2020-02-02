<script>
  import Input from '../../../../components/Input.svelte';

  export let searchText;
</script>

<Input
  type="text"
  name="search"
  placeholder="search plates"
  value={searchText}
  on:keyup />
