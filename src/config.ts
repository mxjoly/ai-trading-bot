import { CandleChartInterval } from 'binance-api-node';
import { getPositionSizeByRisk } from './riskManagement';
import { basicStrategy } from './exitStrategy';

/**
 * Default config for neat algorithm
 */
const config: StrategyConfig = {
  asset: 'BTC',
  base: 'USDT',
  interval: CandleChartInterval.FIVE_MINUTES,
  risk: 0.01,
  leverage: 20,
  exitStrategy: (price, candles, pricePrecision, side) =>
    basicStrategy(price, pricePrecision, side, {
      profitTarget: 0.01,
      lossTolerance: 0.01,
    }),
  riskManagement: getPositionSizeByRisk,
};
export default config;
