import { Fragment } from 'react'
import type { DiagramColumn } from '../types'
import { eyebrow } from './ui'

/** Left-to-right architecture diagram. Colors are fixed (ink on lime) because it always sits on a lime panel. */
export function Diagram({ columns }: { columns: DiagramColumn[] }) {
  if (columns.length === 0) {
    return <p className={`w-full text-center text-ink ${eyebrow}`}>Diagram coming soon</p>
  }

  return (
    <ol aria-label="How it fits together" className="flex w-full items-stretch gap-2 text-ink sm:gap-3">
      {columns.map((column, i) => (
        <Fragment key={column.label}>
          {i > 0 && (
            <li aria-hidden="true" className="flex items-center font-mono text-xl font-bold">
              →
            </li>
          )}
          <li className="flex min-w-0 flex-1 flex-col gap-2">
            <p className={`${eyebrow} text-[10px]`}>{column.label}</p>
            <ul className="flex flex-1 flex-col justify-center gap-2">
              {column.nodes.map((node) => (
                <li key={node} className="border-2 border-ink bg-paper px-2.5 py-3 text-xs font-semibold leading-tight sm:px-3 sm:py-3.5 sm:text-base">
                  {node}
                </li>
              ))}
            </ul>
          </li>
        </Fragment>
      ))}
    </ol>
  )
}
