<template>
	<Col span=24>
		<Tag v-for="skill of skills" :key="skill.language" size="large" :color="skill.color">{{skill.language}}</Tag>
	</Col>
</template>
<script>
	export default {
		name: 'Skills',
		data(){
			return{
				skills:[
					{
						language:"HTML",
						color:"warning"
					},
					{
						language:"JavaScript",
						color:"#d6ba32"
					},
					{
						language:"Bootstrap",
						color: "#7952b3"
					},
					{
						language:"Vue.js",
						color:"#70c096"
					},
					{
						language:"Google Apps Script",
						color:"#4285f4"
					}

				]
			}
		}
	}
</script>