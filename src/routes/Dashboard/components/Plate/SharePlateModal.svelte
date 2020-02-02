<script>
  import { createEventDispatcher } from 'svelte';

  import Modal from '../../../../components/Modal.svelte';
  import Input from '../../../../components/Input.svelte';

  const dispatch = createEventDispatcher();

  export let isOpen;
</script>

<Modal
  {isOpen}
  isDialog
  title="Lets share your plate"
  on:handleClose={() => dispatch('handleClose')}>
  <Input
    isFormField
    type="text"
    name="username"
    class="mt-4"
    placeholder="Who would you like to share with?" />
</Modal>
