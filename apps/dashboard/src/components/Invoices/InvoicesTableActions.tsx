/*
 * Copyright 2025 Daytona Platforms Inc.
 * SPDX-License-Identifier: AGPL-3.0
 */

import { Download, Eye, MoreVertical } from 'lucide-react'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { InvoicesTableActionsProps } from './types'

export function InvoicesTableActions({ invoice, onView }: InvoicesTableActionsProps) {
  const handleView = () => {
    onView?.(invoice)
  }

  const handleDownload = () => {
    if (invoice.fileUrl) {
      window.open(invoice.fileUrl, '_blank')
    }
  }

  return (
    <div className="flex items-center gap-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreVertical className="h-4 w-4" aria-label="Open menu" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {onView && (
            <DropdownMenuItem onClick={handleView}>
              <Eye className="mr-2 h-4 w-4" />
              View
            </DropdownMenuItem>
          )}
          {invoice.fileUrl && (
            <DropdownMenuItem onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
