<script>
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave'

  import Icon from '../../../components/Icon'
</script>

<style>
  .save-plate-btn {
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

<button class="save-plate-btn">
  <Icon width="1.5em" height="1.5em" fill="#fff" icon={faSave} />
</button>
