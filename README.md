# gulp-color-change-svgs
SVG 파일들의 색상을 변경하여 새로운 파일들을 생성합니다. 같은 도안으로 여러 색상을 만들어야 하는 경우(테마 등)에 적합합니다.

## Introduction
`inputColor`에 정의한 원본 svg 파일의 폴더명(`input`)과 파일명(`black`)과 컬러코드(`#000000`)를 `outputColor`에 정의한 것을 참조하여 새로운 svg 파일을 만듭니다.

## Usage
clone 받은 후 아래 모듈을 설치해야하며 이에 의존적입니다.
```text
npm install --save gulp
npm install --save gulp-replace
npm install --save gulp-rename
```

`package.json` 파일에 이미 선언했기 때문에 `npm install`명령만으로 설치할 수 있습니다.

아래 명령어로 구동시킬 수 있으며 명령어는 변경 가능합니다.
```text
gulp colorChangeSvg
```

## Code
코드의 내용은 아래와 같습니다.
```javascript
'use strict';

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
```
