<script>
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';

  import Icon from '../../../components/Icon';
</script>

<style>
  .save-plate-btn {
    bottom: 20px;
    right: 15px;
    border-radius: 50%;
  }
</style>

<button
  class="save-plate-btn border-none bg-orange-400 fixed p-4 cursor-pointer flex
  items-center justify-center">
  <Icon width="1.5em" height="1.5em" fill="#fff" icon={faSave} />
</button>
