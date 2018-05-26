<style>
body {
	margin: 0;
}

/*
menu bar styling
*/

.menu {
	overflow: hidden;
	background-color: #333;
	font-family: Arial, Helvetica, sans-serif;
}

.menu a {
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

.dropdown-content a {
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

<div id="app">
    <Menu/>
    <router-view/>
</div>

</template>

<script>
import Menu from "./Menu.vue";
export default {
	name: "App",
	components: {
		Menu
	}
};
</script>
