<template>
	<Row class="layout-header-section">
		<Col>
			<p>I am <span class="typed-text"></span><span class="cursor">&nbsp;</span></p>
<!-- 			<h1>I am Fu, Si-Yun</h1> -->
		</Col>
	</Row>
</template>

<style scoped>
	@import url('https://fonts.googleapis.com/css?family=Montserrat');

	.layout-header-section{
		font-family: 'Montserrat', sans-serif;
		color: #eee;
		height: 360px;
		background: #999;
		justify-content: center;
		align-items: center;
		display: flex;
	}
	.ivu-col p {
		font-size: 3rem;
		padding: 0.5rem;
		font-weight: bold;
		letter-spacing: 0.1rem;
		text-align: center;
		overflow: hidden;
	}
	.ivu-col p span.typed-text {
		font-weight: normal;
		color: #ededca;
	}
	.ivu-col p span.cursor {
		display: inline-block;
		background-color: #eee;
		margin-left: 0.1rem;
		width: 20px;
		animation: blink 1s infinite;
		height: 5px;
	}
	.ivu-col p span.cursor.typing {
		animation: none;
	}
	@keyframes blink {
		0%  { background-color: #eee; }
		49% { background-color: #eee; }
		50% { background-color: transparent; }
		99% { background-color: transparent; }
		100%  { background-color: #eee; }
	}
</style>