<script>
  export let comments = [];

  function addComment(event) {
    const msg = event.target.text.value;

    if (msg.length > 3) {
      const message = { id: Date.now(), text: msg, username: 'kevinjzea' };
      comments = [...comments, message];

      event.target.text.value = '';
    }
  }
</script>

<div class="Comments">
  <div class="Comments-content">
    {#each comments as comment (comment.id)}
      <div class="Comments-users">
        <h3>{comment.username}</h3>
        <span>{comment.text}</span>
      </div>
    {/each}

    <div class="Comments-add">
      <form on:submit|preventDefault={addComment}>
        <input
          type="text"
          class="Comments-input"
          placeholder="Add comment..."
          id="text"
        />

        <button type="submit">Post</button>
      </form>
    </div>
  </div>
</div>
