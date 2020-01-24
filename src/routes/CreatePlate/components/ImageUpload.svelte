<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let previewSrc;

  const handleChange = e => {
    let reader;

    if (e.target.files && e.target.files[0]) {
      reader = new FileReader();

      reader.onload = function(e) {
        previewSrc = e.target.result;
        dispatch('uploadImage', {
          file: e.target.result,
        });
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };
</script>

<div class="bg-white border-2 border-gray-400 rounded">
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
    <input type="file" class="hidden" on:change={handleChange} />
  </label>
  {#if previewSrc}
    <img src={previewSrc} alt="preview image" />
  {/if}
</div>
