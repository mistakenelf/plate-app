<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import { createEventDispatcher } from 'svelte';
  import { _ } from 'svelte-i18n';

  import plateStore from '../../../../store/plate';
  import Input from '../../../../components/Input.svelte';
  import Button from '../../../../components/Button.svelte';
  import Icon from '../../../../components/Icon.svelte';
  import { generateId } from '../../../../helpers/generateId';

  import Renderer from './Renderer.svelte';

  const dispatch = createEventDispatcher();

  export let tasks;
  export let plateId;

  let newTasks = tasks;
  let taskItem = '';

  const handleChange = e => {
    taskItem = e.target.value;
  };

  const toggleCompleted = e => {
    const index = newTasks.findIndex(todo => todo.id === e.detail.id);
    newTasks[index].completed = !newTasks[index].completed;

    plateStore.updatePlate({
      id: plateId,
      todos: newTasks,
    });

    dispatch('setPlateProgress');
  };

  const handleAddTask = e => {
    if (taskItem !== '' || (taskItem !== '' && e.keyCode) === 13) {
      newTasks = [
        ...newTasks,
        { title: taskItem, completed: false, id: generateId() },
      ];

      taskItem = '';

      plateStore.updatePlate({
        id: plateId,
        todos: newTasks,
      });

      dispatch('setPlateProgress');
    }
  };

  const removeTask = e => {
    newTasks = newTasks.filter(res => res.id !== e.detail.id);

    plateStore.updatePlate({
      id: plateId,
      todos: newTasks,
    });

    dispatch('setPlateProgress');
  };
</script>

<svelte:window on:keyup={handleAddTask} />

<div class="bg-white rounded-lg shadow p-4">
  <h3 class="text-xl font-bold text-gray-700 mb-2 ml-2 uppercase">
    {$_('plateCreator.tasks')}
  </h3>
  <div class="flex flex-row items-center mb-4">
    <Input
      fullWidth
      type="text"
      name="newTask"
      placeholder={$_('plateCreator.newTask')}
      value={taskItem}
      on:change={handleChange} />
    <Button class="ml-2" on:click={() => handleAddTask()}>
      <Icon fill="#fff" icon={faPlus} height="1.5rem" width="1.5rem" />
    </Button>
  </div>
  <Renderer
    {newTasks}
    on:toggleCompleted={toggleCompleted}
    on:removeTask={removeTask} />
</div>
