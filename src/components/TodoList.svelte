<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

  import Input from './Input';
  import Icon from './Icon';
</script>

<div class="flex flex-col p-4 rounded shadow bg-white">
  <div class="flex justify-between items-center flex-row mb-4">
    <div class="text-2xl font-bold">Todos</div>
    <Icon
      class="cursor-pointer"
      fill="#4a5568"
      icon={faPlus}
      height="1.5rem"
      width="1.5rem"
      on:click={() => console.log('todo added')} />
  </div>
  <Input
    name="todoItem"
    type="text"
    label="todo item"
    isFormField
    placeholder="todo item"
    required
    value={''} />
</div>
