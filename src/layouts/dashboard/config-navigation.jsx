import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'nav_dashboard_t',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'nav_users_t',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'nav_product_t',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'nav_product_info_t',
    path: '/product_info',
    icon: icon('ic_cart'),
  },
  {
    title: "nav_booking_t",
    path: "/booking",
    icon: icon('')
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
