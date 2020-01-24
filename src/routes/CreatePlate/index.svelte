<script>
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
  import page from 'page';
  import dayjs from 'dayjs';

  import FAB from '../../components/FAB.svelte';
  import Loader from '../../components/Loader.svelte';
  import { currentUser } from '../../store/auth';
  import plateStore from '../../store/plate';
  import Meta from '../../components/Meta.svelte';

  import Title from './components/Title.svelte';
  import DueDate from './components/DueDate.svelte';
  import Header from './components/Header.svelte';
  import Category from './components/Category.svelte';
  import Description from './components/Description.svelte';
  import Notes from './components/Notes.svelte';
  import TodoList from './components/TodoList.svelte';
  import ImageUpload from './components/ImageUpload.svelte';

  let loading = false;

  const formValues = {
    createdBy: '',
    title: '',
    dueDate: new Date(),
    description: '',
    category: '',
    notes: '',
    status: 'open',
    image: '',
    todos: [],
    files: [],
    sharedWith: [],
  };

  const addTodo = event => {
    formValues.todos = [...formValues.todos, event.detail];
  };

  const removeTodo = event => {
    formValues.todos = formValues.todos.filter(
      res => res.id !== event.detail.id,
    );
  };

  const uploadImage = e => {
    formValues.image = e.detail.file;
  };

  const handleSubmit = async () => {
    loading = true;

    formValues.createdBy = $currentUser.id;
    formValues.notes = formValues.notes;
    formValues.description = formValues.description;
    formValues.dueDate = dayjs(formValues.dueDate);

    await plateStore.createPlate(formValues);

    loading = false;

    page('/');
  };
</script>

<Meta
  title="Create Plate"
  description="Create a plate to get started today, manage your tasks and a
  simple platform" />

{#if loading}
  <Loader fullPage />
{:else}
  <form class="pb-24" on:submit|preventDefault={handleSubmit}>
    <div class="p-4">
      <Header />
    </div>
    <div class="flex flex-wrap mt-2 mx-4">
      <div class="w-full md:w-1/2 px-2 my-2">
        <Title bind:title={formValues.title} />
      </div>
      <div class="w-full md:w-1/2 px-2 my-2">
        <DueDate bind:dueDate={formValues.dueDate} />
      </div>
    </div>
    <div class="flex flex-wrap mt-2 mx-4">
      <div class="w-full md:w-1/2 px-2 my-2">
        <Category bind:category={formValues.category} />
      </div>
    </div>
    <div class="flex flex-wrap mt-2 mx-4">
      <div class="w-full md:w-1/2 px-2 my-2">
        <Description bind:description={formValues.description} />
      </div>
      <div class="w-full md:w-1/2 px-2 my-2">
        <Notes bind:notes={formValues.notes} />
      </div>
    </div>
    <div class="flex flex-wrap mt-2 mx-4">
      <div class="w-full md:w-1/2 px-2 my-2 mb-12 md:mb-0">
        <TodoList
          todos={formValues.todos}
          on:addTodo={addTodo}
          on:removeTodo={removeTodo} />
      </div>
      <div class="w-full md:w-1/2 px-2 my-2 mb-12 mb:mb-0">
        <ImageUpload on:uploadImage={uploadImage} />
      </div>
    </div>
    <FAB icon={faSave} />
  </form>
{/if}
