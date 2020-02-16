<script>
  import { _ } from 'svelte-i18n';
  import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';

  import Icon from '../../../../components/Icon.svelte';

  export let notFoundText;
</script>

<div class="flex items-center justify-center h-full">
  <div class="flex flex-col items-center">
    <Icon
      class="mb-4"
      height="6rem"
      width="6rem"
      fill="#4a5568"
      icon={faExclamationTriangle} />
    <p
      class="text-xl uppercase font-bold text-gray-700 text-center md:w-2/3 mb-4">
      {notFoundText}
    </p>
  </div>
</div>
