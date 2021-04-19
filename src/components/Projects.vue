<template>
	<Col span=24>
		<Row>
			<Col 
				v-for="(project,index) in projects"
				:key="index"
				span=7
				:offset="[index%3===0?0:1]"
				class="py">
					<Card @click.native.stop="onCardClick(index,$event)" :class="[index===activeIndex?'selected':'']">
						<p slot="title">{{project.title}}</p>
						<p>{{project.content}}</p>
					</Card>
			</Col>
		</Row>
		<br>
		<Row>
			<Col span=24>
				<Carousel
					height="600px">
					<CarouselItem v-for="(media,index) in projectInfo" :key="index">
						<ProjectInfo class="carousel" :media="media" :isVideo="isVideo">
						</ProjectInfo>
					</CarouselItem>
				</Carousel>			
			</Col>
		</Row>
	</Col>
</template>
<script>
	import ProjectInfo from "@/components/ProjectInfo.vue"
	export default{
		name: "Projects",
		components: {
			ProjectInfo,
		},
		data(){
			return{
				projects:[
					{
						title:"Emotion Detection Model",
						content:"Python: OpenCV, TensorFlow, Keras",
						image:['project1-1.png',
							'project1-2.png',
							'project1-3.jpg',
							'project1-4.png']
					},
					{
						title:"Personal Data Management System",
						content:"Google Apps Script: HTML+JS",
						video:[
							'https://www.youtube.com/embed/9n7RjcoXQV4',
							'https://www.youtube.com/embed/umjvFDQLQ9U',
							'https://www.youtube.com/embed/SmruY3wLnk8',
							'https://www.youtube.com/embed/h2qSB9vhWj0'
						],
					},
					{
						title:"Personal Information Files Nonidentifiable System",
						content:"Google Apps Script: HTML+JS",
						image:['project2-1.png',
							'project2-2.png',
							'project2-3.png',
							'project2-4.png'],
					},
				],
				activeIndex:0,
				isVideo:false,
			}
		},
		computed:{
			projectInfo(){
				// console.log(this.projects[this.activeIndex].image);
				if (this.projects[this.activeIndex].image) {
					return this.projects[this.activeIndex].image;
				}else{
					// console.log(this.projects[this.activeIndex].video[0].url);
					return this.projects[this.activeIndex].video;
				}
				
			}
		},
		methods:{
			// 卡片點擊處理
			onCardClick(index,event){
				console.log(this,event);
				console.log("click",index);
				this.activeIndex=index;
			}
		},
		watch:{
			activeIndex(){
					console.log('catch you');
					if (this.projects[this.activeIndex].video){
						this.isVideo=true;
					}	else{
						this.isVideo=false;
					}
			}
		}

	}
</script>
<style>
	.selected{
		box-shadow: 0 1px 10px #AA0;
	}
	.carousel{
		width: 100%;
		height: 100%;
	}
	.center {
	  display: block;
	  margin-left: auto;
	  margin-right: auto;
	}
</style>
