import { useMemo } from 'react';

import classNames from 'classnames';
import { Button } from 'components/Button';
import style from 'components/Pagination/Pagination.module.scss';

interface PaginationProps {
  show?: boolean;
  totalItems?: number;
  totalPages?: number;
  pageSize?: number;
  pageSizes?: number[];
  currentPage?: number;
  className?: string;
  onChangePage?: (page: number) => void;
  onChangePageSize?: (size: number) => void;
}

export const Pagination = ({
  show = true,
  totalItems = 0,
  totalPages = 0,
  currentPage = 1,
  pageSize = 10,
  pageSizes,
  className,
  onChangePage,
  onChangePageSize,
}: PaginationProps) => {
  const displayText = useMemo(() => {
    const first = (currentPage - 1) * pageSize + 1;
    const last = first + pageSize - 1;
    return `Showing ${first}-${last} of ${totalItems}`;
  }, [currentPage, totalItems, pageSize]);

  const handleMoveFirst = () => {
    onChangePage?.(1);
  };

  const handleMovePrev = () => {
    onChangePage?.(currentPage - 1);
  };

  const handleMoveNext = () => {
    onChangePage?.(currentPage + 1);
  };

  const handleMoveLast = () => {
    onChangePage?.(totalPages);
  };

  const handleChangePageSize = (size: number) => {
    onChangePageSize?.(size);
  };

  if (!show) return null;

  return (
    <div className={classNames(style.container, className)}>
      <div className={style.descriptions}>
        <span>Rows per page</span>
        {pageSizes && (
          <select
            value={pageSize}
            onChange={(e) => handleChangePageSize(Number(e.target.value))}
            className={style.pageSizeSelector}
          >
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        )}
        {!pageSizes && <span>{pageSize}</span>}
        <span>{displayText}</span>
      </div>
      <div className={style.pageButtons}>
        <Button className={style.pageButton} disabled={currentPage === 1} onClick={handleMoveFirst}>
          First
        </Button>
        <Button className={style.pageButton} disabled={currentPage === 1} onClick={handleMovePrev}>
          Previous
        </Button>
        <span>{`${currentPage} / ${totalPages}`}</span>
        <Button className={style.pageButton} disabled={currentPage === totalPages} onClick={handleMoveNext}>
          Next
        </Button>
        <Button className={style.pageButton} disabled={currentPage === totalPages} onClick={handleMoveLast}>
          Last
        </Button>
      </div>
    </div>
  );
};
