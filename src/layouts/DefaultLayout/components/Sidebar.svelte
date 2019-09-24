<script>
  import { faTh } from '@fortawesome/free-solid-svg-icons/faTh'
  import { navigate } from 'svelte-routing'

  import Icon from '../../../components/Icon'

  function handleNavigate(path) {
    navigate(path)
  }
</script>

<style>
  .sidebar {
    width: 90px;
    background: plum;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
  }

  .sidebar-icon {
    margin: 20px 0px;
    cursor: pointer;
  }
</style>

<div class="sidebar">
  <div
    class="sidebar-icon"
    on:click={() => handleNavigate('/')}
    aria-label="dashboard"
    role="button">
    <Icon height="1.5em" width="1.5em" icon={faTh} fill="#fff" />
  </div>
</div>
