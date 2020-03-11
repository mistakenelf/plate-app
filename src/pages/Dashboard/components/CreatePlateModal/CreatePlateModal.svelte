<script>
  import Modal from '../../../../components/Modal/Modal';
  import Input from '../../../../components/Input/Input';
  import Textarea from '../../../../components/Textarea/Textarea';
  import Select from '../../../../components/Select/Select';

  export let isOpen;
  export let closeModal;
</script>

<Modal title="Create Plate" {isOpen} on:handleClose={closeModal}>
  <form>
    <Input isFormField type="text" id="title" label="Title" />
    <Input isFormField type="date" id="dueDate" label="Due Date" />
    <Textarea isFormField id="description" label="Description" />
    <Select id="category" label="Category">
      <option>Development</option>
      <option>Project Management</option>
      <option>Management</option>
      <option>Home</option>
    </Select>
  </form>
</Modal>
