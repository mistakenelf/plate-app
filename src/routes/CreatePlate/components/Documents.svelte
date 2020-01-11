<script>
  import * as FilePond from 'filepond';
  import { onMount, createEventDispatcher } from 'svelte';
  import FilePondPluginFileEncode from 'filepond-plugin-file-encode';

  const dispatch = createEventDispatcher();

  onMount(() => {
    const pond = document.getElementById('fileUpload');

    FilePond.registerPlugin(FilePondPluginFileEncode);
    FilePond.create(pond, {
      multiple: true,
      name: 'filepond',
      onaddfile: (err, fileItem) => {
        dispatch('addFile', {
          fileData: fileItem.getFileEncodeDataURL(),
        });
      },
    });
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
