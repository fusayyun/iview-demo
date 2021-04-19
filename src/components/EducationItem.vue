<template>
	<div>	
		<p class="time">{{year}}</p>
		<h3 class="degree">{{degree}}</h3>
		<p class="school">{{school}}</p>
		<ul class="content" :key="index" v-for='(item,index) in list'>
				<li>{{item}}</li>	
		</ul>
	</div>	
</template>
<script>
	export default {
		name: "EducationItem",
		// 承襲自上層Education.vue
		props:["year","degree","school","list"]
	}
</script>
<style scoped>
		.time{
			color: #AA0;
			font-size: 14px;
		}
		.degree{
			/*font-weight:bold;*/
		}
		.school{
			font-style: italic;
		}
		.content{
			padding-left: 20px;
		}

</style>