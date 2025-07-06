const { default: mongoose } = require("mongoose");

const resturantModel = new mongoose.Schema(
    {
        name: String,
        number: String,
        address: String,
        email: String,
        password: String,
    },
    {
        collection: "resturant",
    }
)

export const Resturant = mongoose.models?.Resturant || mongoose.model("Resturant", resturantModel);