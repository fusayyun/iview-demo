<template>
	<Row :gutter="24" type="flex" justify="center">
		<Col  :md=24 :lg=16>
			<Card style="margin:32px 0 64px;" padding=0 v-for="work of works" :key="work.title" :to="work.to" target="_blank">
				<img class="thumbnail" :src="require(`@/assets/${work.src}`)" alt="">
				<div class="card-content">
					<h3>{{work.title}}</h3>
					<br>
					<p style="color:#808695
">{{work.to}}</p>
				</div>
			</Card>
			<br><br>
		</Col>

	</Row>

</template>
<script>
	export default{
		name:"Work",
		data(){
			return{
				works:[
					{
						title: "Bao Pin",
						to:"https://fusayyun.github.io/baopin/",
						src:"work1.jpg",
					},
					{
						title: "Books",
						to:"https://fusayyun.github.io/books/",
						src:"work2.jpg"
					}
				],
			}
		},
	}
</script>
<style>
	.thumbnail{
		width: 100%;
	}
	.card-content{
		padding: 16px;
	}
</style>