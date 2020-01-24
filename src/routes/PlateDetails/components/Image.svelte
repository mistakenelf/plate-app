<script>
  import { faFileImage } from '@fortawesome/free-solid-svg-icons/faFileImage';

  import Icon from '../../../components/Icon.svelte';

  export let imageSrc;
</script>

<div
  class="bg-white rounded-lg shadow md:h-full flex items-center flex-col
  justify-center mb-6 md:mb-0 p-4">
  {#if imageSrc}
    <img src={imageSrc} alt="plate image" />
  {:else}
    <Icon height="6rem" width="6rem" fill="#4a5568" icon={faFileImage} />
    <h3 class="text-lg text-gray-700 mt-4">No Image</h3>
  {/if}
</div>
