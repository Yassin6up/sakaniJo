/* eslint-disable perfectionist/sort-named-imports */

import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';

import {
  Box,
  Grid,
  Container,
  Typography,
  Stack,
  Popover,
  MenuItem,
  IconButton,
} from '@mui/material';

import { ProductState, products } from 'src/_mock/products';

import Iconify from 'src/components/iconify';

import { If } from 'src/components/statments';
import ProductInfo from '../product-info';
import BookingListPopover from '../BookingListPopover';

export default function ProductInfoView() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [bookingInfoOpen, setBookingInfoOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const productId = searchParams.get('id');
  useEffect(() => {
    if (!productId)
      navigate('/404', {
        state: 300,
      });
  });

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleOpenMenu = (ev) => {
    setAnchorEl(ev.currentTarget);
  };

  const handleBookingOpen = (ev) => {
    setBookingInfoOpen(true);
    handleCloseMenu();
  };
  const handleBookingClose = (ev) => {
    setBookingInfoOpen(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'more-options-popover' : undefined;

  // eslint-disable-next-line eqeqeq
  const targetProduct = products.find((product) => product.id == productId);
  if (!targetProduct) navigate('/404', 300);
  const coverView = (
    <Box
      borderRadius="10px"
      overflow="hidden"
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    >
      <ImageGallery items={targetProduct.cover} />
    </Box>
  );
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">{t('product_info_title_t')}</Typography>

        <IconButton aria-describedby={id} onClick={handleOpenMenu}>
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </Stack>

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Box sx={{ pt: '100%', position: 'relative' }}>{coverView}</Box>
        </Grid>
        <Grid item xs={8}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mt={2}
            width="100%"
          >
            <Typography variant="h4" textAlign="start" overflow="scroll" component="u">
              {targetProduct.name}
            </Typography>
            <Typography fontSize={20} mr={10}>
              {targetProduct.price}$
            </Typography>
          </Stack>
          <Grid container spacing={1} mt={2} ml={2} width="100%">
            <Grid item xs={12 / 3}>
              <ProductInfo name="Id" value={targetProduct.id} />
            </Grid>
            <Grid item xs={12 / 3}>
              <ProductInfo
                name={t('status_t')}
                value={targetProduct.status === 'In-sale' ? t('in-sale_t') : t('sold_t')}
                valueColor={
                  targetProduct.status === ProductState.InSale ? 'success.main' : 'error.main'
                }
              />
            </Grid>
            <Grid item xs={12 / 3}>
              <ProductInfo name={t('purchase_type_t')} value={t(targetProduct.purchaseType)} />
            </Grid>
            <Grid item xs={4}>
              <ProductInfo
                name={t('approved_t')}
                value={targetProduct.approved ? 'Yes' : 'No'}
                valueColor={targetProduct.approved ? 'success.main' : 'warning.main'}
              />
            </Grid>
            <Grid item xs={4}>
              <ProductInfo name={t('address_t')} value={targetProduct.address} />
            </Grid>
            <Grid item xs={4}>
              <ProductInfo name={t('sale_price_t')} value={targetProduct.price} />
            </Grid>
            <Grid item xs={4}>
              <ProductInfo name={t('type_t')} value={targetProduct.productType} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" component="span">
                {t('description_t')}:{' '}
              </Typography>
              <Typography variant="body1" ml={1}>
                {targetProduct.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <If condition={targetProduct.purchaseType === "Booking"}>
          <MenuItem onClick={handleBookingOpen} sx={{ color: 'action.active' }}>
            <Iconify icon="eva:bookmark-outline" sx={{ mr: 2 }} />
            {t('Booking')}
          </MenuItem>
        </If>
        {!targetProduct.approved ? (
          <>
            <MenuItem onClick={handleCloseMenu} sx={{ color: 'success.main' }}>
              <Iconify icon="eva:checkmark-circle-fill" sx={{ mr: 2 }} />
              {t('approve_t')}
            </MenuItem>
            <MenuItem onClick={handleCloseMenu} sx={{ color: 'warning.main' }}>
              <Iconify icon="eva:close-circle-outline" sx={{ mr: 2 }} />
              {t('reject_t')}
            </MenuItem>
          </>
        ) : (
          ''
        )}

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          {t('delete_t')}
        </MenuItem>
      </Popover>
      <BookingListPopover open={bookingInfoOpen} onClose={handleBookingClose}/>
    </Container>
  );
}
