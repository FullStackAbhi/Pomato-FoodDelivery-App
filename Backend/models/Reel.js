const mongoose = require("mongoose");

const reelSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  likes: { type: Number, default: 0 },
  comments: [
    {
      user: String,
      text: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Reel", reelSchema);
