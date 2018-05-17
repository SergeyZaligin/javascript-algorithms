function Stack() {

	var items = [];

	this.push = function(element){
		items.push(element);
	};

	this.pop = function(){
		return items.pop();
	};

	this.peek = function(){
		return items[items.length-1];
	};

	this.isEmpty = function(){
		return items.length == 0;
	};

	this.size = function(){
		return items.length;
	};

	this.clear = function(){
		items = [];
	};

	this.print = function(){
		console.log(items.toString());
	};

}

var stack = new Stack();

console.log('Stack is empty', stack.isEmpty());

stack.push(5);
stack.push(8);

console.log('Stack is empty', stack.isEmpty());

stack.push(11);
stack.push(15);


console.log('Stack size', stack.size());

stack.pop();
stack.pop();

console.log('After pop', stack.size());

stack.print(); 

console.log('Last elem', stack.peek());

