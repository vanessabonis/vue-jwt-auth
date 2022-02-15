import * as VueRouter from 'vue-router';
import Home from '../components/home/Home'
import Login from '../components/login/Login.vue'
import Register from '../components/register/Register.vue'
import Hello from '../views/Hello.vue'

const routes = [
    {
        path: '/', 
        name: 'Home',
        component: Home
    },
    {
        path: '/login', 
        name: 'Login',
        component: Login
    },
    {
        path: '/register', 
        name: 'Register',
        component: Register
    },
    {
        path: '/hello', 
        name: 'Hello',
        component: Hello
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router;