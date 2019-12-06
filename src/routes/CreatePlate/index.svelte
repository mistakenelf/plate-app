<script>
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';

  import Input from '../../components/Input';
  import Textarea from '../../components/Textarea';
  import FAB from '../../components/FAB';
  import plateApi from '../../api/plateApi';

  import Header from './components/Header';

  const formValues = {
    name: '',
    dueDate: '',
    description: '',
  };

  const handleChange = e => {
    formValues[e.target.name] = e.target.value;
  };

  const handleSubmit = () => {
    plateApi.create(formValues).then(res => res);
  };
</script>

<svelte:head>
  <title>Plate - Create Plate</title>
</svelte:head>

<form class="p-4 pb-24" on:submit|preventDefault={handleSubmit}>
  <Header />
  <div class="flex flex-wrap -mx-2 overflow-hidden xl:-mx-2">
    <div class="my-2 px-2 w-full overflow-hidden md:w-1/2 xl:my-2 xl:px-2">
      <Input
        name="name"
        type="text"
        label="Name"
        isFormField
        placeholder="plate name"
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
  <Textarea
    name="description"
    rows={10}
    label="Description"
    isFormField
    on:change={handleChange}
    value={formValues.description} />
  <FAB icon={faSave} />
</form>
