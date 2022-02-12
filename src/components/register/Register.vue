<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign Up</h3>

        <!-- Nome -->
        <div class="form-group">
            <label for="">First Name</label>
            <input type="text" class="form-control" placeholder="First Name">
        </div>

        <!-- Sobrenome -->
        <div class="form-group">
            <label for="">Last Name</label>
            <input type="text" class="form-control" placeholder="Last Name">
        </div>

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

        <!--Confirmar Senha-->
        <div class="form-group">
            <label for="">Confirm Password</label>
            <input type="password" class="form-control" placeholder="Confirm Password">
        </div>

        <button class="btn btn-primary btn-block">Sign Up</button>
    </form>
</template>

<script>

    export default {
        name: 'Register',
        data () {
            return {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirm: ''
            }
        },
        methods: {
            handleSubmit(){
                console.log('Registrado com Sucesso!');
            }
        }
    }

</script>
