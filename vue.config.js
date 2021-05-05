module.exports = {
	// 檔名不要出現雜湊值
	filenameHashing: false,
	publicPath: process.env.NODE_ENV === 'production'
    ? '/iview-demo/'
    : '/'
	// css: {
	// 	loaderOptions: {
	// 		less: {
	// 			// 選項會傳遞給 css-loader
	// 			lessOptions: {
	// 				javascriptEnabled: true
	// 			}
	// 		}
	// 	}
	// },
}