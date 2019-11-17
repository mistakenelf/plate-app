<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import page from 'page';

  import Icon from '../../../components/Icon';
</script>

<style>
  .new-plate-btn {
    bottom: 20px;
    right: 15px;
    border-radius: 50%;
  }
</style>

<button
  class="new-plate-btn border-none bg-orange-400 fixed p-4 cursor-pointer flex
  items-center justify-center"
  on:click={() => page('/create-plate')}>
  <Icon width="1.5em" height="1.5em" fill="#fff" icon={faPlus} />
</button>
