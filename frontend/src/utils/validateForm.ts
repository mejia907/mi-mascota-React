import * as yup from 'yup'

export const LoginValidate = yup.object().shape({
    user: yup.string().trim().required('El usuario es requerido'),
    password: yup.string().trim().required('La contraseña es requerida'),
})

export const ClientValidate = yup.object().shape({
    type_document: yup.string().trim().required('El tipo de documento es requerido'),
    document: yup.string().trim().required('El numero del documento es requerido'),
    first_name: yup.string().trim().required('El nombre es requerido'),
    mobile: yup.string().trim().required('El número de celular es requerido'),
    gender: yup.string().trim().required('El género es requerido'),
})