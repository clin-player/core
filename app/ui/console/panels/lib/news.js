/**
 * Created by oleg on 22.08.14.
 */
var PlayList = require('./playlist');
var BasePanel = require('./base-panel');



/**
 * @extends {BasePanel}
 * @constructor
 */
var News = function() {
	this._newsList = {};
	goog.base(this, {
		left: 0,
		top:  2,
		bottom: 4,
		width: '50%',
		hidden: true
	});
};
goog.inherits(News, BasePanel);


News.prototype._loadData = function() {
	return app.api.vk
		.getListNews()
		.then(function(newsList) {
			newsList.forEach(function(item) {
				item.toString = function() {
					return item.title;
				};
			});

			this.setData(newsList);
		}.bind(this));
};


/**
 * @param select
 * @param {number} selectNumber
 * @protected
 */
News.prototype._clickHandler = function(eventName, select, selectNumber) {
	if (selectNumber === 0) {
		this._back();
		return;
	}

	var item = this._getDataItem(selectNumber);

	app.api.vk
		.getNews({
			listIds: item ? item.id : '',
			filter: 'post',
			count: '100'
		})
		.then(function(news) {
			var tracks = news.getAudioAttachments();
			app.ui.console._panels.slavePL.setContent(tracks);//todo make datalist
		}.bind(this));
};


/** @inheritDoc */
News.prototype._recoveryDefaultState = function() {
	goog.base(this, '_recoveryDefaultState');

	this.addChild(this.DEFAULT_GROUP_NAME);
	this._setOffset(this._getOffset() + 1);
};


/**
 * @const {string}
 */
News.prototype.DEFAULT_GROUP_NAME = 'Основные';


/**
 * @type {DataList.<AudioTrack>}
 */
News.prototype.playlist;


/**
 * @type {Object}
 */
News.prototype._newsList;


module.exports = News;
