<script>
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
  import page from 'page';

  import FAB from '../../components/FAB';
  import plateApi from '../../api/plate';
  import Loader from '../../components/Loader';
  import TodoList from '../../components/TodoList';
  import { currentUser } from '../../store/auth';

  import Title from './components/Title';
  import DueDate from './components/DueDate';
  import Status from './components/Status';
  import Header from './components/Header';
  import Category from './components/Category';
  import Description from './components/Description';

  let loading = false;

  const formValues = {
    title: '',
    dueDate: '',
    description: '',
    category: '',
    status: 'open',
    todos: [],
    createdBy: $currentUser.id,
  };

  const handleChange = e => {
    formValues[e.target.name] = e.target.value;
  };

  const addTodo = event => {
    formValues.todos = [...formValues.todos, event.detail];
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
      <Title on:change={handleChange} title={formValues.title} />
      <DueDate on:change={handleChange} dueDate={formValues.dueDate} />
    </div>
    <div class="flex flex-wrap -mx-2 overflow-hidden xl:-mx-2">
      <Status on:change={handleChange} status={formValues.status} />
      <Category on:change={handleChange} category={formValues.category} />
    </div>
    <Description
      on:change={handleChange}
      description={formValues.description} />
    <div class="w-full md:w-1/2">
      <TodoList todos={formValues.todos} on:addTodo={addTodo} />
    </div>
    <FAB icon={faSave} />
  </form>
{/if}
