<script>
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
  import page from 'page';

  import FAB from '../../components/FAB.svelte';
  import Loader from '../../components/Loader.svelte';
  import { currentUser } from '../../store/auth';
  import { getId } from '../../helpers/getId';
  import plateStore from '../../store/plate';

  import Title from './components/Title.svelte';
  import DueDate from './components/DueDate.svelte';
  import Header from './components/Header.svelte';
  import Category from './components/Category.svelte';
  import Description from './components/Description.svelte';
  import Notes from './components/Notes.svelte';
  import TodoList from './components/TodoList.svelte';

  let loading = false;

  const formValues = {
    createdBy: '',
    title: '',
    dueDate: '',
    description: '',
    category: '',
    notes: '',
    status: 'open',
    todos: [],
    files: [],
    sharedWith: [],
  };

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

  const handleSubmit = async () => {
    loading = true;

    formValues.createdBy = $currentUser.id;
    formValues.notes = formValues.notes;
    formValues.description = formValues.description;
    formValues.dueDate = new Date(formValues.dueDate);

    await plateStore.createPlate(formValues);

    loading = false;

    page('/');
  };
</script>

<svelte:head>
  <title>Plate - Create Plate</title>
  <meta
    name="description"
    content="Create a plate to get started today, manage your tasks and a simple
    platform" />
</svelte:head>

{#if loading}
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
    </div>
    <FAB icon={faSave} />
  </form>
{/if}
