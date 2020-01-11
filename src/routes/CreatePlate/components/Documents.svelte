<script>
  import * as FilePond from 'filepond';
  import { onMount } from 'svelte';

  onMount(() => {
    const inputElement = document.getElementById('fileUpload');
    FilePond.create(inputElement, { multiple: true, name: 'filepond' });
  });
</script>

<div class="bg-white rounded shadow border-2 border-gray-400 p-4">
  <h3 class="text-3xl text-gray-700 mb-4">Documents</h3>
  <input
    type="file"
    id="fileUpload"
    name="filepond"
    multiple
    data-allow-reorder="true"
    data-max-file-size="3MB"
    data-max-files="3" />
</div>
