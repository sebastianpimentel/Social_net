const Post = require("../models/post");

const registerPost = async (req, res) => {
  if (!req.body.numeral || !req.body.description)
    return res.status(400).send("Process failed: Incomplete data");

  const post = new Post({
    userId: req.user._id,
    description: req.body.description,
    numeral: req.body.numeral,
    dbStatus: true,
  });

  let result = await post.save();
  if (!result) return res.status(400).send("Failed to register post");
  return res.status(200).send({ result });
};
const listPost = async(req,res)=>{
  const post=await Post.find({numeral:new RegExp(req.params["numeral"],"i")});
  if(!post || post.length===0)
  return res.status(400).send("No posts")
  return res.status(200).send({post})
}
module.exports = { registerPost, listPost };
