

<template>

<div class="about">
    <h1>This is an about page</h1>
</div>

</template>

<script>
import data from "../../../sample_data/project.json";
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
