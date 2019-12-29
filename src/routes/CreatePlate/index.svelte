<script>
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
  import page from 'page';

  import Input from '../../components/Input';
  import Textarea from '../../components/Textarea';
  import FAB from '../../components/FAB';
  import plateApi from '../../api/plate';
  import Select from '../../components/Select';
  import Loader from '../../components/Loader';
  import TodoList from '../../components/TodoList';

  import Header from './components/Header';

  let loading = false;

  const formValues = {
    name: '',
    dueDate: '',
    description: '',
    category: '',
    status: '',
    createdBy: '',
  };

  const handleChange = e => {
    formValues[e.target.name] = e.target.value;
  };

  const handleSubmit = async () => {
    loading = true;
    await plateApi.create(formValues);
    loading = false;
    page('/');
  };
</script>

<svelte:head>
  <title>Plate - Create Plate</title>
</svelte:head>

{#if loading}
  <Loader fullPage />
{:else}
  <form class="p-4 pb-24" on:submit|preventDefault={handleSubmit}>
    <Header />
    <div class="flex flex-wrap -mx-2 overflow-hidden xl:-mx-2">
      <div class="my-2 px-2 w-full overflow-hidden md:w-1/2 xl:my-2 xl:px-2">
        <Input
          name="name"
          type="text"
          label="Name"
          isFormField
          placeholder="name"
          required
          on:change={handleChange}
          value={formValues.name} />
      </div>
      <div class="my-2 px-2 w-full overflow-hidden md:w-1/2 xl:my-2 xl:px-2">
        <Input
          name="dueDate"
          type="date"
          label="Due Date"
          isFormField
          fullWidth
          on:change={handleChange}
          value={formValues.dueDate} />
      </div>
    </div>
    <div class="flex flex-wrap -mx-2 overflow-hidden xl:-mx-2">
      <div class="my-2 px-2 w-full overflow-hidden md:w-1/2 xl:my-2 xl:px-2">
        <Select
          name="status"
          label="Status"
          isFormField
          value={formValues.status}
          on:change={handleChange}>
          <option value="open">Open</option>
          <option value="in progress">In Progress</option>
          <option value="complete">Complete</option>
        </Select>
      </div>
      <div class="my-2 px-2 w-full overflow-hidden md:w-1/2 xl:my-2 xl:px-2">
        <Select
          name="category"
          label="Category"
          isFormField
          value={formValues.category}
          on:change={handleChange}>
          <option value="grocery">Groceries</option>
          <option value="work">Work</option>
          <option value="home">Home</option>
          <option value="school">School</option>
        </Select>
      </div>
    </div>
    <Textarea
      name="description"
      rows={7}
      label="Description"
      isFormField
      on:change={handleChange}
      value={formValues.description} />
    <FAB icon={faSave} />
    <div class="bg-white p-2 w-full md:w-1/2">
      <TodoList />
    </div>
  </form>
{/if}
