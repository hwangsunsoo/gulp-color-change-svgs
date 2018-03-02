'use strict';

/**
 * gulp-color-change-svgs is a Gulp plugin for change color SVGs.
 *
 * @see https://github.com/hwangsunsoo/gulp-color-change-svgs.git
 * @author Sunsoo Hwang <hwangsunsoo@gmail.com>
 */

const gulp = require('gulp');
const replace = require('gulp-replace');
const rename = require("gulp-rename");

// 입력파일경로, 색상코드, 이름
const inputColor = {
	path: 'input/', code: '#000000', name: 'black'
};

// 출력파일경로, 색상코드, 이름
const outputColor = [
	{ path: 'red/', code: '#FF0000', name: 'red' },
	{ path: 'green/', code: '#00FF00', name: 'green' },
	{ path: 'blue/', code: '#0000FF', name: 'blue' },
];

gulp.task('colorChangeSvg', function(){
	console.log('[gulp-color-change-svgs] 시작');
	console.log('-------------------------------------------');
	outputColor.forEach(function(i){
		console.log(i.path+'에 '+i.name+' ('+i.code+') 이미지 생성');
		console.log(inputColor.name, i.name);
		gulp.src(inputColor.path+'*.svg')
			.pipe(rename(function (path) {
				path.basename = path.basename.replace(inputColor.name, i.name);
			}))
			.pipe(replace(inputColor.code, i.code))
			.pipe(gulp.dest('output/'+i.path));
	});
	console.log('-------------------------------------------');
	console.log('[gulp-color-change-svgs] 완료');
});
