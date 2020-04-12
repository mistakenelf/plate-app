<script>
  import firebase from 'firebase/app';
  import dayjs from 'dayjs';
  import { navigateTo } from 'svelte-router-spa';

  import Button from '../../components/Button/Button';
  import Input from '../../components/Input/Input';
  import Textarea from '../../components/Textarea/Textarea';
  import Select from '../../components/Select/Select';
  import { db, firebaseUser } from '../../store/firebase';

  import Todos from './components/Todos';

  let title = '';
  let dueDate = dayjs().format();
  let description = '';
  let category = '';

  const createPlate = async () => {
    if (title !== '' && description !== '') {
      await db.collection('plates').add({
        createdBy: $firebaseUser.uid,
        title,
        dueDate: dayjs(dueDate).format(),
        description,
        category: 'Development',
      });

      navigateTo('/');
    }
  };
</script>

<h1 class="p-4 text-3xl text-gray-300">Create a plate</h1>
<form class="p-4" on:submit|preventDefault={createPlate}>
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
  <div class="mt-6 w-full md:w-1/2">
    <Todos />
  </div>
  <Button class="mt-4" type="submit" label="Create Plate" />
</form>
