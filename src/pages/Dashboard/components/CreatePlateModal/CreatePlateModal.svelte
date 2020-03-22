<script>
  import firebase from 'firebase/app';
  import dayjs from 'dayjs';

  import Modal from '../../../../components/Modal/Modal';
  import Input from '../../../../components/Input/Input';
  import Textarea from '../../../../components/Textarea/Textarea';
  import Select from '../../../../components/Select/Select';
  import { db, firebaseUser } from '../../../../store/firebase';

  let title = '';
  let dueDate = dayjs().format();
  let description = '';
  let category = '';

  export let isOpen;
  export let closeModal;

  const createPlate = () => {
    if (title !== '' && description !== '') {
      db.collection('plates').add({
        createdBy: $firebaseUser.uid,
        title,
        dueDate: dayjs(dueDate).format(),
        description,
        category: 'Development',
      });

      closeModal();
    }
  };
</script>

<Modal
  title="Create Plate"
  {isOpen}
  on:handleClose={closeModal}
  on:handleOK={createPlate}>
  <form>
    <Input
      isFormField
      type="text"
      id="title"
      label="Title"
      value={title}
      on:change={e => (title = e.target.value)} />
    <Input
      isFormField
      type="date"
      id="dueDate"
      label="Due Date"
      value={dueDate}
      on:change={e => (dueDate = e.target.value)} />
    <Textarea
      isFormField
      id="description"
      label="Description"
      value={description}
      on:change={e => (description = e.target.value)} />
    <Select id="category" label="Category">
      <option>Development</option>
      <option>Project Management</option>
      <option>Management</option>
      <option>Home</option>
    </Select>
  </form>
</Modal>
