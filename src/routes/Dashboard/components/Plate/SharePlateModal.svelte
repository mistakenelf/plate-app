<script>
  import { createEventDispatcher } from 'svelte';
  import { _ } from 'svelte-i18n';

  import Modal from '../../../../components/Modal.svelte';
  import Input from '../../../../components/Input.svelte';

  const dispatch = createEventDispatcher();

  export let isOpen;
</script>

<Modal
  {isOpen}
  isDialog
  title={$_('dashboard.sharePlateModalTitle')}
  on:handleClose={() => dispatch('handleClose')}>
  <Input
    type="text"
    name="username"
    class="mt-4"
    placeholder={$_('dashboard.sharePlateSearchPlaceholder')} />
</Modal>
