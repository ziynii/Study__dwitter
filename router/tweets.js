import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tweet.js';
const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
// 값을 연결하는 것이 아닌 함수를 연결하는 것이므로 호출이 아니다
router.get('/', tweetController.getTweets);

// GET /tweets/:id
router.get('/:id', tweetController.getTweet);

// POST /tweets
router.post('/', tweetController.createTweet);

// PUT /tweets/:id
router.put('/:id', tweetController.updateTweet);

// DELETE /tweets/:id
router.delete('/:id', tweetController.deleteTweet);

export default router;
