var BasePopUp = require('./base');
var Input = require('../../widgets/lib/universal-input');
var request = require('request');



/**
 * @constructor
 */
var HardAuth = function() {
	this._init({
		title: 'Full',
		message: '{center}Для авторизации{/center}\n' +
			'1. пройдите по ссылке ' + app.api.vk.getAuthUrl(true) + '\n' +
			'2. скопируйте содержимое адресной строки браузера в это поле ввода.\n' +
			'3. нажмите ENTER\n' +
			'4. перезапустите приложение \n',
		left: 15,
		top: 15,
		width: 80,
		height: 80
	});

	this._input = this._createInput();
	this._addButtons();

	this._submit.on(BlessedConst.event.BUTTON_PRESS, this._readInput.bind(this));
	this._showFullUrlButton.on(BlessedConst.event.BUTTON_PRESS, this._openFullUrlPopUp);
};
goog.inherits(HardAuth, BasePopUp);


/**
 * @return {*}
 */
HardAuth.prototype.getNode = function() {
	return this._node;
};


/**
 * @private
 */
HardAuth.prototype._openFullUrlPopUp = function() {
	app.ui.console.openPopUp(vknp.ui.console.popups.Simple, {
		title: 'FULL URL',
		message: app.api.vk.getAuthUrl(false),
		left: 2,
		top: 30,
		width: 96,
		height: 40
	});
};


/**
 * @private
 */
HardAuth.prototype._addButtons = function() {
	this._submit = this._createButton('{bold}submit{/bold}', {
		right: 10,
		bottom: 1
	});
	this._showFullUrlButton = this._createButton('показать полный адрес', {
		left: 1,
		bottom: 1
	});
};


/**
 * @return {Input}
 * @private
 */
HardAuth.prototype._createInput = function() {
	var input = new Input({
		parent: this._node,
		bottom: 4,
		left: 1,
		width: '98%',
		height: 3,
		style: {
			fg: 'white',
			bg: 'blue'
		}
	});

	input._node.key(BlessedConst.button.ENTER, this._readInput.bind(this));

	return input;
};


/**
 * @protected
 */
HardAuth.prototype._readInput = function() {
	var inputValue = this._input.getValue();
	var token;

	this._input.clearValue();
	app.ui.console.render();

	token = this._parseToken(inputValue);
	app.setConfig(['api', 'vk', 'token'], token);
};


/**
 * @param {string} query
 * @return {string}
 * @private
 */
HardAuth.prototype._parseToken = function(query) {
	var startPos = query.indexOf('access_token');
	var endPos = query.indexOf('&');
	query = query.substring(startPos, endPos);
	return query.substr(query.indexOf('=') + 1);
};


/**
 * @type {HardAuth}
 */
module.exports = HardAuth;
