/**
 * Created by oleg on 16.06.14.
 */

var blessed = require('blessed');
var events = require("events");
var util = require('util');

var BasePanel = require('./base-panel');

/**
 * @constructor
 * @extends {BasePanel}
 */
var RadioList = function() {
	goog.base(this);
	this._playlist = app.ui.console.slaveList.getPlaylist();
	this.ownerId = {};

	app.ui.console.on(app.ui.console.EVENT_SET_TOP, function(newPanel, oldPanel) {
		if (newPanel === this && oldPanel !== app.ui.console.slaveList) {
			this.backPanel = oldPanel;
		}
	}.bind(this));
};
goog.inherits(RadioList, BasePanel);


/**
 * @param {Array.<vknp.models.Album>} albums
 * @param {number} ownerId
 */
RadioList.prototype.updatePanel = function(albums, ownerId) {
	goog.base(this, 'updatePanel', arguments);
	this.ownerId = ownerId;

	if (app.ui.console.userId !== ownerId) {
		this.addChild('Вся музыка');
	}
	albums.forEach(function(album) {
		this.addChild(album.toString());
	}.bind(this));
	app.ui.console.setActivePanel(this);
};


/**
 * @inheritDoc
 */
RadioList.prototype._click = function(eventName, item, position) {
	if (position === 0) {
		this._back();
		return;
	}
	if (position === 1) {
		app.ui.console.mainList.showMusic(this.ownerId);
		return;
	}
	var album = this._getDataItem(position);
	app.api.vk.getAudio(album.ownerId, 300, album.albumId)
		.then(function(tracks) {
			app.ui.console.slaveList.setContent(tracks);
		}.bind(this));
};


RadioList.prototype._show = function() {
	app.ui.console.setActivePanel(this.backPanel);
};


/**
 *
 */
RadioList.prototype.backPanel;


/**
 * @type {PlayListItem}
 */
RadioList.prototype.playlist;


/**
 * @type {number}
 */
RadioList.prototype.ownerId;


module.exports = RadioList;