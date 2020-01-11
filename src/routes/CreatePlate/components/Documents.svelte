<script>
  import * as FilePond from 'filepond';
  import { onMount } from 'svelte';

  onMount(() => {
    const inputElement = document.getElementById('fileUpload');
    FilePond.create(inputElement, { multiple: true, name: 'filepond' });
  });
</script>

<div
  class="my-2 px-2 w-full overflow-hidden md:w-1/2 xl:my-2 xl:px-2 bg-white
  rounded shadow border-2 border-gray-400">
  <h3 class="text-2xl text-gray-700 mb-4 p-4">Documents</h3>
  <input
    type="file"
    id="fileUpload"
    name="filepond"
    multiple
    data-allow-reorder="true"
    data-max-file-size="3MB"
    data-max-files="3" />
</div>
