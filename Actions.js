import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const ADD_LIKE_TO_COMMENT = 'ADD_LIKE_TO_COMMENT';
const ADD_UNLIKE_TO_COMMENT = 'ADD_UNLIKE_TO_COMMENT';

function addComment (text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

function editComment (id, text) {
	return {
		type: EDIT_COMMENT,
		text,
		id: uuid.v4()
	}
}

function deleteComment (id) {
	return {
		type: DELETE_COMMENT,
		id: uuid.v4()
	}
}

function addLikeToComment (id) {
	return {
		type: ADD_LIKE_TO_COMMENT,
		id: uuid.v4()
	}
}

function addUnlikeToComment (id) {
	return {
		type: ADD_UNLIKE_TO_COMMENT,
		id: uuid.v4()
	}
}