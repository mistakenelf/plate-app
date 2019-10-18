<script>
  import { navigate } from 'svelte-routing'
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'

  import Icon from '../../components/Icon'
</script>

<style>
  .new-plate-btn {
    border: none;
    background: orange;
    position: fixed;
    bottom: 20px;
    right: 15px;
    padding: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
</style>

<button class="new-plate-btn" on:click={() => navigate('create-plate')}>
  <Icon width="1.5em" height="1.5em" fill="#fff" icon={faPlus} />
</button>
