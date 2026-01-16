"use client"

import React from "react"
import { Calculator } from "lucide-react"

const TABLE_1_DATA = Array.from({ length: 20 }, (_, i) => ({
  index: `A${i + 1}`,
  value: Math.floor(Math.random() * 100) + 1 // Let's define a random values between 1-100
}))

TABLE_1_DATA[6].value = 10;
TABLE_1_DATA[14].value = 20;

const getValue = (key: string) => {
  const item = TABLE_1_DATA.find(d => d.index === key)
  return item ? item.value : 0
}

const Assessment: React.FC = () => {
  const alpha = getValue('A5') + getValue('A20')

  const beta = Math.round((getValue('A15') / getValue('A7')) * 100) / 100 

  const charlie = getValue('A13') * getValue('A12')

  const TABLE_2_DATA = [
    { category: "Alpha", value: alpha },
    { category: "Beta", value: beta },
    { category: "Charlie", value: charlie }
  ]

  return (
    <section className="relative w-full py-24 bg-white border-t border-black/5">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Calculator className="w-5 h-5 text-[#FA891A]" />
            <span className="text-[#FA891A] font-bold tracking-wider text-sm uppercase">Technical Assessment</span>
          </div>
          <h2 className="text-3xl font-bold text-zinc-900">
            Table Output & Processing
          </h2>
        </div>

        <div className="space-y-16">
          
          <div>
            <h3 className="font-bold text-zinc-900 mb-4 text-lg">Table 1 (Input Data)</h3>
            <div className="overflow-x-auto">
              
              <table className="w-full border-collapse border border-black text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-black px-4 py-2 font-bold text-center w-1/2">Index</th>
                    <th className="border border-black px-4 py-2 font-bold text-center w-1/2">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_1_DATA.map((row) => (
                    <tr key={row.index}>
                      <td className="border border-black px-4 py-2 text-center font-medium">{row.index}</td>
                      <td className="border border-black px-4 py-2 text-center">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-zinc-900 mb-4 text-lg">Table 2 (Processed)</h3>
          
            <div className="w-full max-w-lg mx-auto">
              <table className="w-full border-collapse border border-black text-black">
                <thead>
                  <tr>
                    <th className="border border-black px-8 py-3 font-bold text-center text-lg bg-transparent">
                      Category
                    </th>
                    <th className="border border-black px-8 py-3 font-bold text-center text-lg bg-transparent">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_2_DATA.map((row) => (
                    <tr key={row.category}>
                      <td className="border border-black px-8 py-3 text-center text-lg">
                        {row.category}
                      </td>
                      <td className="border border-black px-8 py-3 text-center text-lg font-medium">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Assessment