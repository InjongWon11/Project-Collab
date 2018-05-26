import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard/Dashboard.vue";
import Project from "./views/Project/Project.vue";
import Search from "./views/Search/Search.vue";
import Setting from "./views/Settings/Settings.vue";
import Create from "./views/Create_Project/Create_Project.vue";

Vue.use(Router);
export default new Router({
	routes: [
		{
			path: "/",
			name: "Dashboard",
			component: Dashboard
		},
		{
			path: "/Create",
			name: "Create",
			component: Create
		},
		{
			path: "/Search",
			name: "Search",
			component: Search
		},
		{
			path: "/Project/:Project",
			name: "Project",
			component: Project
		},
		{
			path: "/Settings",
			name: "Settings",
			component: Setting
		}
	]
});
