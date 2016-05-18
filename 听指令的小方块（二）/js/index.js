/**
 * Created by tzr4032369 on 2016/4/19.
 */


//���ִ�������¼�
document.getElementById('run').onclick = function(){
    var text = document.getElementById('order').value;
    runCommand(text);
}

//ִ������
function runCommand(text){
    var order = text.toLowerCase(); //���ݴ�Сд
    switch(order){
        case 'go':
           active.go();
            break;
        case 'tun lef':
            active.turn(1);
            break;
        case 'tun rig':
            active.turn(3);
            break;
        case  'tun bac':
            active.turn(2);
            break;
        case  'tra lef':
            if(active.col ==1){return;}
            active.traLef();
            break;
        case  'tra rig':
            if(active.col ==10){return;}
            active.traRig();
            break;
        case  'tra top':
            if(active.row ==1){return;}
            active.traTop();
            break;
        case  'tra bot':
            if(active.row ==10){return;}
            active.traBot();
            break;
        case  'mov lef':
            if(active.col ==1){return;}
            active.movLef();
            break;
        case  'mov rig':
            if(active.col ==10){return;}
            active.movRig();
            break;
        case  'mov top':
            if(active.row ==1){return;}
            active.movTop();
            break;
        case  'mov bot':
            if(active.row ==10){return;}
            active.movBot();
            break;

        default :
    }
}

//��ڵ�activeNode
function activeNode(row,col){
    this.row = row;  //��
    this.col = col;  //��
    this.direction = 0;  //0���� 1���� 2���� 3����
    this.dom = function(){
        return innerDom;
    }
}

//��ʾ��ڵ�
activeNode.prototype.show = function(){
    this.dom().style.top = this.row*50+this.row-1+'px';
    this.dom().style.left = this.col*50+this.col-1+'px';
    this.dom().style.transform = "rotateZ(-"+this.direction*90+"deg)";
    var table = document.getElementsByTagName('table')[0];
    table.appendChild(this.dom());
}

activeNode.prototype.go = function(){
    switch(this.direction){
        case 0:
            if(this.row ==1){return;}
            this.dom().style.top = (parseInt(this.dom().style.top) - 51) +'px';
            this.row--;
            break;
        case 1:
            if(this.col ==1){return;}
            this.dom().style.left = (parseInt(this.dom().style.left) - 51) +'px';
            this.col--;
            break;
        case 2:
            if(this.row ==10){return;}
            this.dom().style.top = (parseInt(this.dom().style.top) + 51) +'px';
            this.row++;
            break;
        case 3:
            if(this.col ==10){return;}
            this.dom().style.left = (parseInt(this.dom().style.left) + 51) +'px';
            this.col++;
            break;
        default :

    }
}

//��ת��ڵ�
/*param:
    directionNum:��ת����
*/
activeNode.prototype.turn = function(directionNum){
    var newDirection =this.direction+directionNum;
    this.dom().style.transform = "rotateZ(-"+newDirection*90+"deg)";
    this.direction = (this.direction+directionNum)%4;  //���½ڵ㵱ǰ����
}

activeNode.prototype.traLef = function(){
    this.col --;
    this.dom().style.left = (parseInt(this.dom().style.left) - 51) +'px';
}

activeNode.prototype.traTop = function(){
    this.row --;
    this.dom().style.top = (parseInt(this.dom().style.top) - 51) +'px';
}

activeNode.prototype.traRig = function(){
    this.col ++;
    this.dom().style.left = (parseInt(this.dom().style.left) + 51) +'px';
}

activeNode.prototype.traBot = function(){
    this.row ++;
    this.dom().style.top = (parseInt(this.dom().style.top) + 51) +'px';
}

activeNode.prototype.movLef= function(){
    this.dom().style.transform = "rotateZ(-90deg)";
    this.direction =1;
    this.traLef();
}

activeNode.prototype.movRig= function(){
    this.dom().style.transform = "rotateZ(90deg)";
    this.direction =3;
    this.traRig();
}

activeNode.prototype.movTop= function(){
    this.dom().style.transform = "rotateZ(0deg)";
    this.direction =0;
    this.traTop();
}

activeNode.prototype.movBot= function(){
    this.dom().style.transform = "rotateZ(-180deg)";
    this.direction =2;
    this.traBot();
}

//ȫ�ֱ���:��ڵ�
var innerDom = document.createElement('div');
innerDom.className = 'active';

//ʵ������ڵ����
var active = new activeNode(5,6);
active.show();