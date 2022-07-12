<template>
    <nav class="navbar">
        <img class="logo" src="https://adilo.com/images/logo.png" alt="logo" />
        <ul>
            <li><a href="#">Projects</a></li>
            <li class="active"><router-link to="/">Tools & App</router-link></li>
            <li><a href="#">Channels</a></li>
            <li><a href="#">Contacts</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Settings</a></li>
        </ul>
        <div class="profile">
            <span class="help">Help</span>
            <div class="vertical-line"></div>
            <div class="profile-content">
                <img class="profile-picture" src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg" alt="profile" />
                <div>
                    <h5>Cody Fisher</h5>
                    <span>codyfisher@gmail.com</span>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
}
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    padding: 0 2rem;
    align-items: center;
    height: 4rem;
    background: white;
}

.navbar .logo {
    width: 4rem;
    height: 1.5rem;
}

ul {
    display: flex;
    list-style: none;
}

ul li {
    margin-right: 2rem;
}

ul a {
    text-decoration: none;
    color: black;
}

ul .active {
    font-weight: 600;
}

ul .active::before {
    content: '';
    display: block;
    background: lightseagreen;
    width: 6.3%;
    height: 4px;
    position: absolute;
    top: 0;
    border-radius: 2px;
}

.profile {
    display: flex;
    align-items: center;
}

.vertical-line {
    width: 1px;
    height: 2rem;
    background-color: black;
    margin: 0 1rem;
}

.profile-content {
    display: flex;
    align-items: center;
}

.profile-picture {
    width: 2.5rem;
    height: 2.5rem;
}

.help, .profile-content h5 {
    font-weight: 700;
    font-size: 15px;
}

.profile-content h5 {
    margin-bottom: 2px;
}

.profile-content span {
    font-size: 12px;
}
</style>