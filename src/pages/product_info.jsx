import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { ProductInfoView } from 'src/sections/product_info/view';

// ----------------------------------------------------------------------

export default function ProductInfo() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('product_info_title_t')}</title>
      </Helmet>

      <ProductInfoView />
    </>
  );
}
