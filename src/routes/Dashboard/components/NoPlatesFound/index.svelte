<script>
  import { _ } from 'svelte-i18n';
  import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';

  import Icon from '../../../../components/Icon.svelte';
</script>

<div class="flex items-center justify-center h-full">
  <div class="flex flex-col items-center">
    <Icon
      class="mb-4"
      height="7rem"
      width="7rem"
      fill="#4a5568"
      icon={faExclamationTriangle} />
    <p
      class="text-3xl uppercase font-bold text-gray-700 md:w-2/3 text-center
      mb-4">
      {$_('dashboard.noPlatesFound')}
    </p>
    <p class="text-center ml-4 mr-4 text-gray-700">
      {$_('dashboard.noPlatesHelperText')}
    </p>
  </div>
</div>
