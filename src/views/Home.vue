<template>
	<Row :gutter="24" type="flex" justify="end">
		<!-- 主內文 -->
		<Col :md=24 :lg=16>
			<!-- Skills -->
			<h1 id="skills">Skills</h1>
			<br>
			<Row :gutter="24" type="flex" justify="center">
				<Skills></Skills>
			</Row>
			<br><br>
			<!-- Education -->
			<h1 id="education">Education</h1>
			<Divider />			
			<Row :gutter="24" type="flex" justify="center" align="middle">
				<Col :md=24 :lg=12>
					<iframe src="https://uploads.knightlab.com/storymapjs/8926d3a02c153b9b1d7cc5aca2148295/education/draft.html" frameborder="0" width="100%" height="450"></iframe>
				</Col>
				<Col :md=24 :lg=12  class='py'>
					<Education></Education>
				</Col>
			</Row>
			<br><br>
			<!-- Projects -->
			<h1 id="projects">Projects</h1>
			<Divider />
			<Row :gutter="24" type="flex" justify="center" align="middle">
					<Projects></Projects>
			</Row>
		</Col>
		<!-- 錨點 -->
		<Col span=0 :lg=4>
			<Anchor :offset-top="75" show-ink>
				<AnchorLink v-for="link of links" :key="link.href" :href="`#${link.href}`" :title="link.title"></AnchorLink>
			</Anchor>
		</Col>
	</Row>
</template>

<script>
// @ is an alias to /src
import Education from "@/components/Education.vue";
import Skills from "@/components/Skills.vue"
import Projects from"@/components/Projects.vue"
export default {
	name: "Home",
	components: {
		Education,
		Skills,
		Projects,
	},
	data(){
		return{
			links:[
				{
					href:"skills",
					title:"Skills"
				},
				{
					href:"education",
					title:"Education"
				},
				{
					href:"projects",
					title:"Projects"
				}
			]
		}
	}
};
</script>
<style>
	.py{
		padding: 20px 0;
	}	
</style>