var obj = {
	instance1: function () {
		return this;
	},
	instance2: function () {
		return this;
	},
	compare: function () {
		return this instanceof this;
	}
}


console.log(obj.compare());