<script>
  import Icon from './Icon';

  export let icon;
</script>

<button
  class="bottom-0 right-0 m-4 rounded-full border-none bg-orange-400 fixed p-4
  cursor-pointer flex items-center justify-center">
  <Icon width="1.5em" height="1.5em" fill="#fff" {icon} />
</button>
