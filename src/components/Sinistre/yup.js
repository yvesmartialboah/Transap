import * as yup from 'yup'

export const infoSinistreYup = yup.object().shape({
    num_sinistre: yup
        .string()
        .required('Le numéro sinistre est requis !!!'),
    nom_proprietaire: yup
        .string()
        .min(4, ({ min }) => `Veuillez saisir au moins ${min} caractères !!!`)
        .required('Le nom du proprietaire est requis !!!'),
    prenom_proprietaire: yup
        .string()
        .min(4, ({ min }) => `Veuillez saisir au moins ${min} caractères !!!`)
        .required('Le prénom du proprietaire est requis !!!'),
    numero_police: yup
        .number()
        .typeError('Veuillez spécifier un numéro svp.')
        .required('Le numéro de police est requis !!!'),
    affaire: yup
        .string()
        .required("L'affaire est requise !!!"),
    assurance: yup
        .string()
        .required("L'assurance est requise !!!"),
    date_assurance: yup
        .string()
        // .required("La date est requise !!!"),
    // password: yup
    //     .string()
    //     .min(8, ({ min }) => `Password must be at least ${min} characters`)
    //     .required('Password is required'),
})