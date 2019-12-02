<script>
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';

  import Input from '../../components/Input';
  import Textarea from '../../components/Textarea';
  import StickyNote from '../../components/StickyNote';
  import FAB from '../../components/FAB';

  import Header from './components/Header';

  const formValues = {
    name: '',
    dueDate: '',
    description: '',
    noteOneText: '',
    noteTwoText: '',
  };

  function handleChange(e) {
    formValues[e.target.name] = e.target.value;
  }

  function handleNoteChange(e) {
    formValues[e.target.name] = e.target.value;
  }

  async function handleSubmit() {}
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
  <div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-1 md:-mx-2 xl:-mx-2">
    <div
      class="my-2 px-2 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-2
      md:px-2 md:w-1/2 xl:my-2 xl:px-2 xl:w-1/4">
      <StickyNote
        name="noteOneText"
        noteText={formValues.noteOneText}
        on:change={handleNoteChange} />
    </div>
    <div
      class="my-2 px-2 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-2
      md:px-2 md:w-1/2 xl:my-2 xl:px-2 xl:w-1/4">
      <StickyNote
        name="noteTwoText"
        noteText={formValues.noteTwoText}
        on:change={handleNoteChange} />
    </div>
  </div>
  <FAB icon={faSave} />
</form>
