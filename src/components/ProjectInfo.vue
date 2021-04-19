<template>
<!-- 	<div>
		<p>{{$props}}</p>
	</div> -->
		<Row type="flex" align="middle" justify="center">
			<Col span=24>
				<iframe class="center" v-if="isVideo" :src="`${media}?&autoplay=1`" height="600px" width="100%"></iframe>
				<img class="center" width="100%" type="flex" v-else :src="require(`@/assets/${media}`)" alt="">
			</Col>
		</Row>	
</template>
<script>
	export default{
		name:"ProjectInfo",
		props:['media','isVideo'],
	}
</script>