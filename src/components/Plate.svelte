<script>
  import page from 'page';
  import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';

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
        fill="#4a5568"
        icon={faExternalLinkAlt}
        height="1.5rem"
        width="1.5rem"
        on:click={() => page(`/plate/${id}`)} />
    </div>
  </div>
</div>
