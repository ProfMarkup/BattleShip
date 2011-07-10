var BattleShip = {
	canvas: {},
	context: {},
	contextW: 0,
	contextH: 0,
	pole: [],
	poleSize:
		{
			width: 200,
			height: 200
		},
	playerPole:
		{
			x: 80,
			y: 80
		},
	enemyPole:
		{
			x: 180,
			y: 80
		},
	shipsCollection: [4,3,2,1],
	gameGridColor: '#fafafa',
	poleGridColor: '#eee',

	init: function() {
		this.canvas = document.getElementById('battleShip');
		this.context = this.canvas.getContext('2d');
		this.contextW = this.canvas.clientWidth;
		this.contextH = this.canvas.clientHeight;
		this.pole = new Array(10);
		for (var i=0; i<10; i++) {
			this.pole[i] = new Array(10);
		}
		for (var i=0; i<10; i++) {
			for (var j=0; j<10; j++) {
				this.pole[i][j] = 0;
			}
		}

		this.drawGame();
	},

	drawGame: function() {
		var x = this.playerPole.x;
		var y = this.playerPole.y;
		var width = this.poleSize.width;
		var height = this.poleSize.height;
	
		this.context.strokeStyle = '#e0e0e0';
		this.context.strokeRect(0,0,this.contextW,this.contextH);

		this.drawGrid();
		this.drawGrid(x, y, x + width, y + height, this.poleGridColor);
		this.drawPlayerPole();
		this.addShips();
	},

	drawGrid: function(x,y,width,height,color) {
		x = x+0.5||0.5;
		y = y+0.5||0.5;
		width = width||this.contextW;
		height = height||this.contextH;
		color = color||this.gameGridColor;

		this.context.beginPath();
		this.context.strokeStyle = color;
		for (var X=x ; X < width; X += 20) {
			this.context.moveTo(X,y-0.5);
			this.context.lineTo(X,height);
		}
		this.context.stroke();

		this.context.beginPath();
		for (var Y=y; Y < height; Y += 20) {
			this.context.moveTo(x-0.5,Y);
			this.context.lineTo(width,Y);
		}
		this.context.stroke();
	},

	drawPlayerPole: function() {
		var x = this.playerPole.x + 0.5;
		var y = this.playerPole.y + 0.5;
		var width = this.poleSize.width;
		var height = this.poleSize.height;

		this.context.strokeStyle = '#777';
		this.context.strokeRect(x, y, width, height);
	},

	addShips: function() {
// TODO: Параметры поля хранить в матрице. Метод сделать зависимым только от передаваемых ему координат поля в матрице о котором идёт речь в начале.
		var ships = this.ships;
		var x = this.playerPole.x;
		var y = this.playerPole.y;

//		var X = Math.floor(Math.random() * 10) * 20 + 80;
//		var Y = Math.floor(Math.random() * 10) * 20 + 80;

//		this.drawShip(X,Y,4,'horiz');
//		this.addShipToPole((Y-80)/20, (X-80)/20, 4, 'horiz');
		
		



//		for (var i=0, l=ships.length; i<l; i++) {
//			for (var j=0, n=ships[i]; j<n; j++) {
//				this.drawShip(x,y,i+1,'horiz');
//				x = x+20*(i+1)+20;
//			}
//		}
	},

	drawShip: function(x,y,size,direct) {
		x = x+1||1;
		y = y+1||1;
		size = size||1;
		var width = (direct == 'horiz') ? size*20-1 : 20-1;
		var height = (direct == 'vert') ? size*20-1 : 20-1;

		this.context.fillStyle = '#ccc';
		this.context.fillRect(x,y,width,height);
	},

	addShipToPole: function(row, col, size, direct) {
		var matrix = this.pole;
		
		
		for (var i=0; i<size; i++) {
			if (direct == 'horiz') {
				matrix[row][col+i] = 1;
			} else {
				matrix[row+1][col] = 1;
			}
		}
	},
	
	isEmptyCell: function(x,y) {
		return (this.pole[y-1][x-1] == 0) ? true : false;
	},
	
	showPole: function() {
		var s = new Array(10);

		for (i=0; i<10; ++i) {
			s[i]=this.pole[i].join("    ");
		}
		alert(s[0]+"\n"+s[1]+"\n"+s[2]+"\n"+s[3]+"\n"+s[4]+"\n"+s[5]+"\n"+s[6]+"\n"+s[7]+"\n"+s[8]+"\n"+s[9]);
	}
};

$(document).ready(function(){
	BattleShip.init();
});