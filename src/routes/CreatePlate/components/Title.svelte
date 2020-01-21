<script>
  import TextField from '../../../components/TextField.svelte';

  export let title;
</script>

<TextField
  bind:textFieldValue={title}
  name="title"
  label="title"
  isFormField
  placeholder="title"
  required />
