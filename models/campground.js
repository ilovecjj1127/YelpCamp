import mongoose from "mongoose";
mongoose.set('strictQuery', false);
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String
});

const CampGround = mongoose.model('Campground', CampgroundSchema);
export default CampGround;
