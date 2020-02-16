<script>
  import { _ } from 'svelte-i18n';
  import { createEventDispatcher } from 'svelte';

  import Modal from '../../../../components/Modal.svelte';
  import Input from '../../../../components/Input.svelte';

  const dispatch = createEventDispatcher();

  export let editing;
  export let newTitle;
  export let newStatus;
</script>

<Modal
  title={$_('plateCreator.basicInfoModalTitle')}
  isOpen={editing}
  on:handleOK={() => dispatch('handleSave')}
  on:handleClose={() => dispatch('handleModalClose')}>
  <Input
    isFormField
    type="text"
    name="title"
    label={$_('plateCreator.basicInfoTitle')}
    placeholder={$_('plateCreator.basicInfoTitle')}
    value={newTitle}
    on:change={e => dispatch('handleTitleChange', { event: e })} />
  <div class="block text-gray-700 font-bold mb-1 uppercase text-sm">
    {$_('plateCreator.basicInfoStatus')}
  </div>
  <div class="flex justify-between flex-row items-center mb-6">
    <div class="flex items-center">
      <input
        type="radio"
        name="status"
        value="open"
        checked={newStatus === 'open'}
        on:change={e => dispatch('handleStatusChange', { event: e })} />
      <span class="ml-2">{$_('plateCreator.basicInfoOpen')}</span>
    </div>
    <div class="flex items-center">
      <input
        type="radio"
        name="status"
        value="in progress"
        checked={newStatus === 'in progress'}
        on:change={e => dispatch('handleStatusChange', { event: e })} />
      <span class="ml-2">{$_('plateCreator.basicInfoInProgress')}</span>
    </div>
    <div class="flex items-center">
      <input
        type="radio"
        name="status"
        value="completed"
        checked={newStatus === 'completed'}
        on:change={e => dispatch('handleStatusChange', { event: e })} />
      <span class="ml-2">{$_('plateCreator.basicInfoCompleted')}</span>
    </div>
  </div>
</Modal>
