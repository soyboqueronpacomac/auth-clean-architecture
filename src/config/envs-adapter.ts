import { get } from "env-var"

const env = Bun.env

export const envsAdapater = {
    PORT: get('PORT').required().asPortNumber(),
}