<script>
  import Textarea from '../../../components/Textarea';

  export let description;
</script>

<Textarea
  name="description"
  rows={7}
  label="Description"
  isFormField
  on:change
  value={description} />
