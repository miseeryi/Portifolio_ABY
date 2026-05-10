import mongoose, {HydratedDocument} from "mongoose";
import { ROLES } from "../utils/constants";
import bcryptData from "../utils/bcrypt";
import { encrypt } from "../utils/encrypt";

const Schema = mongoose.Schema;

interface IUser {
    name: string;
    username: string;
    email: string;
    password: string;
    photoURL: string; 
    roles: ROLES.ADMIN | ROLES.MEMBER; 
    is_active: boolean; 
    activation_code: string; 
    reset_password_token: string | null; 
    reset_password_expiredAt: Date | null; 
}

const userSchema = new Schema<IUser>({
    name: {
        type: Schema.Types.String,
        required: true,
        trim: true,
        maxLenght: 200
    },
    username: {
        type: Schema.Types.String,
        unique: true,
        required: true,
        trim: true,
        maxLenght: 150
    },
    email: {
        type: Schema.Types.String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: Schema.Types.String,
        required: true,
        trim: true
    },
    photoURL: {
        type: Schema.Types.String,
        trim: true,
        default: "photo PNG"
    },
    roles: {
        type: Schema.Types.String,
        enum: [ROLES.ADMIN, ROLES.MEMBER],
        default: ROLES.MEMBER
    },
    is_active: {
        type: Schema.Types.Boolean,
        default: false 
    },
    activation_code:{
        type: Schema.Types.String,
        trim: true
    },
    reset_password_token: {
        type: Schema.Types.String,
        default: null
    },
    reset_password_expiredAt: {
        type: Schema.Types.Date,
        default: null,   
    }

});

userSchema.pre('save', async function (next) {
    const doc = this as HydratedDocument<IUser>;
    if (!doc.isModified("password")) return;
    doc.password = await bcryptData.hashPassword(doc.password);
    doc.activation_code = await encrypt(doc._id.toString())
});


const UserModel = mongoose.model("User", userSchema);

export default UserModel;