import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import AppNewsUpdate from '../app-news-update';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';

// ----------------------------------------------------------------------

export default function AppView() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        {t('welcome')} 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title={t('total_dvertisements_t')}
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/advertising.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title={t('total_users_t')}
            total={1352831}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/group.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title={t('need_tobe_approven_t')}
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/search.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title={t('reservation_number_t')}
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/reservation.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title={t('site_activities_t')}
            subheader={`(+43%) ${t('than_last_year')}`}
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: t('reservations_t'),
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: t('users_t'),
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: t('advertisements_t'),
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title={t('total_dvertisements_t')}
            chart={{
              series: [
                { label: 'Farms', value: 2750 },
                { label: 'Lands', value: 5375 },
                { label: 'Apartments', value: 4107 },
                { label: 'Houses', value: 1004 },
                { label: 'Swimming pools', value: 150 },
              ],
            }}
          />
        </Grid>

        {/* <Grid xs={12}>
          <AppConversionRates
            title="Conversion Rates"
            subheader={`(+43%) ${t('than_last_year')}`}
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ],
            }}
          />
        </Grid> */}

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title={t('new_updates_t')}
            list={[]}
            /*
             * Each List item should have these.
             * id: string | number // uuid or just a numeric one
             * title: string
             * description: string
             * image: string
             * postedAt: string
             */
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={8}>
          <AppTasks title="Tasks" list={[{ id: '1', name: 'Add The Logo' }]} />
        </Grid> */}
      </Grid>
    </Container>
  );
}
