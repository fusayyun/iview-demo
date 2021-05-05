<template>
	<div id="app" class="layout">
		<Layout>
			<Header class="layout-header-bar">
				<Menu mode="horizontal" theme="dark">
					<Logo></Logo>
					<div class="layout-nav">
						<MenuItem name="about" to="/">
							<Icon></Icon>							
							關於我
						</MenuItem>
						<MenuItem name="myWork" to="/work">
							<Icon></Icon>
							作品集
						</MenuItem>
					</div>
				</Menu>
			</Header>
			<HeaderSection>				
			</HeaderSection>

			<Content  :style="{margin: '20px 20px 0', padding:'24px' , minHeight: '500px', background: '#fff'}">
				<router-view />     
			</Content>
			<Row type="flex" justify="end">
				<Col span=4>
					<div class="affix">
	          <ButtonGroup vertical>
			        <Button size="large" icon="logo-github" to="https://github.com/fusayyun" target="_blank"></Button>
			        <Button size="large" icon="logo-linkedin" to="https://www.linkedin.com/in/fusiyun/"
			        target="_blank"></Button>
			    	</ButtonGroup>
		    	</div>
				</Col>
	    	<BackTop></BackTop>
			</Row>
			<Footer class="layout-footer-center">Copyright &copy; 2021 | 中興資管所。Si-Yun Fu</Footer>
			
		</Layout>

	</div>
</template>
<script>
	import Logo from "@/components/Logo.vue"
	import HeaderSection from "@/components/HeaderSection.vue"
	export default{
		components:{
			Logo,
			HeaderSection,
		},
	}
</script>

<style scoped>
	.layout {
/*		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
/*		text-align: center;*/
		height: 100%;
    width: 100%;
		color: #2c3e50;
		border: 1px solid #d7dde4;
		position: relative;
		border-radius: 4px;
	}
	.layout-header-bar{
		position: fixed;
		width: 100%;
		background: #999;
		z-index: 900;
	}
	.layout-nav{
		width: 420px;
		margin: 0 auto;
		margin-right: 20px;
	}
	.layout-footer-center{
		text-align: center;
	}
	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
	.affix{
		position: fixed;
		right: 20px;
		bottom: 100px;
	}

</style>
