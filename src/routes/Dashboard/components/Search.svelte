<script>
  import TextField from '../../../components/TextField.svelte';

  export let searchText;
</script>

<input
  value={searchText}
  on:keyup
  name="search"
  placeholder="search plates"
  type="text"
  class="block appearance-none w-full bg-white border-2 border-gray-400
  hover:border-gray-500 px-4 py-3 pr-8 rounded leading-tight focus:outline-none
  focus:shadow-outline" />
