<script>
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
  import page from 'page';
  import { onMount } from 'svelte';

  import FAB from '../../components/FAB.svelte';
  import Loader from '../../components/Loader.svelte';
  import { currentUser } from '../../store/auth';
  import { getId } from '../../helpers/getId';
  import plateStore, { plate, loadingPlateDetails } from '../../store/plate';

  import Title from './components/Title.svelte';
  import DueDate from './components/DueDate.svelte';
  import Header from './components/Header.svelte';
  import Category from './components/Category.svelte';
  import Description from './components/Description.svelte';
  import Notes from './components/Notes.svelte';
  import TodoList from './components/TodoList.svelte';
  import Documents from './components/Documents.svelte';

  const urlArray = window.location.href.split('/');
  const plateId = urlArray[urlArray.length - 2];
  let formValues;
  let loadingPlate = true;

  onMount(async () => {
    loadingPlate = true;

    await plateStore.getPlate(plateId);

    formValues = {
      createdBy: $plate.data.createdBy,
      dueDate: $plate.data.dueDate,
      title: $plate.data.title,
      description: $plate.data.description,
      category: $plate.data.category,
      notes: $plate.data.notes,
      status: $plate.data.status,
      todos: $plate.data.todos,
      files: $plate.data.files,
      sharedWith: $plate.data.sharedWith,
    };

    loadingPlate = false;
  });

  const handleChange = e => {
    formValues[e.target.name] = e.target.value;
  };

  const addTodo = event => {
    formValues.todos = [...formValues.todos, event.detail];
  };

  const removeTodo = event => {
    formValues.todos = formValues.todos.filter(
      res => res.id !== event.detail.id,
    );
  };

  const addFile = event => {
    formValues.files = [...formValues.files, event.detail];
  };

  const handleSubmit = async () => {
    formValues.createdBy = $currentUser.id;
    formValues.notes = formValues.notes;
    formValues.description = formValues.description;
    formValues.dueDate = new Date(formValues.dueDate);
  };
</script>

<svelte:head>
  <title>Plate - Edit Plate</title>
  <meta
    name="description"
    content="Now that you got a plate created, lets get it edited" />
</svelte:head>

{#if loadingPlate}
  <Loader fullPage />
{:else}
  <form class="pb-24" on:submit|preventDefault={handleSubmit}>
    <div class="p-4">
      <Header />
    </div>
    <div class="flex flex-wrap mt-2 mx-4">
      <div class="w-full md:w-1/2 px-2 my-2">
        <Title on:change={handleChange} title={formValues.title} />
      </div>
      <div class="w-full md:w-1/2 px-2 my-2">
        <DueDate on:change={handleChange} dueDate={formValues.dueDate} />
      </div>
    </div>
    <div class="flex flex-wrap mt-2 mx-4">
      <div class="w-full md:w-1/2 px-2 my-2">
        <Category on:change={handleChange} category={formValues.category} />
      </div>
    </div>
    <div class="flex flex-wrap mt-2 mx-4">
      <div class="w-full md:w-1/2 px-2 my-2">
        <Description
          on:change={handleChange}
          description={formValues.description} />
      </div>
      <div class="w-full md:w-1/2 px-2 my-2">
        <Notes on:change={handleChange} notes={formValues.notes} />
      </div>
    </div>
    <div class="flex flex-wrap mt-2 mx-4">
      <div class="w-full md:w-1/2 px-2 my-2 mb-12 md:mb-0">
        <TodoList
          todos={formValues.todos}
          on:addTodo={addTodo}
          on:removeTodo={removeTodo} />
      </div>
      <div class="w-full md:w-1/2 px-2 my-2">
        <Documents on:addFile={addFile} files={formValues.files} />
      </div>
    </div>
    <FAB icon={faSave} />
  </form>
{/if}
