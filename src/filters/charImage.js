import Vue from 'vue';

Vue.filter('charImage', charUrl => {
	const charId = charUrl.substr(27).replace(/\//g,'');
  return charUrl ? `https://s3-sa-east-1.amazonaws.com/star-quiz/images/${charId}.jpeg` : '';
});