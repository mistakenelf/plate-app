<script>
  import { _ } from 'svelte-i18n';

  import Input from '../../../../components/Input.svelte';

  export let searchText;
</script>

<Input
  type="text"
  name="search"
  placeholder={$_('dashboard.searchPlates')}
  value={searchText}
  on:keyup />
