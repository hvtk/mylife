import bcrypt from "bcrypt"

export function hashPassword(password) {
    return bcrypt.hashSync(password, 10)
}

export function verify(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword)
}