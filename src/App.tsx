import React, { useCallback, useState } from 'react'
import './App.css'
import { CountryCheckbox } from './interfaces/CountriesOptions'
import Checkbox from './components/Checkbox'

const initialCountries: CountryCheckbox[] = [
  { id: 'india', label: 'India', isChecked: false },
  { id: 'usa', label: 'USA', isChecked: false },
  { id: 'france', label: 'France', isChecked: false }
]

const App: React.FunctionComponent = () => {
  const [countries, setCountries] =
    useState<CountryCheckbox[]>(initialCountries)

  const toggleSelectAll = useCallback(
    (isSelected: boolean) => {
      setCountries(
        countries.map((country) => ({ ...country, isChecked: isSelected }))
      )
    },
    [countries]
  )

  const handleCountryChange = useCallback(
    (id: string, isChecked: boolean) => {
      const newCountries = countries.map((country) =>
        country.id === id ? { ...country, isChecked } : country
      )

      setCountries(newCountries)
    },
    [countries]
  )
  const isAllSelected = countries.every((country) => country.isChecked)

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h2 className='text-lg'>Minimal countries selector</h2>
      <div className='bg-indigo-300 p-6 rounded shadow-lg'>
        <div className='flex flex-col items-start'>
          <Checkbox
            label='Select All'
            checked={isAllSelected}
            onChange={toggleSelectAll}
          />
          {countries.map((country) => (
            <>
              <Checkbox
                key={country.id}
                label={country.label}
                checked={country.isChecked}
                onChange={(isChecked) =>
                  handleCountryChange(country.id, isChecked)
                }
              />
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
