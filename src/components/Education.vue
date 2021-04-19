<template>
	<Timeline class='py'>
		<TimelineItem
			v-for="(school,index) in schools"
			:key="index"
			:color="[index===activeTimelineItem?'yellow':'#AA0']"
		>
			<EducationItem v-bind="school"></EducationItem>
		</TimelineItem>
	</Timeline>
</template>
<script>
	import EducationItem from "@/components/EducationItem.vue"
	export default{
		name: "Education",
		components: {
			EducationItem,
		},
		data() {
			return{	
				activeTimelineItem:0,	
				schools:[
					{
						year: "Aug. 2019 – Mar. 2020",
						degree: "Exchange Program in Computer Science",
						school: "Hochschule Darmstadt",
						list:[
							"Professional courses of Parallel and Distributed Computing"
						]
					},
					{
						year: "Sept. 2017 – Feb. 2020",
						degree: "Master in Management Information Systems",
						school: "National Chung Hsing University",
						list:[
							"Professional courses of Network Security, Data Science, and Artificial Intelligence",
							"Management course for College Cores",
							"Personal Information Management System Lead Auditor Training Course and Passed the exam",
							"Research for Personal Information Management System"
						]
					},
					{
						year: "Sept. 2013 – July 2017",
						degree: "Bachelor in Foreign Language",
						school: "National Chiayi University",
						list:[
							"Completed course work in English language, linguistics and literature study",
							"Completed course for the Track of Business Communication and Management, and the Track of Translation"
						]
					},
				],
		}
		}

	}
</script>