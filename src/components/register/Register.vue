<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign Up</h3>

        <!-- Nome -->
        <div class="form-group">
            <label for="">Name</label>
            <input type="text" class="form-control" v-model="name" placeholder="Name">
        </div>

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

        <button class="btn btn-primary btn-block">Sign Up</button>
    </form>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Register',
        data () {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            async handleSubmit(){
                const response = await axios.post('register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    

                });  
                
                console.log(response)
                this.$router.push('/login');
            }
        }
    }

</script>
