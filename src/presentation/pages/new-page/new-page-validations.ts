import { ClinicEnum } from '@/domain/models'
import { object, string } from 'yup'

export const clinicValidation = object({
  [ClinicEnum.Name]: string().required(),
  [ClinicEnum.Cpf]: string().required(),
  [ClinicEnum.Address]: string().required(),
  [ClinicEnum.SocialCapital]: string().required()
})