export interface WholesaleFormData {
  businessName: string
  contactName: string
  email: string
  phone: string
  location: string
  volume: string
  message: string
}

export const initialWholesaleForm: WholesaleFormData = {
  businessName: '',
  contactName: '',
  email: '',
  phone: '',
  location: '',
  volume: '',
  message: '',
}

export const VOLUME_OPTIONS = [
  { value: '', label: 'Select a range' },
  { value: 'under-10kg', label: 'Under 10kg' },
  { value: '10-50kg', label: '10–50kg' },
  { value: '50-100kg', label: '50–100kg' },
  { value: '100kg+', label: '100kg+' },
]
