<template>
	<div class="layout-logo">
		<Row :gutter="6">
			<Col>
				<router-link to="/">
					<img src="../assets/logo.png" alt="">
				</router-link>
			</Col>
			<Col>
				思允
				<br>
				Si-Yun Fu
			</Col>
		</Row>
	</div>
</template>
<script>
	export default {
  	name:"Logo",
  }
</script>
<style scoped>
	.layout-logo{
    width: 100px;
    height: 35px;
    color: #fff;
    margin-right: 20px;
/*    background: #5b6270;*/
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    line-height: 16px;
    text-align: left;
	}
</style>