import PropTypes from 'prop-types';

// material-ui
import { Box, Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const AnalyticEcommerce = ({ color, title, count, percentage, isLoss, extra }) => (
    <MainCard contentSX={{ p: 2.25 }}>
        <Stack spacing={0.5}>
            <Grid container alignItems="center">
                {/* create a responsive image here */}
                <Box>
                    <img
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        src="https://images.unsplash.com/photo-1674763973434-75e1930d4959?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=274&q=80"
                        alt="icon"
                    />
                </Box>
            </Grid>
        </Stack>
        <Box sx={{ pt: 2.25 }}>
            <Typography variant="caption">{'All about color'}</Typography>
        </Box>
        <Box sx={{ pt: 2.25 }}>
            <Typography variant="caption" color="textSecondary">
                {'John Doe'}
            </Typography>
        </Box>
    </MainCard>
);

AnalyticEcommerce.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    count: PropTypes.string,
    percentage: PropTypes.number,
    isLoss: PropTypes.bool,
    extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

AnalyticEcommerce.defaultProps = {
    color: 'primary'
};

export default AnalyticEcommerce;
