<script>
  import Input from '../../../components/Input/Input';
  import Button from '../../../components/Button/Button';

  let todos = [];
  let todoItem = '';
  let todoId = 0;

  function handleChange(e) {
    todoItem = e.target.value;
  }

  function handleAddTodo() {
    todos = [
      ...todos,
      {
        id: todoId++,
        title: todoItem
      }
    ]
  }
</script>

<div class="rounded bg-black">
  <div class="flex flex-row items-center bg-teal-600 text-white p-4 rounded-t">
    Todos
  </div>
  <div class="p-4">
    <div class="flex flex-row justify-between">
      <Input fullWidth type="text" value={todoItem} on:change={handleChange} />
      <Button label="+" on:click={handleAddTodo} />
    </div>
  <div class="p-4">
    {#each todos as todo}
      <div class="flex flex-row justify-between mb-4">
        <div class="text-white text-lg">{todo.title}</div>
        <div class="text-lg text-red-500">X</div>
      </div>
    {/each}
  </div>
  </div>
</div>
