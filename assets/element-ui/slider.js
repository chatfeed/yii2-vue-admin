module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(267);


/***/ },

/***/ 3:
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },

/***/ 117:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/dom");

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _main = __webpack_require__(268);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_main2.default.install = function (Vue) {
	  Vue.component(_main2.default.name, _main2.default);
	};

	exports.default = _main2.default;

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(269),
	  /* template */
	  __webpack_require__(275),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _inputNumber = __webpack_require__(270);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _button = __webpack_require__(271);

	var _button2 = _interopRequireDefault(_button);

	var _dom = __webpack_require__(117);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElSlider',

	  props: {
	    min: {
	      type: Number,
	      default: 0
	    },
	    max: {
	      type: Number,
	      default: 100
	    },
	    step: {
	      type: Number,
	      default: 1
	    },
	    value: {
	      type: [Number, Array],
	      default: 0
	    },
	    showInput: {
	      type: Boolean,
	      default: false
	    },
	    showInputControls: {
	      type: Boolean,
	      default: true
	    },
	    showStops: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    range: {
	      type: Boolean,
	      default: false
	    }
	  },

	  components: {
	    ElInputNumber: _inputNumber2.default,
	    SliderButton: _button2.default
	  },

	  data: function data() {
	    return {
	      firstValue: null,
	      secondValue: null,
	      oldValue: null,
	      precision: 0,
	      inputValue: null,
	      dragging: false
	    };
	  },


	  watch: {
	    inputValue: function inputValue(val) {
	      this.firstValue = val;
	    },
	    value: function value(val, oldVal) {
	      if (this.dragging || Array.isArray(val) && Array.isArray(oldVal) && val.every(function (item, index) {
	        return item === oldVal[index];
	      })) {
	        return;
	      }
	      this.setValues();
	    },
	    dragging: function dragging(val) {
	      if (!val) {
	        this.setValues();
	      }
	    },
	    firstValue: function firstValue(val) {
	      if (this.range) {
	        this.$emit('input', [this.minValue, this.maxValue]);
	      } else {
	        this.inputValue = val;
	        this.$emit('input', val);
	      }
	    },
	    secondValue: function secondValue() {
	      if (this.range) {
	        this.$emit('input', [this.minValue, this.maxValue]);
	      }
	    },
	    min: function min() {
	      this.setValues();
	    },
	    max: function max() {
	      this.setValues();
	    }
	  },

	  methods: {
	    valueChanged: function valueChanged() {
	      var _this = this;

	      if (this.range) {
	        return ![this.minValue, this.maxValue].every(function (item, index) {
	          return item === _this.oldValue[index];
	        });
	      } else {
	        return this.value !== this.oldValue;
	      }
	    },
	    setValues: function setValues() {
	      var val = this.value;
	      if (this.range && Array.isArray(val)) {
	        if (val[1] < this.min) {
	          this.$emit('input', [this.min, this.min]);
	        } else if (val[0] > this.max) {
	          this.$emit('input', [this.max, this.max]);
	        } else if (val[0] < this.min) {
	          this.$emit('input', [this.min, val[1]]);
	        } else if (val[1] > this.max) {
	          this.$emit('input', [val[0], this.max]);
	        } else {
	          this.firstValue = val[0];
	          this.secondValue = val[1];
	          if (this.valueChanged()) {
	            this.$emit('change', [this.minValue, this.maxValue]);
	            this.oldValue = val.slice();
	          }
	        }
	      } else if (!this.range && typeof val === 'number' && !isNaN(val)) {
	        if (val < this.min) {
	          this.$emit('input', this.min);
	        } else if (val > this.max) {
	          this.$emit('input', this.max);
	        } else {
	          this.firstValue = val;
	          if (this.valueChanged()) {
	            this.$emit('change', val);
	            this.oldValue = val;
	          }
	        }
	      }
	    },
	    setPosition: function setPosition(percent) {
	      var targetValue = this.min + percent * (this.max - this.min) / 100;
	      if (!this.range) {
	        this.$refs.button1.setPosition(percent);
	        return;
	      }
	      var button = void 0;
	      if (Math.abs(this.minValue - targetValue) < Math.abs(this.maxValue - targetValue)) {
	        button = this.firstValue < this.secondValue ? 'button1' : 'button2';
	      } else {
	        button = this.firstValue > this.secondValue ? 'button1' : 'button2';
	      }
	      this.$refs[button].setPosition(percent);
	    },
	    onSliderClick: function onSliderClick(event) {
	      if (this.disabled || this.dragging) return;
	      var sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
	      this.setPosition((event.clientX - sliderOffsetLeft) / this.$sliderWidth * 100);
	    }
	  },

	  computed: {
	    $sliderWidth: function $sliderWidth() {
	      return parseInt((0, _dom.getStyle)(this.$refs.slider, 'width'), 10);
	    },
	    stops: function stops() {
	      var _this2 = this;

	      var stopCount = (this.max - this.min) / this.step;
	      var stepWidth = 100 * this.step / (this.max - this.min);
	      var result = [];
	      for (var i = 1; i < stopCount; i++) {
	        result.push(i * stepWidth);
	      }
	      if (this.range) {
	        return result.filter(function (step) {
	          return step < 100 * (_this2.minValue - _this2.min) / (_this2.max - _this2.min) || step > 100 * (_this2.maxValue - _this2.min) / (_this2.max - _this2.min);
	        });
	      } else {
	        return result.filter(function (step) {
	          return step > 100 * (_this2.firstValue - _this2.min) / (_this2.max - _this2.min);
	        });
	      }
	    },
	    minValue: function minValue() {
	      return Math.min(this.firstValue, this.secondValue);
	    },
	    maxValue: function maxValue() {
	      return Math.max(this.firstValue, this.secondValue);
	    },
	    barWidth: function barWidth() {
	      return this.range ? 100 * (this.maxValue - this.minValue) / (this.max - this.min) + '%' : 100 * (this.firstValue - this.min) / (this.max - this.min) + '%';
	    },
	    barLeft: function barLeft() {
	      return this.range ? 100 * (this.minValue - this.min) / (this.max - this.min) + '%' : '0%';
	    }
	  },

	  mounted: function mounted() {
	    if (this.range) {
	      if (Array.isArray(this.value)) {
	        this.firstValue = Math.max(this.min, this.value[0]);
	        this.secondValue = Math.min(this.max, this.value[1]);
	      } else {
	        this.firstValue = this.min;
	        this.secondValue = this.max;
	      }
	      this.oldValue = [this.firstValue, this.secondValue];
	    } else {
	      if (typeof this.value !== 'number' || isNaN(this.value)) {
	        this.firstValue = this.min;
	      } else {
	        this.firstValue = Math.min(this.max, Math.max(this.min, this.value));
	      }
	      this.oldValue = this.firstValue;
	    }
	    var precisions = [this.min, this.max, this.step].map(function (item) {
	      var decimal = ('' + item).split('.')[1];
	      return decimal ? decimal.length : 0;
	    });
	    this.precision = Math.max.apply(null, precisions);
	    this.inputValue = this.inputValue || this.firstValue;
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },

/***/ 270:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/input-number");

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(272),
	  /* template */
	  __webpack_require__(274),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _tooltip = __webpack_require__(273);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElSliderButton',

	  components: {
	    ElTooltip: _tooltip2.default
	  },

	  props: {
	    value: {
	      type: Number,
	      default: 0
	    }
	  },

	  data: function data() {
	    return {
	      hovering: false,
	      dragging: false,
	      startX: 0,
	      currentX: 0,
	      startPosition: 0,
	      newPosition: null,
	      oldValue: this.value
	    };
	  },


	  computed: {
	    disabled: function disabled() {
	      return this.$parent.disabled;
	    },
	    max: function max() {
	      return this.$parent.max;
	    },
	    min: function min() {
	      return this.$parent.min;
	    },
	    step: function step() {
	      return this.$parent.step;
	    },
	    precision: function precision() {
	      return this.$parent.precision;
	    },
	    currentPosition: function currentPosition() {
	      return (this.value - this.min) / (this.max - this.min) * 100 + '%';
	    }
	  },

	  watch: {
	    dragging: function dragging(val) {
	      this.$parent.dragging = val;
	    }
	  },

	  methods: {
	    showTooltip: function showTooltip() {
	      this.$refs.tooltip && (this.$refs.tooltip.showPopper = true);
	    },
	    hideTooltip: function hideTooltip() {
	      this.$refs.tooltip && (this.$refs.tooltip.showPopper = false);
	    },
	    handleMouseEnter: function handleMouseEnter() {
	      this.hovering = true;
	      this.showTooltip();
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      this.hovering = false;
	      this.hideTooltip();
	    },
	    onButtonDown: function onButtonDown(event) {
	      if (this.disabled) return;
	      this.onDragStart(event);
	      window.addEventListener('mousemove', this.onDragging);
	      window.addEventListener('mouseup', this.onDragEnd);
	      window.addEventListener('contextmenu', this.onDragEnd);
	    },
	    onDragStart: function onDragStart(event) {
	      this.dragging = true;
	      this.startX = event.clientX;
	      this.startPosition = parseInt(this.currentPosition, 10);
	    },
	    onDragging: function onDragging(event) {
	      if (this.dragging) {
	        this.showTooltip();
	        this.currentX = event.clientX;
	        var diff = (this.currentX - this.startX) / this.$parent.$sliderWidth * 100;
	        this.newPosition = this.startPosition + diff;
	        this.setPosition(this.newPosition);
	      }
	    },
	    onDragEnd: function onDragEnd() {
	      var _this = this;

	      if (this.dragging) {
	        /*
	         * 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
	         * 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
	         */
	        setTimeout(function () {
	          _this.dragging = false;
	          _this.hideTooltip();
	          _this.setPosition(_this.newPosition);
	        }, 0);
	        window.removeEventListener('mousemove', this.onDragging);
	        window.removeEventListener('mouseup', this.onDragEnd);
	        window.removeEventListener('contextmenu', this.onDragEnd);
	      }
	    },
	    setPosition: function setPosition(newPosition) {
	      if (newPosition < 0) {
	        newPosition = 0;
	      } else if (newPosition > 100) {
	        newPosition = 100;
	      }
	      var lengthPerStep = 100 / ((this.max - this.min) / this.step);
	      var steps = Math.round(newPosition / lengthPerStep);
	      var value = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min;
	      value = parseFloat(value.toFixed(this.precision));
	      this.$emit('input', value);
	      this.$refs.tooltip && this.$refs.tooltip.updatePopper();
	      if (!this.dragging && this.value !== this.oldValue) {
	        this.oldValue = this.value;
	      }
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },

/***/ 273:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/tooltip");

/***/ },

/***/ 274:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "button",
	    staticClass: "el-slider__button-wrapper",
	    class: {
	      'hover': _vm.hovering, 'dragging': _vm.dragging
	    },
	    style: ({
	      left: _vm.currentPosition
	    }),
	    on: {
	      "mouseenter": _vm.handleMouseEnter,
	      "mouseleave": _vm.handleMouseLeave,
	      "mousedown": _vm.onButtonDown
	    }
	  }, [_c('el-tooltip', {
	    ref: "tooltip",
	    attrs: {
	      "placement": "top"
	    }
	  }, [_c('span', {
	    slot: "content"
	  }, [_vm._v(_vm._s(_vm.value))]), _c('div', {
	    staticClass: "el-slider__button",
	    class: {
	      'hover': _vm.hovering, 'dragging': _vm.dragging
	    }
	  })])], 1)
	},staticRenderFns: []}

/***/ },

/***/ 275:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-slider"
	  }, [(_vm.showInput && !_vm.range) ? _c('el-input-number', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.inputValue),
	      expression: "inputValue"
	    }],
	    ref: "input",
	    staticClass: "el-slider__input",
	    attrs: {
	      "step": _vm.step,
	      "disabled": _vm.disabled,
	      "controls": _vm.showInputControls,
	      "min": _vm.min,
	      "max": _vm.max,
	      "size": "small"
	    },
	    domProps: {
	      "value": (_vm.inputValue)
	    },
	    on: {
	      "input": function($event) {
	        _vm.inputValue = $event
	      }
	    }
	  }) : _vm._e(), _c('div', {
	    ref: "slider",
	    staticClass: "el-slider__runway",
	    class: {
	      'show-input': _vm.showInput, 'disabled': _vm.disabled
	    },
	    on: {
	      "click": _vm.onSliderClick
	    }
	  }, [_c('div', {
	    staticClass: "el-slider__bar",
	    style: ({
	      width: _vm.barWidth,
	      left: _vm.barLeft
	    })
	  }), _c('slider-button', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.firstValue),
	      expression: "firstValue"
	    }],
	    ref: "button1",
	    domProps: {
	      "value": (_vm.firstValue)
	    },
	    on: {
	      "input": function($event) {
	        _vm.firstValue = $event
	      }
	    }
	  }), (_vm.range) ? _c('slider-button', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.secondValue),
	      expression: "secondValue"
	    }],
	    ref: "button2",
	    domProps: {
	      "value": (_vm.secondValue)
	    },
	    on: {
	      "input": function($event) {
	        _vm.secondValue = $event
	      }
	    }
	  }) : _vm._e(), _vm._l((_vm.stops), function(item) {
	    return (_vm.showStops) ? _c('div', {
	      staticClass: "el-slider__stop",
	      style: ({
	        'left': item + '%'
	      })
	    }) : _vm._e()
	  })], 2)], 1)
	},staticRenderFns: []}

/***/ }

/******/ });