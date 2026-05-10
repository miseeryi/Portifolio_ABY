import bcrypt from "bcryptjs";

export default{
    async hashPassword(input: string): Promise<string>{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(input, salt);

        return hashedPassword;
    },
    async comparePassword(input: string, hashedPassword: string): Promise<boolean>{
        return await bcrypt.compare(input, hashedPassword)
    }
}