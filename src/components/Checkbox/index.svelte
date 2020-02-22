<script>
  import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare';
  import { faCheckSquare } from '@fortawesome/free-solid-svg-icons/faCheckSquare';

  import Icon from '../Icon';

  export let checked = false;
</script>

{#if checked}
  <Icon
    on:click
    class="cursor-pointer"
    fill="#48BB78"
    icon={faCheckSquare}
    height="1.2rem"
    width="1.2rem" />
{:else}
  <Icon
    on:click
    class="cursor-pointer"
    fill="#4a5568"
    icon={faSquare}
    height="1.2rem"
    width="1.2rem" />
{/if}
