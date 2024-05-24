import { FC, KeyboardEvent } from 'react'

import { SelectVariant } from '@/app/constants/enum/enums'
import { ROWS_PER_PAGE } from '@/ui/common/pagination/constants'
import { PaginationStyles } from '@/ui/common/pagination/pagination.styled'
import { Typography } from '@flyingtornado06/ui-kit'

import { usePagination } from './usePagination'

export type PaginationPropsType = {
  className?: string
  currentPage: number
  onPageChange: (page: number) => void
  onPageSizeChange: (pageSize: string) => void
  pageSize: number
  siblingCount: number
  totalCount: number
}
export const Pagination: FC<PaginationPropsType> = props => {
  const { Container, Dots, Page, Pages, RowsPerPage, Select } = PaginationStyles
  const {
    currentPage,
    onPageChange,
    onPageSizeChange,
    pageSize,
    siblingCount = 1,
    totalCount,
  } = props
  const DOTS = '\u2026'
  const paginationRange = usePagination({
    DOTS,
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  const lastPage = paginationRange[paginationRange.length - 1]
  const disabledLeft = currentPage === 1
  const disableRight = currentPage === lastPage

  const leftTabIndex = disabledLeft ? -1 : 0
  const rightTabIndex = disableRight ? -1 : 0

  if (currentPage === 0 || paginationRange.length < 1) {
    return null
  }

  const onNext = () => {
    !disableRight && onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    !disabledLeft && onPageChange(currentPage - 1)
  }
  const onKeyDownSpaceLeft = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Space') {
      onPrevious()
    }
  }
  const onKeyDownSpaceRight = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Space') {
      onNext()
    }
  }
  const pages = paginationRange.map((pageNumber, index) => {
    const setActivePage = () => {
      onPageChange(+pageNumber)
    }
    const onKeyDownSpace = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.code === 'Space') {
        onPageChange(+pageNumber)
      }
    }

    return pageNumber === DOTS ? (
      <Dots key={index}>
        <Typography variant={'regular-14'}>{DOTS}</Typography>
      </Dots>
    ) : (
      <Page
        active={currentPage === pageNumber}
        key={index}
        onClick={setActivePage}
        onKeyDown={onKeyDownSpace}
        tabIndex={0}
      >
        {pageNumber}
      </Page>
    )
  })

  return (
    <Container>
      <Pages>
        <div onClick={onPrevious} onKeyDown={onKeyDownSpaceLeft} tabIndex={leftTabIndex}>
          {'<'}
        </div>
        {pages}
        <div onClick={onNext} onKeyDown={onKeyDownSpaceRight} tabIndex={rightTabIndex}>
          {'>'}
        </div>
      </Pages>
      <RowsPerPage>
        <Typography variant={'regular-14'}>{'Show'}</Typography>
        <Select
          onChange={onPageSizeChange}
          options={ROWS_PER_PAGE}
          value={pageSize}
          variant={SelectVariant.Pagination}
        />
        <Typography variant={'regular-14'}>{'On page'}</Typography>
      </RowsPerPage>
    </Container>
  )
}
