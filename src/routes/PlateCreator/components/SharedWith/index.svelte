<script>
  export let plateId;
  export let sharedWith;
</script>

<div class="shadow bg-white rounded-lg p-4">
  <h3 class="text-xl font-bold text-gray-700 mb-4 ml-2 uppercase">
    Shared With
  </h3>
  <table class="table-auto">
    <thead>
      <tr>
        <th class="px-4 py-2">First Name</th>
        <th class="px-4 py-2">Last Name</th>
        <th class="px-4 py-2">Username</th>
      </tr>
    </thead>
    <tbody>
      {#each sharedWith as user}
        <tr>
          <td class="border px-4 py-2">{user.firstName}</td>
          <td class="border px-4 py-2">{user.lastName}</td>
          <td class="border px-4 py-2">{user.username}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
