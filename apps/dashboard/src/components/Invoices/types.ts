/*
 * Copyright 2025 Daytona Platforms Inc.
 * SPDX-License-Identifier: AGPL-3.0
 */

import { Invoice } from '@/billing-api'
import { Table } from '@tanstack/react-table'

export interface InvoicesTableProps {
  data: Invoice[]
  loading: boolean
  onViewInvoice?: (invoice: Invoice) => void
  onRowClick?: (invoice: Invoice) => void
}

export interface InvoicesTableActionsProps {
  invoice: Invoice
  onView: (invoice: Invoice) => void
}

export interface InvoicesTableHeaderProps {
  table: Table<Invoice>
}
