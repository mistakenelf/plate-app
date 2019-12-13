<script>
  import page from 'page';
  import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';

  import Icon from './Icon';

  export let name;
  export let status;
  export let id;
</script>

<div class="shadow p-3 bg-white mb-4">
  <div class="flex items-center justify-between">
    <div class="text-xl">{name}</div>
    <div class="items-center flex justify-center">
      <div
        class:bg-green-500={status === 'complete'}
        class:bg-yellow-500={status === 'in progress'}
        class:bg-blue-700={status === 'open'}
        class="px-4 py-1 text-xs font-bold mr-4 bg-green-500 text-white
        uppercase rounded flex items-center justify-center">
        {status}
      </div>
      <Icon
        class="cursor-pointer"
        icon={faExternalLinkAlt}
        height="1.5rem"
        width="1.5rem"
        on:click={() => page(`/plate/${id}`)} />
    </div>
  </div>
</div>
