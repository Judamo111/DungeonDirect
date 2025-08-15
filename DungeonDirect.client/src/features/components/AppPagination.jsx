import { Box, Pagination, Typography } from "@mui/material";

export default function AppPagination({ metadata, onPageChange }) {
  const { currentPage, totalPages, pageSize, totalCount } = metadata || {
    currentPage: 1,
    totalPages: 1,
    pageSize: 10,
    totalCount: 0,
  };

  const startItem =
    totalCount === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalCount);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginTop={3}
      marginRight={11}
    >
      <Typography>
        Displaying {startItem}-{endItem} of {totalCount} items
      </Typography>

      <Pagination
        color="secondary"
        size="large"
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => onPageChange(page)}
      />
    </Box>
  );
}
