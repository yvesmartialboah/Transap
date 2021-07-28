import * as yup from 'yup'

export const infoParamYup = yup.object().shape({
    addresse_ip: yup
        .string()
        .required("L'adresse ip est requise !!!"),
})