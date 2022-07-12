<template>
  <div class="aside">
        <div class="menu active">
            <img src="https://www.freeiconspng.com/thumbs/recorder-icon/recorder-icon-7.png" alt="recorder">
            <span>My Recordings</span>
        </div>
        <div class="menu">
            <img src="https://cdn0.iconfinder.com/data/icons/essentials-solid/100/Share-512.png" alt="recorder">
            <span>Requested</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Aside"
}
</script>

<style scoped>
.aside {
    width: 20%;
    padding: 40px 20px;
    background: #f5f5f5;
    text-align: left;
}

.aside .menu {
    margin: 0 auto;
    margin-bottom: 30px;
    display: flex;
    width: 80%;
}

.aside .active {
    background: lavender;
    display: flex;
    align-items: center;
    padding-left: 20px;
    width: 100%;
    height: 35px;
    border-radius: 6px;
}

.aside .menu:hover, .aside .active:hover {
    cursor: pointer;
}

.aside .menu img {
    width: 20px;
    height: 20px;
    margin-right: 20px;
}
</style>