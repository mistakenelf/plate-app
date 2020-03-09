<script>
  import Modal from '../../../../components/Modal/Modal';
  import Input from '../../../../components/Input/Input';
  import Textarea from '../../../../components/Textarea/Textarea';

  export let isOpen;
  export let closeModal;
</script>

<Modal title="Create Plate" {isOpen} on:handleClose={closeModal}>
  <form>
    <Input isFormField type="text" id="title" label="Title" />
    <Textarea isFormField id="description" label="Description" />
  </form>
</Modal>
