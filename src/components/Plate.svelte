<script>
  import page from 'page';
  import { faFolderOpen } from '@fortawesome/free-solid-svg-icons/faFolderOpen';
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt';

  import { deletePlate } from '../store/plate';

  import Icon from './Icon.svelte';

  export let title;
  export let id;
  export let status;

  const handleDelete = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    await deletePlate(id, user.id);
  };
</script>

<div
  class="shadow p-3 bg-white mb-4 border-l-8 rounded border-solid"
  class:border-green-500={status === 'complete'}
  class:border-yellow-700={status === 'in progress'}
  class:border-blue-700={status === 'open'}>
  <div class="flex items-center justify-between">
    <div class="text-md md:text-xl w-1/2 truncate">{title}</div>
    <div class="items-center flex justify-center">
      <Icon
        class="cursor-pointer mr-4"
        fill="#4a5568"
        icon={faTrashAlt}
        height="1.5rem"
        width="1.5rem"
        on:click={() => handleDelete()} />
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
