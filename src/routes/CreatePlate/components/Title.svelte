<script>
  import Input from '../../../components/Input';

  export let title;
</script>

<div class="my-2 px-2 w-full overflow-hidden md:w-1/2 xl:my-2 xl:px-2">
  <Input
    name="title"
    type="text"
    label="title"
    isFormField
    placeholder="title"
    required
    on:change
    value={title} />
</div>
