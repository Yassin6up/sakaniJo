import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { products } from 'src/_mock/products';

import Iconify from 'src/components/iconify';

import ProductCard from '../product-card';
import ProductAddPopover from '../product-add';
import ProductSort from '../product-sort';
import ProductFilters from '../product-filters';
import ProductCartWidget from '../product-cart-widget';

// ----------------------------------------------------------------------

export default function ProductsView() {
  const { t } = useTranslation();
  const [openAddProduct, setOpenAddProduct] = useState(false);

  const handleClosePopover = () => {
    setOpenAddProduct(false);
  };
  const handleOpenPopover = () => {
    setOpenAddProduct(true);
  };
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">{t('products_title_t')}</Typography>

        <Button
          variant="contained"
          onClick={handleOpenPopover}
          color="inherit"
          dir="ltr"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          {t('new_product_t')}
        </Button>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />

          <ProductSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <div
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <ProductAddPopover open={openAddProduct} onClose={handleClosePopover} />
      </div>
      {/* <ProductCartWidget /> */}
    </Container>
  );
}
