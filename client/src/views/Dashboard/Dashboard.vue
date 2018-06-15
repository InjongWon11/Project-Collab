<style media="screen">
    .dashboard {
        display: grid;
        grid-template-columns: 60vw 30vw ;
        padding: 2vw;
        background-color: #f7f7fa;
    }
    .project-container {
        display: inline-grid;
        grid-template-columns: auto;
    }
    .project {
        background-color: #ffffff;
        box-shadow:0 0 0 1px black;
        padding: 1vw;
    }
    .skill {
        margin-right: 3px;
        background-color: #f0f0f5;
    }
    .user_info {
        display: inline-grid;
        grid-template-columns: 50% 50%;
    }
    .user_details {
        grid-column: 1/3;
    }
    .name {
        text-align: center;
    }
    .photo{
        grid-area: 1/2/3/2;
        margin: 1vw;
        padding: 1vw;
    }
</style>

<template>

<div class="dashboard">
    <div class="user_info">
        <h1 class="name">{{data.name}}</h1>
        <div class="photo">
            <img v-bind:src="data.photo" v-bind:alt="data.name">
        </div>
        <p><b>Program: </b> {{data.program}} </p>
        <div class="user_details">
            <p>{{data.description}}</p>
            <span v-for="skill in data.skills" class="skill">
                {{skill}}
            </span>
        </div>
    </div>
    <div class="project-container">
        <h2>Projects:</h2>
        <div v-for="project in data.projects" class="project">
            <h4><a v-bind:href="'./'+ project.projectID">{{project.name}}</a></h4>
            <div v-if="project.link">
                website: <a v-bind:href="project.link">{{project.link}}</a>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import data from "../../../sample_data/dashboard.json";
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
