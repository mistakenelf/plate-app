<script>
  import { faBatteryEmpty } from '@fortawesome/free-solid-svg-icons/faBatteryEmpty';

  import Icon from '../../../../components/Icon.svelte';
</script>

<div class="flex items-center justify-center h-full">
  <div class="flex flex-col items-center">
    <Icon height="6rem" width="6rem" icon={faBatteryEmpty} />
    <p class="text-3xl uppercase font-bold">No Plates Found</p>
    <p class="text-center ml-4 mr-4">
      Click the plus button in the bottom right of your screen to start creating
      plates today
    </p>
  </div>
</div>
