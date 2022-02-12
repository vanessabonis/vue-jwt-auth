<template>
    <form action="">
        <h3>Login</h3>
        <!-- Email -->
        <div class="form-group">
            <label for="">Email</label>
            <input type="email" class="form-control" placeholder="Email">
        </div>

        <!--Senha-->
        <div class="form-group">
            <label for="">Password</label>
            <input type="password" class="form-control" placeholder="Password">
        </div>

        <button class="btn btn-primary btn-block">Login</button>
    </form>
</template>

<script>

export default {
    name: 'Login'
}
</script>
