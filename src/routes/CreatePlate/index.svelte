<script>
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
  import page from 'page';

  import FAB from '../../components/FAB.svelte';
  import Loader from '../../components/Loader.svelte';
  import { currentUser } from '../../store/auth';
  import plateStore from '../../store/plate';

  import Title from './components/Title.svelte';
  import DueDate from './components/DueDate.svelte';
  import Status from './components/Status.svelte';
  import Header from './components/Header.svelte';
  import Category from './components/Category.svelte';
  import Description from './components/Description.svelte';
  import Notes from './components/Notes.svelte';
  import TodoList from './components/TodoList.svelte';

  let loading = false;

  const formValues = {
    title: '',
    dueDate: '',
    description: '',
    category: '',
    notes: '',
    status: 'open',
    todos: [],
    createdBy: '',
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
    formValues.createdBy = $currentUser.id;
    loading = true;
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
  <form class="p-4 pb-24" on:submit|preventDefault={handleSubmit}>
    <Header />
    <div class="flex flex-wrap -mx-2 overflow-hidden xl:-mx-2">
      <Title on:change={handleChange} title={formValues.title} />
      <DueDate on:change={handleChange} dueDate={formValues.dueDate} />
    </div>
    <div class="flex flex-wrap -mx-2 overflow-hidden xl:-mx-2">
      <Status on:change={handleChange} status={formValues.status} />
      <Category on:change={handleChange} category={formValues.category} />
    </div>
    <div class="flex flex-wrap -mx-2 overflow-hidden xl:-mx-2">
      <Description
        on:change={handleChange}
        description={formValues.description} />
      <Notes on:change={handleChange} notes={formValues.notes} />
    </div>
    <div class="w-full md:w-1/2">
      <TodoList
        todos={formValues.todos}
        on:addTodo={addTodo}
        on:removeTodo={removeTodo} />
    </div>
    <FAB icon={faSave} />
  </form>
{/if}
