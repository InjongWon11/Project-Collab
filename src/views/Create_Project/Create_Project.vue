<template>

<div class="creat">
    Create Project
</div>

</template>
<script>
import data from "../../../sample_data/create_project.json";
export default {
	//this is lifecycle hook
	created() {
		//this is an example of using methods defined within the component
		//this.get_personal_data();
		this.log();
	},
	data: function() {
		return { data };
	},
	methods: {
		//This is an example of defining a method within an function
		log() {
			console.log(data);
		}
	}
};
</script>
