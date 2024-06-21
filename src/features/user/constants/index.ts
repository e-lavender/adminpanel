import { TableHeaderModel } from '@/ui/common/table/tabel-types'

export const PAYMENTS_TABLE_COLUMNS: TableHeaderModel[] = [
  {
    key: 'dateOfPayment',
    title: 'Date of Payments',
  },
  {
    key: 'endDateOfSubscription',
    title: 'End date of subscription',
  },
  {
    key: 'amount$',
    title: 'Amount, $',
  },
  {
    key: 'subscriptionType',
    title: 'Subscription Type',
  },
  {
    key: 'paymentType',
    title: 'Payment Type',
  },
]
