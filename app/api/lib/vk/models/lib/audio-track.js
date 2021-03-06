/**
 * Created with JetBrains WebStorm.
 * User: oleg
 * Date: 21.12.13
 * Time: 23:28
 * To change this template use File | Settings | File Templates.
 */
var models = require('../');



/**
 * @param {Object} data
 * @constructor
 */
var AudioTrack = function(data) {
	goog.base(this, data);
};
goog.inherits(AudioTrack, models.AbstractModel);


/**
 * @param {Object} data
 */
AudioTrack.prototype.parse = function(data) {
	goog.base(this, 'parse', data);

	/** @type {?number} */
	this.id = data['id'] || null;

	/** @type {?number} */
	this.ownerId = data['owner_id'] || null;

	/** @type {string} */
	this.artist = data['artist'] || '';

	/** @type {string} */
	this.title = data['title'] || '';

	/** @type {string} */
	this.duration = data['duration'] || 0;

	/** @type {string} */
	this.url = data['url'] || data['uri'] || '';

	/** @type {string} */
	this.lyricsId = data['lyrics_id'] || null;

	/** @type {?number} */
	this.albumId = data['album_id'] || null;

	/** @type {AudioTrack.genreType} */
	this.genreId = data['genre_id'] || null;
};


/**
 * @return {string}
 */
AudioTrack.prototype.toString = function() {
	return (this.artist ? this.artist + ' - ' : '' ) + this.title;
};


/**
 * @enum {number}
 */
AudioTrack.genreType = {
	ROCK: 1,
	POP: 2,
	RAP_AND_HIP_HOP: 3,
	EASY_LISTENING: 4,
	DANCE_AND_HOUSE: 5,
	INSTRUMENTAL: 6,
	METAL: 7,
	ALTERNATIVE: 21,
	DUBSTEP: 8,
	JAZZ_AND_BLUES: 9,
	DRUM_AND_BASS: 10,
	TRANCE: 11,
	CHANSON: 12,
	ETHNIC: 13,
	ACOUSTIC_AND_VOCAL: 14,
	REGGAE: 15,
	CLASSICAL: 16,
	INDIE_POP: 17,
	SPEECH: 19,
	ELECTROPOP_AND_DISCO: 22,
	OTHER: 18
};


module.exports = AudioTrack;