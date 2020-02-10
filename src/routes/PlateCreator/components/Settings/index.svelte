<script>
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt';
  import { faShare } from '@fortawesome/free-solid-svg-icons/faShare';

  import Icon from '../../../../components/Icon.svelte';
</script>

<div class="shadow bg-white rounded-lg p-4">
  <div class="flex flex-row justify-end items-center">
    <Icon
      class="cursor-pointer ml-4"
      fill="#4a5568"
      icon={faShare}
      height="2.5rem"
      width="2.5rem" />
    <Icon
      class="cursor-pointer ml-4"
      fill="#4a5568"
      icon={faTrashAlt}
      height="2.5rem"
      width="2.5rem" />
  </div>
</div>
