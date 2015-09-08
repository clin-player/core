var dataViews = require('../');



/**
 * @param {NewsItem.Input} data
 * @constructor
 */
var NewsItem = function(data) {
	this._data = data;
};
goog.inherits(NewsItem, dataViews.Abstract);


/**
 * @return {Promise.<Playlist>}
 */
NewsItem.prototype.getChild = function() {
	return app.api.vk
		.getNews({
			listIds: this._data.id,
			filter: 'post',
			count: '100'
		})
		.then(function(news) {
			return new news
				.getAudioAttachments()
				.map(function(track) {
					return new vknp.models.AudioTrack(track);
				});
		}.bind(this));
};


/**
 * @inheritDoc
 */
NewsItem.prototype.toString = function() {
	return this._data.title;
};


/**
 * @type {NewsItem.Input}
 */
NewsItem.prototype._data;

/**
 * @typedef {{
 *      title: string,
 *      id: number
 * }}
 */
NewsItem.Input;


module.exports = NewsItem;