import Select from 'react-select'
import { useState } from 'react'
import { Controller } from 'react-hook-form'

const AddAmenities = ({control}) => {
    const options = [
  { value: 'parking', label: 'پارکینگ' },
  { value: 'elevator', label: 'آسانسور' },
  { value: 'security', label: 'نگهبانی' },
  { value: 'garden', label: 'باغ' },
  { value: 'pool', label: 'استخر' },
  { value: 'balcony', label: 'بالکن' },
  { value: 'ac', label: 'کولر' },
  { value: 'heating', label: 'سیستم گرمایشی' },
  { value: 'internet', label: 'اینترنت' },
  { value: 'cable_tv', label: 'تلویزیون کابلی' },
  { value: 'pet_friendly', label: 'مناسب حیوانات خانگی' },
  { value: 'furniture', label: 'مبله' }
];

  return (
    <div>
        <Controller
        name="amenities"
        control={control}
        render={({ field }) => (
            <Select
            options={options}
            isMulti
            placeholder="چی امکاناتی دارد"
            value={options.filter(option =>
                field.value?.includes(option.value)
            )}
            onChange={(selectedOptions) =>
                field.onChange(
                selectedOptions.map(option => option.value)
                )
            }
            />
        )}
        />
    </div>
  )
}

export default AddAmenities