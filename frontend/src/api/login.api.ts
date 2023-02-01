import { instance } from "./base.api"

const endpoint = "auth/login"

export const login = {
  singin: function ({ user, password }: { user: string; password: string }) {
    return instance.post(endpoint, {user, password})
  },
}
