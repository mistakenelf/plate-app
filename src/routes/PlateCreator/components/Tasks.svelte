<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

  import Checkbox from '../../../components/Checkbox.svelte';
  import plateStore from '../../../store/plate';
  import Input from '../../../components/Input.svelte';
  import Button from '../../../components/Button.svelte';
  import Icon from '../../../components/Icon.svelte';
  import { generateId } from '../../../helpers/generateId';

  export let tasks;
  export let plateId;

  let newTasks = tasks;
  let taskItem = '';

  const handleChange = e => {
    taskItem = e.target.value;
  };

  const toggleCompleted = id => {
    const index = newTasks.findIndex(todo => todo.id === id);
    newTasks[index].completed = !newTasks[index].completed;

    plateStore.updatePlate({
      id: plateId,
      todos: newTasks,
    });
  };

  const handleAddTodo = () => {
    if (taskItem !== '') {
      newTasks = [
        ...newTasks,
        { title: taskItem, completed: false, id: generateId() },
      ];

      taskItem = '';

      plateStore.updatePlate({
        id: plateId,
        todos: newTasks,
      });
    }
  };

  const removeTodo = id => {
    newTasks = newTasks.filter(res => res.id !== id);

    plateStore.updatePlate({
      id: plateId,
      todos: newTasks,
    });
  };
</script>

<div class="bg-white rounded-lg shadow p-4 h-full">
  <h3 class="text-xl font-bold text-gray-700 mb-2 uppercase">Tasks</h3>
  <div class="flex flex-row items-center mb-4">
    <Input
      fullWidth
      type="text"
      name="todoItem"
      placeholder="todo item"
      value={taskItem}
      on:change={handleChange} />
    <Button class="ml-2" on:click={() => handleAddTodo()}>
      <Icon fill="#fff" icon={faPlus} height="1.5rem" width="1.5rem" />
    </Button>
  </div>
  {#if tasks.length > 0}
    <ul class="mt-2 p-2">
      {#each newTasks as task}
        <li class="mb-4 flex justify-between items-center">
          <div class="flex items-center w-2/3 md:w-auto">
            <span
              class:line-through={task.completed}
              class="text-gray-700 text-xl">
              {task.title}
            </span>
          </div>
          <div>
            <Checkbox
              checked={task.completed}
              on:click={() => toggleCompleted(task.id)} />
            <Icon
              class="cursor-pointer ml-4"
              fill="#F56565"
              icon={faTimes}
              height="1.5rem"
              width="1.5rem"
              on:click={() => removeTodo(task.id)} />
          </div>
        </li>
        <hr class="pb-2 mb-2" />
      {/each}
    </ul>
  {/if}
</div>
