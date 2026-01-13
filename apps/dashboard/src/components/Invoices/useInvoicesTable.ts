/*
 * Copyright 2025 Daytona Platforms Inc.
 * SPDX-License-Identifier: AGPL-3.0
 */

import { Invoice } from '@/billing-api/types/Invoice'
import { DEFAULT_PAGE_SIZE } from '@/constants/Pagination'
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'
import { getColumns } from './columns'

interface UseInvoicesTableProps {
  data: Invoice[]
  onViewInvoice?: (invoice: Invoice) => void
}

export function useInvoicesTable({ data, onViewInvoice }: UseInvoicesTableProps) {
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: 'number',
      desc: false,
    },
  ])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const columns = useMemo(
    () =>
      getColumns({
        onViewInvoice,
      }),
    [onViewInvoice],
  )

  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    defaultColumn: {
      size: 100,
    },
    getRowId: (row) => row.id,
    initialState: {
      pagination: {
        pageSize: DEFAULT_PAGE_SIZE,
      },
    },
  })

  return {
    table,
    sorting,
    columnFilters,
  }
}
