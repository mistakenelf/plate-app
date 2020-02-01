<script>
  import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
  import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
  import { faFileImage } from '@fortawesome/free-solid-svg-icons/faFileImage';

  import Icon from '../../../components/Icon.svelte';
  import plateStore from '../../../store/plate';
  import Loader from '../../../components/Loader.svelte';

  export let imageSrc;
  export let plateId;

  let editing = false;
  let saving = false;
  let newImageSrc = imageSrc;
  let uploadComplete = false;
  let uploading = false;

  const handleEdit = () => {
    editing = true;
    uploadComplete = false;
    uploading = false;
    saving = false;
  };

  const handleUpload = e => {
    let reader;

    uploading = true;

    if (e.target.files && e.target.files[0]) {
      reader = new FileReader();

      reader.onload = function(e) {
        newImageSrc = e.target.result;
        uploadComplete = true;
        uploading = false;
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleRemove = () => {
    newImageSrc = '';
    handleSave();
  };

  const handleSave = async () => {
    editing = false;
    saving = true;

    await plateStore.updatePlate({
      id: plateId,
      image: newImageSrc,
    });

    saving = false;
  };
</script>

<div
  class="bg-white rounded-lg shadow flex items-center flex-col justify-center
  mb-6 md:mb-0 p-8 relative">
  {#if editing}
    <Icon
      class="cursor-pointer absolute right-0 top-0 m-2"
      fill="#4a5568"
      icon={faSave}
      height="1.2rem"
      width="1.2rem"
      on:click={handleSave} />
    <Icon
      class="cursor-pointer absolute left-0 top-0 m-2"
      fill="#F56565"
      icon={faTimes}
      height="1.5rem"
      width="1.5rem"
      on:click={handleRemove} />
  {:else}
    <Icon
      class="cursor-pointer absolute right-0 top-0 m-2"
      fill="#4a5568"
      icon={faEdit}
      height="1.2rem"
      width="1.2rem"
      on:click={handleEdit} />
  {/if}
  {#if editing && !uploading && !uploadComplete}
    <div class="bg-white rounded">
      <label
        class="flex flex-col items-center px-4 py-6 tracking-wide uppercase
        cursor-pointer">
        <svg
          class="w-8 h-8"
          fill="#4a5568"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20">
          <path
            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1
            4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4
            4h3v3h2v-3z" />
        </svg>
        <span class="mt-2 leading-normal text-gray-700">Select a file</span>
        <input type="file" class="hidden" on:change={handleUpload} />
      </label>
    </div>
  {/if}
  {#if newImageSrc && !saving && (!editing || uploadComplete)}
    <img src={newImageSrc} alt="plate image" />
  {/if}
  {#if saving}
    <Loader />
  {/if}
  {#if !newImageSrc && !editing && !saving}
    <Icon height="6rem" width="6rem" fill="#4a5568" icon={faFileImage} />
    <h3 class="text-lg text-gray-700 mt-4">No Image</h3>
  {/if}
</div>
