<script>
  import Button from '../../components/Button';

  const handleGoogleLogin = () => {
    window.firebase
      .auth()
      .signInWithPopup(new window.firebase.auth.GoogleAuthProvider());
  };
</script>

<div class="flex items-center justify-center flex-col h-full">
  <h1 class="text-4xl text-gray-700">Welcome to Plate</h1>
  <Button label="Login with Google" on:click={handleGoogleLogin} />
</div>
