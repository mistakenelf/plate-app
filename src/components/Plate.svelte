<script>
  import page from 'page';
  import { faFolderOpen } from '@fortawesome/free-solid-svg-icons/faFolderOpen';
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt';

  import StatusChip from './StatusChip';
  import Icon from './Icon';

  export let title;
  export let id;
  export let status;
</script>

<div class="shadow p-3 bg-white mb-4">
  <div class="flex items-center justify-between">
    <div class="text-md md:text-xl w-1/2 truncate">{title}</div>
    <div class="items-center flex justify-center">
      <StatusChip {status} />
      <Icon
        class="cursor-pointer mr-4"
        fill="#4a5568"
        icon={faTrashAlt}
        height="1.5rem"
        width="1.5rem"
        on:click={() => console.log('delete')} />
      <Icon
        class="cursor-pointer"
        fill="#4a5568"
        icon={faFolderOpen}
        height="1.5rem"
        width="1.5rem"
        on:click={() => page(`/plate/${id}`)} />
    </div>
  </div>
</div>
