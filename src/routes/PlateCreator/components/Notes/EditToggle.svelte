<script>
  import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
  import { createEventDispatcher } from 'svelte';

  import Icon from '../../../../components/Icon.svelte';

  const dispatch = createEventDispatcher();

  export let editing;
</script>

{#if editing}
  <Icon
    class="cursor-pointer -mt-2"
    fill="#4a5568"
    icon={faSave}
    height="1.2rem"
    width="1.2rem"
    on:click={() => dispatch('handleSave')} />
{:else}
  <Icon
    class="cursor-pointer -mt-2"
    fill="#4a5568"
    icon={faEdit}
    height="1.2rem"
    width="1.2rem"
    on:click={() => dispatch('handleEdit')} />
{/if}
