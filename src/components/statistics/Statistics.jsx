// import PropTypes from 'prop-types';
import data from 'data/data.json';
import {
  StatisticsBox,
  StatisticsTitle,
  StatsticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
} from './Statistics.styled';
import { getRandomHexColor } from 'helpers/getRandomColor';

export const Statistics = ({title = 'Upload stats'}) => {
  return (
    <StatisticsBox>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatsticsList data={data}>
        {data.map(({ id, label, percentage }) => (
          <StatisticsItem backgroundColor={getRandomHexColor()} key={id}>
            <StatisticsLabel>{label}</StatisticsLabel>
            <StatisticsPercentage>{percentage}%</StatisticsPercentage>
          </StatisticsItem>
        ))}
      </StatsticsList>
    </StatisticsBox>
  );
};

  // Statistics.propTypes = {
  //   title: PropTypes.string,
  //   data: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.string.isRequired,
  //       label: PropTypes.string.isRequired,
  //       percentage: PropTypes.number.isRequired,
  //     })
  //   ),
  // }
