<script>
  import firebase from 'firebase/app';
  import page from 'page';

  import { user } from '../../../../store/user';

  const logout = async () => {
    await firebase.auth().signOut();
    user.set(null);
    page('/login');
  };
</script>

<nav
  class="fixed top-0 w-full flex bg-gray-800 justify-between pr-4 pl-4 h-12
  items-center shadow">
  <div class="flex items-center">
    <svg
      class="cursor-pointer md:hidden"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 6H20M4 12H20M4 18H11"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
    <div class="text-white text-3xl font-bold ml-2 md:ml-0">Plate</div>
  </div>
  <ul class="hidden md:flex flex-row">
    {#if $user}
      <li class="text-white ml-4 font-bold">
        <a href="/">Dashboard</a>
      </li>
      <li class="text-white ml-4 font-bold">
        <div class="cursor-pointer" on:click={logout}>Logout</div>
      </li>
    {/if}
    {#if !$user}
      <li class="text-white ml-4 font-bold">
        <a href="/login">Login</a>
      </li>
      <li class="text-white ml-4 font-bold">
        <a href="/register">Register</a>
      </li>
    {/if}
  </ul>
  <div class="flex flex-row">
    <svg viewBox="0 0 20 20" fill="#fff" class="w-8 h-8 cursor-pointer">
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2
        4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0
        004.546-2.084A5 5 0 0010 11z"
        clip-rule="evenodd" />
    </svg>
  </div>
</nav>
