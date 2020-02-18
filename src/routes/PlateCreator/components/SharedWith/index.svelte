<script>
  import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

  import Icon from '../../../../components/Icon/index.svelte';
  import plateStore from '../../../../store/plate';

  export let plateId;
  export let sharedWith;

  let newSharedWith = sharedWith;

  const removeUser = async id => {
    newSharedWith = newSharedWith.filter(res => res.id !== id);

    await plateStore.updatePlate({
      id: plateId,
      sharedWith: newSharedWith,
    });
  };
</script>

<div class="shadow bg-white rounded-lg p-4">
  <h3 class="text-xl font-bold text-gray-700 mb-4 ml-2 uppercase">
    Shared With
  </h3>
  <table class="table-auto">
    <thead>
      <tr>
        <th class="px-4 py-2 text-gray-700">First Name</th>
        <th class="px-4 py-2 text-gray-700">Last Name</th>
        <th class="px-4 py-2 text-gray-700">Username</th>
        <th class="px-4 py-2 text-gray-700">Remove</th>
      </tr>
    </thead>
    <tbody>
      {#each newSharedWith as user}
        <tr>
          <td class="border px-4 py-2">{user.firstName}</td>
          <td class="border px-4 py-2">{user.lastName}</td>
          <td class="border px-4 py-2">{user.username}</td>
          <td class="border px-4 py-2">
            <Icon
              class="cursor-pointer ml-4"
              fill="#F56565"
              icon={faTimes}
              height="1.5rem"
              width="1.5rem"
              on:click={() => removeUser(user.id)} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
