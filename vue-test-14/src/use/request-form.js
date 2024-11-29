import {useField} from "vee-validate";
import * as yup from 'yup'

export function useRequestForm() {
    const {isSubmitting, handleSubmit} = useForm()

    const {value: fio, errorMessage: fError, handleBlur: fBlur} = useField(
        'fio',
        yup.string()
            .trim()
            .required('Введите ФИО клиента')
    )
    const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField(
        'phone',
        yup.string()
            .trim()
            .required('Телефон не может быть пустым')
    )
    const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField(
        'amount',
        yup.number()
            .required('Введите сумму')
            .min(0, 'Сумма не может быть меньше 0')
    )
    const {value: status} = useField('status')

    const onSubmit = handleSubmit(async () => {

    })

    return {
        status,
        isSubmitting,
        onSubmit,
        fio,
        fError,
        fBlur,
        phone,
        pError,
        pBlur,
        amount,
        aError,
        aBlur,
    }
}