import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TableProps {
  className?: string;
  children: React.ReactNode;
}

export function Table({ className, children }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table
        className={twMerge(
          clsx(
            'min-w-full divide-y divide-gray-300',
            className
          )
        )}
      >
        {children}
      </table>
    </div>
  );
}

Table.Head = function TableHead({ className, children }: TableProps) {
  return (
    <thead className={twMerge(clsx('bg-gray-50', className))}>
      {children}
    </thead>
  );
};

Table.Body = function TableBody({ className, children }: TableProps) {
  return (
    <tbody
      className={twMerge(
        clsx(
          'divide-y divide-gray-200 bg-white',
          className
        )
      )}
    >
      {children}
    </tbody>
  );
};

Table.Row = function TableRow({ className, children }: TableProps) {
  return (
    <tr
      className={twMerge(
        clsx(
          'hover:bg-gray-50',
          className
        )
      )}
    >
      {children}
    </tr>
  );
};

Table.Cell = function TableCell({ className, children }: TableProps) {
  return (
    <td
      className={twMerge(
        clsx(
          'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
          className
        )
      )}
    >
      {children}
    </td>
  );
};

Table.HeaderCell = function TableHeaderCell({ className, children }: TableProps) {
  return (
    <th
      className={twMerge(
        clsx(
          'px-3 py-3.5 text-left text-sm font-semibold text-gray-900',
          className
        )
      )}
      scope="col"
    >
      {children}
    </th>
  );
};