const env = process.env;



// export const nodeEnv = env.NODE || 'development';

// export const logStars = function(message) {
// 	console.info('*********');
// 	console.info(message);	
// 	console.info('*********');
// };

export default {
	port: env.PORT || 8888
};