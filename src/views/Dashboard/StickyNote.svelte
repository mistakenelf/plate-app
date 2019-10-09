<script>
  let value = ''
</script>

<style>
  .sticky-note {
    background: #fffd75;
    padding: 10px;
  }

  .title {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }

  textarea {
    background: transparent;
    border: none;
    width: 100%;
  }
</style>

<div class="sticky-note">
  <div class="title">Quick Note:</div>
  <textarea rows="8" placeholder="Write a note" on:change {value} />
</div>
