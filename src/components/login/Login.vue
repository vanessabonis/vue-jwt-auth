<template>
    <form @submit.prevent="handleSubmit">
        <h3>Login</h3>
        <!-- Email -->
        <div class="form-group">
            <label for="">Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email">
        </div>

        <!--Senha-->
        <div class="form-group">
            <label for="">Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password">
        </div>

        <button class="btn btn-primary btn-block">Login</button>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async handleSubmit () {
            const response = await axios.post('login', {
                email: this.email,
                password: this.password
            });

            localStorage.setItem('token', response.data.token);
            this.$router.push('/gereciador');
        }
    }
    
}
</script>
