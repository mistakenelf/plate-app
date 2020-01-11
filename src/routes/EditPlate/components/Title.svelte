<script>
  import Input from '../../../components/Input.svelte';

  export let title;
</script>

<Input
  name="title"
  type="text"
  label="title"
  isFormField
  placeholder="title"
  required
  on:change
  value={title} />
