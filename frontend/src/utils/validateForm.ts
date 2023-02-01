import * as yup from "yup"

export const LoginValidate =yup.object().shape({
    user: yup.string().trim().required("El usuario es requerido"),
    password: yup.string().trim().required("La contraseña es requerida"),
})