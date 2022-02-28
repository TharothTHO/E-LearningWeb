<template>
<div class="container">
        <div class="logo">
            <img class="img" src="../assets/img/gic.png" alt="logo">
        </div>
        <div class="title">
            <h2>
                GIC E-Learning System
            </h2>
        </div>
        <div class="navi-menu">
            <ul>
                <router-link class="link" to="#">Home</router-link>
                <router-link class="link" to="#">Login</router-link>
                <router-link class="link" to="#">Signup</router-link>
            </ul>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container {
    display: flex;
    justify-content: space-between;
    padding-top: 30px; 
}
.logo {
    display: flex-start;
    float: left;
}
.navi-menu {
    display: flex-end;
    float: right;
}
.title {
    padding-top: 30px;
}
.img {
    width: 150px;
    padding-left: 15px;
}
.link {
    padding: 20px;
}



</style>