(function (M01K00H01_c, img, cjs, ss, an) {

var p; // shortcut to reference prototypes

M01K00H01_c.ssMetadata = [];



// symbols:



(M01K00H01_c.bmp_bg1 = function() {
	this.initialize(img.bmp_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1558,928);


(M01K00H01_c.bmp_clue_circle = function() {
	this.initialize(img.bmp_clue_circle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,609,609);


(M01K00H01_c.bmp_hand = function() {
	this.initialize(img.bmp_hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,137);


(M01K00H01_c.bmp_logo_opening = function() {
	this.initialize(img.bmp_logo_opening);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,602,167);


(M01K00H01_c.bmp_opening_bg = function() {
	this.initialize(img.bmp_opening_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1800,941);


(M01K00H01_c.bmp_opening_mulai = function() {
	this.initialize(img.bmp_opening_mulai);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,92);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(M01K00H01_c.mc_text_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new M01K00H01_c.bmp_opening_mulai();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.522,0.5217);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(M01K00H01_c.mc_text_04, new cjs.Rectangle(0,0,156.6,48), null);


(M01K00H01_c.mc_text_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A39D").s().p("AA8CJIAAiOQAAgggPgPQgNgQgbAAQgcAAgSASQgSASAAAjIAACGIhNAAIAAkNIBKAAIAAAgQAQgRAWgJQAXgKAbABQAyAAAfAeQAfAdgBA8IAACZg");
	this.shape.setTransform(442.75,51.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A39D").s().p("AhQCAQgXgKgMgTQgMgSAAgYQAAglAcgVQAdgVA7gBIA9AAQAAgZgQgOQgPgOgeAAQgWAAgUAHQgVAHgPALIgcg2QAWgPAfgJQAfgJAgABQA+AAAhAeQAiAdAAA8IAACZIhJAAIAAgiQgWAlg7AAQgfAAgXgKgAgzA2QAAAOAMAKQAMAIAUAAQATAAAQgKQAPgIAHgTIAAgbIg1AAQgwAAAAAgg");
	this.shape_1.setTransform(409.175,51.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A39D").s().p("AhQCAQgXgKgMgTQgMgSAAgYQAAglAcgVQAdgVA7gBIA9AAQAAgZgQgOQgPgOgeAAQgWAAgUAHQgVAHgPALIgcg2QAWgPAfgJQAfgJAgABQA+AAAhAeQAiAdAAA8IAACZIhJAAIAAgiQgWAlg7AAQgfAAgXgKgAgzA2QAAAOAMAKQAMAIAUAAQATAAAQgKQAPgIAHgTIAAgbIg1AAQgwAAAAAgg");
	this.shape_2.setTransform(378.325,51.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A39D").s().p("Ah3CzQgVgHgNgLIAcg4QAKAIALAEQAMAFAMAAQAPAAALgHQAJgJAJgRIABgDIh1kOIBRAAIBKC3IBMi3IBLAAIh5EcQgTAvgbATQgaATgnAAQgVAAgUgGg");
	this.shape_3.setTransform(348.7,56.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A39D").s().p("AhQCAQgXgKgMgTQgMgSAAgYQAAglAcgVQAdgVA7gBIA9AAQAAgZgQgOQgPgOgeAAQgWAAgUAHQgVAHgPALIgcg2QAWgPAfgJQAfgJAgABQA+AAAhAeQAiAdAAA8IAACZIhJAAIAAgiQgWAlg7AAQgfAAgXgKgAgzA2QAAAOAMAKQAMAIAUAAQATAAAQgKQAPgIAHgTIAAgbIg1AAQgwAAAAAgg");
	this.shape_4.setTransform(317.575,51.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A39D").s().p("AgmDFIAAkMIBNAAIAAEMgAgih5QgOgNAAgSQAAgTAOgMQAOgNAUAAQAWAAANAMQANAMAAASQAAAUgNAMQgNANgWAAQgUAAgOgMg");
	this.shape_5.setTransform(295.4,45.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A39D").s().p("AhHCYIAAAgIhKAAIAAlyIBNAAIAACCQAeghAyABQAmAAAfAQQAeASASAfQARAfAAApQAAAqgRAfQgSAfgeARQgfASgmgBQg2AAgdgjgAgxgEQgUATAAAiQAAAiAUAUQATAVAegBQAdABATgVQATgUAAgiQAAgigTgTQgTgUgdAAQgeAAgTAUg");
	this.shape_6.setTransform(271.65,46.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A39D").s().p("ACVCJIAAiOQAAgggNgPQgNgQgZAAQgbAAgQASQgQARAAAjIAACHIhNAAIAAiOQAAg/gzAAQgbAAgQASQgQARAAAjIAACHIhOAAIAAkNIBKAAIAAAfQAPgRAWgIQAWgJAaAAQAcgBAXAMQAWALAOAVQARgUAZgMQAZgMAeABQAzAAAdAeQAeAdAAA8IAACZg");
	this.shape_7.setTransform(227.275,51.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A39D").s().p("AhEB5QgjgSgTgfQgTggAAgoQAAgmATghQATgfAggRQAhgTAoABQAnAAAgAQQAgASATAfQASAgAAApIgCAVIjKAAQAFAZAVAPQAUAOAeAAQAVAAAQgGQAQgGAOgOIAqAtQgmArhJAAQgtAAgjgRgAgpg/QgSAOgEAaICDAAQgEgZgSgPQgSgQgaAAQgZABgSAPg");
	this.shape_8.setTransform(185.175,51.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A39D").s().p("AiXCvIAAldICXAAQAuAAAiAPQAjAQASAcQATAdAAAnQAAAmgTAcQgSAdgjAPQgiAQguAAIhGAAIAABggAhGAMIBCAAQAkAAATgOQATgQAAgdQAAgdgTgQQgTgQgkAAIhCAAg");
	this.shape_9.setTransform(152.125,47.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A39D").s().p("AA1C6IhUhqIgmAlIAABFIhNAAIAAlyIBNAAIAADQIBxhrIBdAAIhvByIB5Cbg");
	this.shape_10.setTransform(104,46.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A39D").s().p("AhLB5QgigSgTgfQgTggAAgoQAAgnATggQATgfAigRQAigTApABQArgBAhATQAiARATAfQATAgAAAnQAAAogTAgQgTAfgiASQghARgrAAQgpAAgigRgAgwg1QgUAUAAAhQAAAiAUAUQATAVAdgBQAeABATgVQAUgUAAgiQAAghgUgUQgTgUgeAAQgdAAgTAUg");
	this.shape_11.setTransform(69.275,51.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A39D").s().p("AA1C6IhUhqIglAlIAABFIhPAAIAAlyIBPAAIAADQIBwhrIBeAAIhxByIB7Cbg");
	this.shape_12.setTransform(38.25,46.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A39D").s().p("AhLB5QgigSgTgfQgTggAAgoQAAgnATggQATgfAigRQAigTApABQArgBAhATQAiARATAfQATAgAAAnQAAAogTAgQgTAfgiASQghARgrAAQgpAAgigRgAgwg1QgUAUAAAhQAAAiAUAUQATAVAdgBQAeABATgVQAUgUAAgiQAAghgUgUQgTgUgeAAQgdAAgTAUg");
	this.shape_13.setTransform(3.525,51.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A39D").s().p("AiXCvIAAldICXAAQAuAAAiAPQAjAQASAcQATAdAAAnQAAAmgTAcQgSAdgjAPQgiAQguAAIhGAAIAABggAhGAMIBCAAQAkAAATgOQATgQAAgdQAAgdgTgQQgTgQgkAAIhCAAg");
	this.shape_14.setTransform(-30.125,47.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A39D").s().p("AA7CJIAAiOQAAgggNgPQgOgQgbAAQgcAAgSASQgSASAAAjIAACGIhOAAIAAkNIBLAAIAAAgQAPgRAXgJQAYgKAaABQAyAAAfAeQAeAdAAA8IAACZg");
	this.shape_15.setTransform(-80.8,51.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A39D").s().p("AhQCAQgXgKgMgTQgMgSAAgYQAAglAcgVQAdgVA7gBIA9AAQAAgZgQgOQgPgOgeAAQgWAAgUAHQgVAHgPALIgcg2QAWgPAfgJQAfgJAgABQA+AAAhAeQAiAdAAA8IAACZIhJAAIAAgiQgWAlg7AAQgfAAgXgKgAgzA2QAAAOAMAKQAMAIAUAAQATAAAQgKQAPgIAHgTIAAgbIg1AAQgwAAAAAgg");
	this.shape_16.setTransform(-114.375,51.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A39D").s().p("AA1C6IhUhqIglAlIAABFIhPAAIAAlyIBPAAIAADQIBwhrIBeAAIhxByIB7Cbg");
	this.shape_17.setTransform(-143.65,46.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A39D").s().p("AhQCAQgXgKgMgTQgMgSAAgYQAAglAcgVQAdgVA7gBIA9AAQAAgZgQgOQgPgOgeAAQgWAAgUAHQgVAHgPALIgcg2QAWgPAfgJQAfgJAgABQA+AAAhAeQAiAdAAA8IAACZIhJAAIAAgiQgWAlg7AAQgfAAgXgKgAgzA2QAAAOAMAKQAMAIAUAAQATAAAQgKQAPgIAHgTIAAgbIg1AAQgwAAAAAgg");
	this.shape_18.setTransform(-178.225,51.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A39D").s().p("AhWDoIAVg4QAOAJATAAQAPAAAJgJQAIgKAAgUIAAkMIBNAAIAAEMQAAAvgaAbQgbAbgvAAQgpAAgWgPgAADisQgMgMAAgTQAAgSAMgNQAOgMAVAAQAWAAANAMQAOAMAAASQAAATgOANQgNANgWAAQgVAAgOgNg");
	this.shape_19.setTransform(-204.175,50.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A39D").s().p("AgmDFIAAkMIBNAAIAAEMgAgih5QgNgNAAgSQAAgTANgMQANgNAVAAQAVAAAOAMQAOAMAAASQAAAUgOAMQgOANgVAAQgVAAgNgMg");
	this.shape_20.setTransform(-215.75,45.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A39D").s().p("AhHCYIAAAgIhLAAIAAlyIBPAAIAACCQAdghAzABQAlAAAeAQQAgASARAfQASAfAAApQAAAqgSAfQgRAfggARQgeASglgBQg3AAgdgjgAgxgEQgTATAAAiQAAAiATAUQATAVAegBQAdABATgVQAUgUAAgiQAAgigUgTQgTgUgdAAQgeAAgTAUg");
	this.shape_21.setTransform(-239.5,46.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A39D").s().p("AhEB5QgjgSgTgfQgTggAAgoQAAgmATghQATgfAggRQAhgTAoABQAnAAAgAQQAgASATAfQASAgAAApIgCAVIjKAAQAFAZAVAPQAUAOAeAAQAVAAAQgGQAQgGAOgOIAqAtQgmArhJAAQgtAAgjgRgAgpg/QgSAOgEAaICDAAQgEgZgSgPQgSgQgaAAQgZABgSAPg");
	this.shape_22.setTransform(-273.525,51.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A39D").s().p("ABJCvIhwiKIgvAyIAABYIhQAAIAAldIBQAAIAACkICaikIBaAAIiRCcICaDBg");
	this.shape_23.setTransform(-305.45,47.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(M01K00H01_c.mc_text_03, new cjs.Rectangle(-328.5,7.7,790.5,73), null);


(M01K00H01_c.mc_text_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A39D").s().p("AgtEYIAAmgIhgAAIAAiPIEbAAIAAIvg");
	this.shape.setTransform(309.725,62.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A39D").s().p("AhZEpIAApRICzAAIAAJRg");
	this.shape_1.setTransform(258.025,61.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A39D").s().p("Ai9CsQgygzAAhmIAAjxIC1AAIAADSQgBAsAPATQAOAUAcAAQAaAAARgVQASgWAAgsIAAjOIC1AAIAAG1IisAAIAAgqQgYAZggAMQgfANgkAAQhTAAgzgzg");
	this.shape_2.setTransform(217,69.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A39D").s().p("AiRERQgxgcgcgzQgdg0AAhEQAAhEAdgzQAcgzAxgcQAwgcA6AAQBHAAAnAmIAAi6IC1AAIAAJRIisAAIAAgkQgnAshQAAQg6AAgwgcgAgvAKQgUAXAAApQAAAoAUAXQAUAXAeAAQAfAAAUgXQAUgXAAgoQAAgpgUgXQgUgVgfAAQgeAAgUAVg");
	this.shape_3.setTransform(159.975,61.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A39D").s().p("AiCDGQg6geghgzQggg0gBhBQABhBAgg0QAhgzA6gdQA6gdBIAAQBKAAA5AdQA7AdAgAzQAhA0AABBQAABBghA0QggAzg7AeQg5AdhKAAQhIAAg6gdgAgyg/QgVAXAAAoQAAAoAVAXQATAXAfAAQAfAAAUgXQAUgXAAgoQAAgogUgXQgUgWgfAAQgfAAgTAWg");
	this.shape_4.setTransform(105.65,68.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A39D").s().p("ACkEYIgBj/Ih6DNIhTAAIh5jEIAAD2IisAAIAAovICcAAIC0EpICzkpICaAAIACIvg");
	this.shape_5.setTransform(40.35,62.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.125)").s().p("AgtEYIAAmgIhgAAIAAiPIEbAAIAAIvg");
	this.shape_6.setTransform(311.225,64.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.125)").s().p("AhZEpIAApRICzAAIAAJRg");
	this.shape_7.setTransform(259.525,62.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.125)").s().p("Ai9CsQgygzAAhmIAAjxIC1AAIAADSQAAAsAOATQAPAUAbAAQAaAAASgVQARgWAAgsIAAjOIC1AAIAAG1IisAAIAAgqQgYAZggAMQgfANgkAAQhUAAgygzg");
	this.shape_8.setTransform(218.5,70.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.125)").s().p("AiRERQgxgcgcgzQgdg0AAhEQAAhEAdgzQAcgzAxgcQAwgcA6AAQBHAAAnAmIAAi6IC1AAIAAJRIisAAIAAgkQgnAshQAAQg6AAgwgcgAgvAKQgUAXAAApQAAAoAUAXQAUAXAeAAQAfAAAUgXQAUgXAAgoQAAgpgUgXQgUgVgfAAQgeAAgUAVg");
	this.shape_9.setTransform(161.475,62.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.125)").s().p("AiDDGQg5geghgzQghg0ABhBQgBhBAhg0QAhgzA5gdQA7gdBIAAQBJAAA6AdQA6AdAhAzQAhA0gBBBQABBBghA0QghAzg6AeQg6AdhJAAQhIAAg7gdgAgzg/QgTAXgBAoQABAoATAXQAVAXAeAAQAfAAAUgXQAUgXAAgoQAAgogUgXQgUgWgfAAQgeAAgVAWg");
	this.shape_10.setTransform(107.15,70.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.125)").s().p("ACkEYIgBj/Ih6DMIhSAAIh6jDIAAD2IisAAIAAovICbAAIC2EqICxkqICcAAIABIvg");
	this.shape_11.setTransform(41.85,64.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(M01K00H01_c.mc_text_02, new cjs.Rectangle(0,0,332.1,115.8), null);


(M01K00H01_c.mc_text_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A39D").s().p("AArBeIAUhnQACgKABgGQAAgSgMgKQgKgJgVAAQgbAAgRAOQgSAPgGAeIgUBhIgiAAIAli5IAhAAIgFAYQAZgaAqAAQAfAAASARQARAQAAAdQAAAKgCAMIgUBng");
	this.shape.setTransform(556.9,44.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A39D").s().p("AhBBVQgTgJgKgTQgLgSAAgYQAAgfAOgZQANgZAYgOQAYgOAeAAQAXAAARAJQARAIAJARIAGggIAiAAIglC5IggAAIAEgXQgMAMgRAGQgPAHgUAAQgYAAgSgKgAgkg2QgQAKgKASQgJASAAAVQAAAZAOAOQAPANAaAAQAUAAARgKQAQgJAKgSQAJgSAAgWQAAgZgPgNQgOgOgbAAQgTAAgRAKg");
	this.shape_1.setTransform(533.675,44.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A39D").s().p("AhBBVQgTgJgKgTQgLgSAAgYQAAgfAOgZQANgZAYgOQAYgOAeAAQAXAAARAJQARAIAJARIAGggIAiAAIglC5IggAAIAEgXQgMAMgRAGQgPAHgUAAQgYAAgSgKgAgkg2QgQAKgKASQgJASAAAVQAAAZAOAOQAPANAaAAQAUAAARgKQAQgJAKgSQAJgSAAgWQAAgZgPgNQgOgOgbAAQgTAAgRAKg");
	this.shape_2.setTransform(509.825,44.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A39D").s().p("AhoB7QgNgEgHgIIARgZQANANATAAQAMAAAJgGQAJgHAKgPIAJgOIgti4IAiAAIAkCUIBciUIAiAAIiDDNQgRAcgRALQgPALgXAAQgNAAgNgFg");
	this.shape_3.setTransform(487.3,48.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A39D").s().p("AhBBVQgTgJgKgTQgLgSAAgYQAAgfAOgZQANgZAYgOQAYgOAeAAQAXAAARAJQARAIAJARIAGggIAiAAIglC5IggAAIAEgXQgMAMgRAGQgPAHgUAAQgYAAgSgKgAgkg2QgQAKgKASQgJASAAAVQAAAZAOAOQAPANAaAAQAUAAARgKQAQgJAKgSQAJgSAAgWQAAgZgPgNQgOgOgbAAQgTAAgRAKg");
	this.shape_4.setTransform(466.425,44.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A39D").s().p("AgrCFIAli5IAgAAIgjC5gAAFhdQgGgHABgIQgBgJAHgIQAGgGALgBQAIAAAHAGQAGAGAAAIQAAALgHAHQgHAGgLAAQgIAAgGgFg");
	this.shape_5.setTransform(450.5,40.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A39D").s().p("AgoB6QgRgJgJgRIgHAhIggAAIA0kDIAiAAIgTBgQAZgXAlAAQAYAAASAKQATAJALASQAKASAAAXQAAAggOAZQgNAYgZAPQgYAOgdAAQgYAAgRgJgAgTgSQgSAKgIARQgKASAAAXQAAAYAPAOQAOANAaAAQAUAAAQgKQARgJAKgSQAJgSAAgWQAAgYgPgOQgOgOgaAAQgUAAgQAKg");
	this.shape_6.setTransform(432.85,41);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A39D").s().p("ABsBeIAVhnIACgQQAAgTgKgJQgKgJgVAAQgaAAgRAOQgQAPgGAdIgUBiIggAAIAUhnQACgKAAgGQAAgSgKgKQgKgJgVAAQgaAAgQAOQgRAPgGAeIgUBhIghAAIAli5IAfAAIgEAXQAZgZAoAAQAVAAAPAJQAPAIAHAQQAcghAwAAQAfAAASARQARAPAAAeQAAAIgCAOIgUBng");
	this.shape_7.setTransform(401.8,44.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A39D").s().p("AgzBVQgUgKgLgSQgLgSAAgZQAAgeAOgZQANgZAYgOQAYgOAdAAQAlAAAXAWQAXAWAAAlQAAALgDANIiXAAIAAACQAAAaAPANQAOANAeAAQAQAAAPgFQAPgGAKgKIAOAYQgNANgUAHQgTAHgVAAQgbAAgUgKgAggg0QgSAPgHAYIB3AAQABgZgOgOQgPgOgZAAQgXAAgSAOg");
	this.shape_8.setTransform(373.225,44.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A39D").s().p("AhyB7IAxj0IBaAAQArAAAXASQAYATAAAiQAAAfgOAWQgOAWgaALQgaANgjAAIhAAAIgPBKgAg6ASIA7AAQAmAAAUgRQAVgQAAggQAAgVgPgMQgPgLgcAAIg6AAg");
	this.shape_9.setTransform(350.575,41.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A39D").s().p("AhEBeIAli5IAfAAIgEAcQALgQASgHQASgHAaAAIgHAhIgIAAQg5AAgMA9IgTBdg");
	this.shape_10.setTransform(563.325,-5.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A39D").s().p("AhQBNQgSgQAAgdQAAgKACgMIAVhnIAhAAIgUBoIgCAPQAAATALAJQAKAKAVAAQAaAAASgPQARgPAGgdIAUhiIAiAAIglC5IggAAIAEgYQgMANgRAGQgQAHgUAAQgfAAgSgRg");
	this.shape_11.setTransform(543.875,-5.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A39D").s().p("AhJB5QgSgJgLgTQgKgRAAgZQAAgfANgZQAOgZAYgNQAYgOAegBQAWAAASAJQARAJAJAQIAVhqIAhAAIgzEDIghAAIAFgWQgNALgQAHQgQAGgUAAQgXAAgTgKgAgrgSQgRAKgJARQgKASAAAWQAAAZAPAOQAOANAbAAQAUABAQgKQARgKAJgSQAJgSAAgXQAAgYgOgNQgOgOgaAAQgVAAgQAKg");
	this.shape_12.setTransform(520.225,-9.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A39D").s().p("AgzBVQgUgKgLgSQgLgSAAgZQAAgeAOgZQANgZAYgOQAYgOAdAAQAlAAAXAWQAXAWAAAlQAAALgDANIiXAAIAAACQAAAaAPANQAOANAeAAQAQAAAPgFQAPgGAKgKIAOAYQgNANgUAHQgTAHgVAAQgbAAgUgKgAggg0QgSAPgHAYIB3AAQABgZgOgOQgPgOgZAAQgXAAgSAOg");
	this.shape_13.setTransform(496.875,-5.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A39D").s().p("Ag2BZQgUgGgMgKIAPgaQALAJASAFQARAFATAAQAWAAANgHQAMgIAAgMQABgLgKgEQgLgFgVgFQgSgEgMgEQgNgFgJgIQgJgKABgQQgBgTALgNQAKgOATgHQAUgIAYAAQASAAASAFQARAFALAHIgNAbQgLgHgOgEQgOgEgPAAQgWAAgMAIQgNAHAAANQAAALAKAFQAKAFAVAEQATAEAMAFQANADAIAJQAJAKAAAQQAAAcgYAQQgXAQgmAAQgWAAgWgGg");
	this.shape_14.setTransform(476.9,-5.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A39D").s().p("Ag4BVQgTgKgLgSQgLgSAAgYQAAgeAOgZQAOgZAZgOQAZgPAeAAQAaAAAUAKQATAKALASQALASAAAYQAAAfgOAYQgOAZgZAPQgZAOgeAAQgaAAgUgKgAgcg2QgQAKgKASQgJASAAAVQAAAZAOAOQAPANAaAAQAUAAARgKQAQgJAKgSQAJgSAAgWQAAgZgPgNQgOgOgbAAQgTAAgRAKg");
	this.shape_15.setTransform(457.525,-5.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A39D").s().p("AhEBeIAli5IAfAAIgEAcQALgQASgHQASgHAaAAIgHAhIgIAAQg5AAgMA9IgTBdg");
	this.shape_16.setTransform(440.275,-5.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A39D").s().p("AhyB7IAxj1IBaAAQArABAXASQAYATAAAiQAAAggOAUQgOAXgaALQgaAMgjAAIhAAAIgPBLgAg6ASIA7AAQAmAAAUgRQAVgQAAgfQAAgWgPgMQgPgLgcAAIg6AAg");
	this.shape_17.setTransform(420.125,-8.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A39D").s().p("AA3BfQglAdgvAAQgkAAgVgQQgWgPAAgbQAAgYASgUQASgTAmgSQgJgMgFgLQgEgLAAgMQAAgeAUgRQAVgQAegBQAZABAQALQAQANAAAUQAAAXgQAQQgQAQgiAQIAwA7QAPgTAKgZIAaAIQgNAhgTAZIAZAgIgXAVgAg9AgQgNAMgBARQABAPANALQAMAJAWABQAjgBAdgXIg3hEQgfAOgMANgAgLhaQgLAJAAARQAAAHAEAKQAFAIAJAMQATgLALgHQAMgIAEgHQAGgHAAgKQgBgKgHgGQgJgHgNAAQgSAAgLAKg");
	this.shape_18.setTransform(385.2,-8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A39D").s().p("AArBeIAVhnQACgKAAgGQgBgSgKgKQgLgJgWAAQgaAAgSAOQgRAPgGAeIgUBhIgiAAIAmi5IAfAAIgEAYQAZgaApAAQAgAAASARQARAQABAdQgBAKgCAMIgUBng");
	this.shape_19.setTransform(351.45,-5.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A39D").s().p("AhBBVQgTgJgKgTQgLgSAAgYQAAgfAOgZQANgZAYgOQAYgOAeAAQAXAAARAJQARAIAJARIAGggIAiAAIglC5IggAAIAEgXQgMAMgRAGQgPAHgUAAQgYAAgSgKgAgkg2QgQAKgKASQgJASAAAVQAAAZAOAOQAPANAaAAQAUAAARgKQAQgJAKgSQAJgSAAgWQAAgZgPgNQgOgOgbAAQgTAAgRAKg");
	this.shape_20.setTransform(328.225,-5.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A39D").s().p("AAkCCIg1hYIgtAkIgLA0IgiAAIA0kDIAiAAIghClIByhbIAvAAIhjBNIBDBsg");
	this.shape_21.setTransform(307.25,-9.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A39D").s().p("AhBBVQgTgJgKgTQgLgSAAgYQAAgfAOgZQANgZAYgOQAYgOAeAAQAXAAARAJQARAIAJARIAGggIAiAAIglC5IggAAIAEgXQgMAMgRAGQgPAHgUAAQgYAAgSgKgAgkg2QgQAKgKASQgJASAAAVQAAAZAOAOQAPANAaAAQAUAAARgKQAQgJAKgSQAJgSAAgWQAAgZgPgNQgOgOgbAAQgTAAgRAKg");
	this.shape_22.setTransform(283.225,-5.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A39D").s().p("AhSCcIAQgaQAKAJAQAAQAOAAAIgIQAIgHADgSIAnjBIAhAAIgnDBQgMA+g2gBQgaAAgQgLgAAriBQgGgFAAgJQAAgJAHgHQAHgIAKAAQAJABAGAFQAHAGgBAIQAAALgGAGQgIAIgKgBQgJABgGgHg");
	this.shape_23.setTransform(263.4,-6.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A39D").s().p("AgrCFIAli5IAhAAIgkC5gAAEheQgEgFAAgJQgBgJAHgHQAGgIAKAAQAJABAHAFQAGAGAAAIQAAALgHAGQgHAIgLgBQgJABgGgHg");
	this.shape_24.setTransform(257.35,-9.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A39D").s().p("AgoB6QgSgJgIgSIgHAiIggAAIA0kDIAiAAIgUBgQAagXAlgBQAYABASAJQATAKAKASQALASAAAXQAAAggOAZQgNAZgYAOQgYAOgeAAQgXAAgSgJgAgTgSQgSAKgIARQgKASAAAWQAAAZAPAOQAPANAZAAQAUABARgKQAQgKAKgSQAJgSAAgXQAAgYgPgNQgOgOgaAAQgUAAgQAKg");
	this.shape_25.setTransform(239.7,-9.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00A39D").s().p("AgzBVQgUgKgLgSQgLgSAAgZQAAgeAOgZQANgZAYgOQAYgOAdAAQAlAAAXAWQAXAWAAAlQAAALgDANIiXAAIAAACQAAAaAPANQAOANAeAAQAQAAAPgFQAPgGAKgKIAOAYQgNANgUAHQgTAHgVAAQgbAAgUgKgAggg0QgSAPgHAYIB3AAQABgZgOgOQgPgOgZAAQgXAAgSAOg");
	this.shape_26.setTransform(217.075,-5.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00A39D").s().p("AAuB7IhKhvIg1AvIgNBAIgiAAIAwj1IAjAAIgbCHICciHIAuAAIiEByIAAABIBYCCg");
	this.shape_27.setTransform(196,-8.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00A39D").s().p("AgxAOIAGgbIBdAAIgGAbg");
	this.shape_28.setTransform(165.225,-5.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00A39D").s().p("AgjB7IAqjWIg2AAIAGgfIBZAAIgwD1g");
	this.shape_29.setTransform(143.575,-8.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00A39D").s().p("AgzBVQgUgKgLgSQgLgSAAgZQAAgeAOgZQANgZAYgOQAYgOAdAAQAlAAAXAWQAXAWAAAlQAAALgDANIiXAAIAAACQAAAaAPANQAOANAeAAQAQAAAPgFQAPgGAKgKIAOAYQgNANgUAHQgTAHgVAAQgbAAgUgKgAggg0QgSAPgHAYIB3AAQABgZgOgOQgPgOgZAAQgXAAgSAOg");
	this.shape_30.setTransform(115.975,-5.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00A39D").s().p("Ag2BZQgUgGgMgKIAPgaQALAJARAFQASAFASAAQAXAAANgHQANgIAAgMQgBgLgJgEQgKgFgWgFQgSgEgMgEQgNgFgJgIQgJgKAAgQQAAgTALgNQAKgOATgHQAUgIAYAAQASAAASAFQARAFALAHIgNAbQgLgHgOgEQgPgEgPAAQgVAAgNAIQgMAHAAANQAAALAKAFQAKAFAVAEQATAEAMAFQAMADAJAJQAJAKgBAQQABAcgXAQQgYAQgmAAQgWAAgWgGg");
	this.shape_31.setTransform(96,-5.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00A39D").s().p("AhEBeIAli5IAfAAIgEAcQALgQASgHQASgHAaAAIgHAhIgIAAQg5AAgMA9IgTBdg");
	this.shape_32.setTransform(81.625,-5.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00A39D").s().p("AhQBNQgSgQAAgdQAAgKACgMIAVhnIAhAAIgUBoIgCAPQAAATALAJQAKAKAVAAQAaAAASgPQARgPAGgdIAUhiIAiAAIglC5IggAAIAEgYQgMANgRAGQgQAHgUAAQgfAAgSgRg");
	this.shape_33.setTransform(62.175,-5.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00A39D").s().p("Ag4BVQgTgKgLgSQgLgSAAgYQAAgeAOgZQAOgZAZgOQAZgPAeAAQAaAAAUAKQATAKALASQALASAAAYQAAAfgOAYQgOAZgZAPQgZAOgeAAQgaAAgUgKgAgcg2QgQAKgKASQgJASAAAVQAAAZAOAOQAPANAaAAQAUAAARgKQAQgJAKgSQAJgSAAgWQAAgZgPgNQgOgOgbAAQgTAAgRAKg");
	this.shape_34.setTransform(38.575,-5.625);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00A39D").s().p("AhBBxQgagNgOgYQgOgXAAgfQAAgoASghQATgiAigTQAjgUArAAQAfAAAXAKQAYAKAMASIgZAWQgWgdgtAAQgiAAgZAPQgZAQgOAaQgOAaAAAeQAAAiAWAUQAWAUAoAAQAtAAAdgdIAUAXQgRATgZAJQgZAJgdAAQgkAAgbgMg");
	this.shape_35.setTransform(16.3,-8.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(M01K00H01_c.mc_text_01, new cjs.Rectangle(0,-37.1,571.5,102.5), null);


(M01K00H01_c.mc_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new M01K00H01_c.bmp_logo_opening();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.9281,0.9281);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(M01K00H01_c.mc_logo, new cjs.Rectangle(0,0,558.8,155), null);


(M01K00H01_c.mc_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new M01K00H01_c.bmp_hand();
	this.instance.parent = this;
	this.instance.setTransform(-22,-8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(M01K00H01_c.mc_hand, new cjs.Rectangle(-22,-8,53,68.5), null);


(M01K00H01_c.mc_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new M01K00H01_c.bmp_clue_circle();
	this.instance.parent = this;
	this.instance.setTransform(-76,-76,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(M01K00H01_c.mc_circle, new cjs.Rectangle(-76,-76,152.3,152.3), null);


(M01K00H01_c.btn_inv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FFFFF").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(M01K00H01_c.mc_hand_clue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new M01K00H01_c.mc_hand();
	this.instance.parent = this;
	this.instance.setTransform(0,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:4.5,regY:26.2,x:4.5,y:65.4},0).wait(1).to({y:63.6},0).wait(1).to({y:61.85},0).wait(1).to({y:60.05},0).wait(1).to({y:58.25},0).wait(1).to({y:56.5},0).wait(1).to({y:54.7},0).wait(1).to({y:52.9},0).wait(1).to({y:51.15},0).wait(1).to({y:49.35},0).wait(1).to({y:47.55},0).wait(1).to({y:45.8},0).wait(1).to({y:44},0).wait(1).to({y:42.2},0).wait(1).to({y:40.45},0).wait(1).to({y:38.65},0).wait(1).to({y:36.85},0).wait(1).to({y:35.1},0).wait(1).to({y:33.3},0).wait(1).to({y:31.5},0).wait(1).to({y:29.75},0).wait(1).to({y:27.95},0).wait(1).to({y:26.2},0).wait(22).to({y:28.7},0).wait(1).to({y:31.2},0).wait(1).to({y:33.7},0).wait(1).to({y:36.2},0).wait(1).to({y:38.7},0).wait(1).to({y:41.2},0).wait(1).to({y:43.65},0).wait(1).to({y:46.2},0).wait(1).to({y:48.7},0).wait(1).to({y:51.2},0).wait(1).to({y:53.7},0).wait(1).to({y:56.2},0).wait(1).to({y:58.7},0).wait(1).to({y:61.15},0).wait(1).to({y:63.7},0).wait(1).to({y:66.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-8,53,109.5);


(M01K00H01_c.mc_circle_clue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new M01K00H01_c.mc_circle();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6,0.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(60));

	// Layer_2
	this.instance_1 = new M01K00H01_c.mc_circle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.01,0.01);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({_off:false},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.053,scaleY:0.053},0).wait(1).to({scaleX:0.0961,scaleY:0.0961},0).wait(1).to({scaleX:0.1391,scaleY:0.1391},0).wait(1).to({scaleX:0.1822,scaleY:0.1822},0).wait(1).to({scaleX:0.2252,scaleY:0.2252},0).wait(1).to({scaleX:0.2683,scaleY:0.2683,x:0.05,y:0.05},0).wait(1).to({scaleX:0.3113,scaleY:0.3113},0).wait(1).to({scaleX:0.3543,scaleY:0.3543},0).wait(1).to({scaleX:0.3974,scaleY:0.3974},0).wait(1).to({scaleX:0.4404,scaleY:0.4404},0).wait(1).to({scaleX:0.4835,scaleY:0.4835},0).wait(1).to({scaleX:0.5265,scaleY:0.5265},0).wait(1).to({scaleX:0.5696,scaleY:0.5696},0).wait(1).to({scaleX:0.6126,scaleY:0.6126},0).wait(1).to({scaleX:0.6557,scaleY:0.6557,alpha:0.8889},0).wait(1).to({scaleX:0.6987,scaleY:0.6987,alpha:0.7778},0).wait(1).to({scaleX:0.7417,scaleY:0.7417,alpha:0.6667},0).wait(1).to({scaleX:0.7848,scaleY:0.7848,x:0.1,y:0.1,alpha:0.5556},0).wait(1).to({scaleX:0.8278,scaleY:0.8278,alpha:0.4444},0).wait(1).to({scaleX:0.8709,scaleY:0.8709,alpha:0.3333},0).wait(1).to({scaleX:0.9139,scaleY:0.9139,alpha:0.2222},0).wait(1).to({scaleX:0.957,scaleY:0.957,alpha:0.1111},0).wait(1).to({scaleX:1,scaleY:1,alpha:0},0).wait(1));

	// Layer_1
	this.instance_2 = new M01K00H01_c.mc_circle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.01,0.01);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.053,scaleY:0.053},0).wait(1).to({scaleX:0.0961,scaleY:0.0961},0).wait(1).to({scaleX:0.1391,scaleY:0.1391},0).wait(1).to({scaleX:0.1822,scaleY:0.1822},0).wait(1).to({scaleX:0.2252,scaleY:0.2252},0).wait(1).to({scaleX:0.2683,scaleY:0.2683,x:0.05,y:0.05},0).wait(1).to({scaleX:0.3113,scaleY:0.3113},0).wait(1).to({scaleX:0.3543,scaleY:0.3543},0).wait(1).to({scaleX:0.3974,scaleY:0.3974},0).wait(1).to({scaleX:0.4404,scaleY:0.4404},0).wait(1).to({scaleX:0.4835,scaleY:0.4835},0).wait(1).to({scaleX:0.5265,scaleY:0.5265},0).wait(1).to({scaleX:0.5696,scaleY:0.5696},0).wait(1).to({scaleX:0.6126,scaleY:0.6126},0).wait(1).to({scaleX:0.6557,scaleY:0.6557,alpha:0.8889},0).wait(1).to({scaleX:0.6987,scaleY:0.6987,alpha:0.7778},0).wait(1).to({scaleX:0.7417,scaleY:0.7417,alpha:0.6667},0).wait(1).to({scaleX:0.7848,scaleY:0.7848,x:0.1,y:0.1,alpha:0.5556},0).wait(1).to({scaleX:0.8278,scaleY:0.8278,alpha:0.4444},0).wait(1).to({scaleX:0.8709,scaleY:0.8709,alpha:0.3333},0).wait(1).to({scaleX:0.9139,scaleY:0.9139,alpha:0.2222},0).wait(1).to({scaleX:0.957,scaleY:0.957,alpha:0.1111},0).wait(1).to({scaleX:1,scaleY:1,alpha:0},0).to({_off:true},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-76,152.3,152.3);


(M01K00H01_c.mc_btnPlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn.on("click", c_play);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btn = new M01K00H01_c.btn_inv();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new M01K00H01_c.btn_inv(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(M01K00H01_c.mc_btnPlay, new cjs.Rectangle(-25,-25,50,50), null);


(M01K00H01_c.mc_clue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new M01K00H01_c.mc_hand_clue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.mc_clue = new M01K00H01_c.mc_circle_clue();
	this.mc_clue.name = "mc_clue";
	this.mc_clue.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mc_clue).wait(1));

}).prototype = getMCSymbolPrototype(M01K00H01_c.mc_clue, new cjs.Rectangle(-45.6,-45.6,91.4,147.1), null);


(M01K00H01_c.M01K00H01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		content = this;
		c_sound = null;
		
		c_play = function () {
		  content.play();
		  disablePlay = false;
		}
		
		gui_shownext = function () {
		  if (typeof c_showButton === "function") {
		    // safe to use the function
		    c_showButton();
		  } else {
		    alert("GUI SHOW NEXT BUTTON");
		  }
		}
		
		gui_next = function () {
		  if (typeof c_next === "function") {
		    // safe to use the function
		    c_next();
		  } else {
		    alert("GUI NEXT PAGE");
		  }
		}
		
		//content.gotoAndPlay("here");
	}
	this.frame_1 = function() {
		content.stop();
		TweenLite.set(content["mc_logo"], {
			x: 361,
			alpha: 1
		})
		TweenLite.from(content["mc_logo"], 0.7, {
			x: 361 + 60,
			alpha: 0,
			ease: Power2.easeOut
		})
		
		TweenLite.delayedCall(2, c_play);
	}
	this.frame_2 = function() {
		content.stop();
		TweenLite.set(content["mc_logo"], {
			x: 361,
			alpha: 1
		})
		TweenLite.to(content["mc_logo"], 0.7, {
			x: 361 - 60,
			alpha: 0,
			ease: Power2.easeIn
		})
		
		TweenLite.delayedCall(1, c_play);
	}
	this.frame_3 = function() {
		content.stop();
		TweenLite.set(content["mc_text_01"], {
			x: 596,
			alpha: 1
		})
		TweenLite.from(content["mc_text_01"], 0.7, {
			x: 596 + 40,
			alpha: 0,
			ease: Back.easeOut
		})
		
		TweenLite.set(content["mc_text_02"], {
			x: 829,
			alpha: 1
		})
		TweenLite.from(content["mc_text_02"], 0.7, {
			x: 829 + 40,
			alpha: 0,
			delay: 0.5,
			ease: Back.easeOut
		})
		
		TweenLite.set(content["mc_text_03"], {
			x: 697,
			alpha: 1
		})
		TweenLite.from(content["mc_text_03"], 0.7, {
			x: 697 + 40,
			alpha: 0,
			delay: 1,
			ease: Back.easeOut
		})
		
		TweenLite.set(content["mc_text_04"], {
			x: 1005,
			alpha: 1
		})
		TweenLite.from(content["mc_text_04"], 0.7, {
			x: 1005 + 40,
			alpha: 0,
			delay: 1.5,
			ease: Back.easeOut
		})
		
		TweenLite.delayedCall(2, c_play);
	}
	this.frame_4 = function() {
		content.stop();
		btnPlay = content.btnPlay;
		TweenLite.set(btnPlay,{
			alpha: 1
		});
		TweenLite.from(btnPlay, 0.5, {
			alpha: 0,
			delay: 0.5
		});
		mc_clue = content.mc_clue;
		TweenLite.set(mc_clue,{
			alpha: 1
		});
		TweenLite.from(mc_clue, 0.5, {
			alpha: 0,
			delay: 0.5
		});
	}
	this.frame_5 = function() {
		content.stop();
		//gui_shownext();
		gui_next();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// button
	this.btnPlay = new M01K00H01_c.mc_btnPlay();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.parent = this;
	this.btnPlay.setTransform(1083.75,550,3.1332,0.8166,0,0,0,0.1,0.1);
	this.btnPlay._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btnPlay).wait(4).to({_off:false},0).to({_off:true},1).wait(1));

	// clue
	this.mc_clue = new M01K00H01_c.mc_clue();
	this.mc_clue.name = "mc_clue";
	this.mc_clue.parent = this;
	this.mc_clue.setTransform(1087.1,551.55);
	this.mc_clue._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_clue).wait(4).to({_off:false},0).to({_off:true},1).wait(1));

	// obj
	this.mc_logo = new M01K00H01_c.mc_logo();
	this.mc_logo.name = "mc_logo";
	this.mc_logo.parent = this;
	this.mc_logo.setTransform(361,262);

	this.mc_text_04 = new M01K00H01_c.mc_text_04();
	this.mc_text_04.name = "mc_text_04";
	this.mc_text_04.parent = this;
	this.mc_text_04.setTransform(1005,506.1);

	this.mc_text_03 = new M01K00H01_c.mc_text_03();
	this.mc_text_03.name = "mc_text_03";
	this.mc_text_03.parent = this;
	this.mc_text_03.setTransform(697,386.1);

	this.mc_text_02 = new M01K00H01_c.mc_text_02();
	this.mc_text_02.name = "mc_text_02";
	this.mc_text_02.parent = this;
	this.mc_text_02.setTransform(829,278.55);

	this.mc_text_01 = new M01K00H01_c.mc_text_01();
	this.mc_text_01.name = "mc_text_01";
	this.mc_text_01.parent = this;
	this.mc_text_01.setTransform(596,222.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mc_logo,p:{regX:0,regY:0,x:361,y:262}}]},1).to({state:[{t:this.mc_logo,p:{regX:279.4,regY:77.5,x:640.4,y:339.5}}]},1).to({state:[{t:this.mc_text_01},{t:this.mc_text_02},{t:this.mc_text_03},{t:this.mc_text_04}]},1).wait(3));

	// bg
	this.instance = new M01K00H01_c.bmp_bg1();
	this.instance.parent = this;
	this.instance.setTransform(-139,-104);

	this.instance_1 = new M01K00H01_c.bmp_opening_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-245,-30,0.871,0.871);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245,-104,1664,928);


// stage content:
(M01K00H01_c.M01K00H01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// content
	this.instance = new M01K00H01_c.M01K00H01_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(501,256,918,568);
// library properties:
M01K00H01_c.properties = {
	id: 'DC13DBC2CDF2A8419AB311DD38BFD644',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"assets/bmp_bg1.png?1631871140403", id:"bmp_bg1"},
		{src:"assets/bmp_clue_circle.png?1631871140403", id:"bmp_clue_circle"},
		{src:"assets/bmp_hand.png?1631871140403", id:"bmp_hand"},
		{src:"assets/bmp_logo_opening.png?1631871140403", id:"bmp_logo_opening"},
		{src:"assets/bmp_opening_bg.png?1631871140403", id:"bmp_opening_bg"},
		{src:"assets/bmp_opening_mulai.png?1631871140403", id:"bmp_opening_mulai"},
		{src:"assets/snd_host_M1_01.mp3?1631871140403", id:"snd_host_M1_01"},
		{src:"assets/snd_host_M1_02.mp3?1631871140403", id:"snd_host_M1_02"}
	],
	preloads: []
};



// bootstrap callback support:

(M01K00H01_c.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(M01K00H01_c.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / M01K00H01_c.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / M01K00H01_c.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DC13DBC2CDF2A8419AB311DD38BFD644'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return M01K00H01_c; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(M01K00H01_c = M01K00H01_c||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var M01K00H01_c, images, createjs, ss, AdobeAn;