// 1
document.querySelector('.box').onmousemove = function(e){
	var x = e.offsetX;  
	var y = e.offsetY;
	var out = document.querySelector('.out');
	out.innerHTML = x+' '+y;
}

// 2
document.querySelector('.folder').onclick = f1;
function f1(){
	this.style.backgroundImage = 'url(img/folder-open.png)';
	this.style.backgroundSize = 'cover';
}
document.querySelector('.folder').ondblclick = f2;
function f2(){
	this.style.backgroundImage = 'url(img/folder-close.png)';
	this.style.backgroundSize = 'cover';
}


// 3
var output = document.querySelector('output');
var out = '';
for (var i = 0; i < 300; i++) {
	out += `<div class="block"></div>`;
}
output.innerHTML = out;
var block = document.getElementsByClassName('block');
for (var i = 0; i < block.length; i++) {
	block[i].onmouseenter = function() {
		this.style.borderRadius = '50%';
	};
	block[i].onmouseleave = function() {
		this.style.borderRadius = 0;
	}
}

// 4
var out = document.querySelector('.block4');
var p = document.getElementsByClassName('min-img');

for (var i = 0; i < p.length; i++) {
	p[i].onclick = f4;
	function f4() {
		out.style.backgroundSize = 'contain';
		out.style.backgroundImage = 'url("' + this.currentSrc + '")';
	}
}

// 5
var w = 100;
document.querySelector('.block5').onclick = function(){
	this.style.marginTop = w+'px';
	w=w+100;
}

// 6
var bl = document.querySelector('.block6');
var b = document.querySelector('.bl');
var l = 0;

document.querySelector('.block6').onclick = function(){
	if (l == 0) {
		bl.style.float = 'none';
		bl.style.margin = '0 auto';
		l++;
		console.log(l);
	} else if (l == 1) {
		bl.style.float = 'right';
		l++;
		console.log(l);
	} else if (l == 2) {
		bl.style.float = 'left';
		l = 0;
		console.log(l);
	}
}


