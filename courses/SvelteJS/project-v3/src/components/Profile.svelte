<script>
  export let nickname;
  export let name;
</script>

<div class="Profile">
  <div class="Profile-container">
    <div class="Profile-avatar">
      <img src="" alt="" />
    </div>
    <div class="Profile-info">
      <h2>{nickname ? nickname : 'kevinjzea'}</h2>
      <span>{name ? name : 'Kevin J. Zea'}</span>
    </div>
  </div>
</div>
