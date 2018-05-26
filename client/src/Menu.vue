<style>
/*
menu bar styling
*/

.menu {
	overflow: hidden;
	background-color: #333;
	font-family: Arial, Helvetica, sans-serif;
}

router-link {
	float: left;
	font-size: 16px;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
}

/*
setting button and dropdown button styling
*/

.setting {
	float: right;
	overflow: hidden;
}

.setting .dropbtn {
	font-size: 16px;
	border: none;
	outline: none;
	color: white;
	padding: 14px 16px;
	background-color: inherit;
	font-family: inherit;
	margin: 0;
}

/*
dropdown content styling
*/

.dropdown-content {
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	min-width: 80px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
}

.dropdown-content router-link {
	float: none;
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
	text-align: center;
}

.dropdown-content a:hover {
	background-color: #ddd;
}

.setting:hover .dropdown-content {
	display: block;
}
</style>

<template>

<div class="menu">
    <router-link to="/">Dashboard</router-link>
    <router-link to="/Search">Search</router-link>
	<router-link to="/Create">Create Project</router-link>
	<router-link to="/Settings">Settings</router-link>

</div>

</template>

<script>
export default {
	name: "Menu",
	methods: {},
	data() {
		return {};
	}
};
</script>
