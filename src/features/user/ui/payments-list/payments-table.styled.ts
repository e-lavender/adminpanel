import { Table } from '@/ui/common/table/table'
import { styled } from 'styled-components'

export const PaymentsTableStyles = {
  TableBody: styled(Table.Body)`
    border: 1px solid var(--color-dark-500);
  `,
  TableHead: styled(Table.Head)`
    background-color: var(--color-dark-500);
  `,
  TableHeadCell: styled(Table.HeadCell)`
    padding-left: 24px;

    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    color: var(--text-color-primary);
    vertical-align: middle;
  `,
  TableRoot: styled(Table.Root)`
    width: 100%;
    margin-bottom: 36px;
  `,
  TableRow: styled(Table.Row)`
    height: 48px;

    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: var(--text-color-primary);
    text-align: left;

    border-bottom: 1px solid var(--color-dark-500);

    td {
      padding-left: 24px;

      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      color: var(--text-color-primary);
      vertical-align: middle;
    }
  `,
}
