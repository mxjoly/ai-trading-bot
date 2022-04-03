import { BotConfig, StrategyConfig } from '../init';
import { BasicBackTestBot } from './bot';

if (process.env.NODE_ENV === 'test') {
  const BacktestConfig = BotConfig['backtest'];
  const startDate = new Date(BacktestConfig['start_date']);
  const endDate = new Date(BacktestConfig['end_date']);
  const initialCapital = BacktestConfig['initial_capital'];

  const bot = new BasicBackTestBot(
    StrategyConfig,
    startDate,
    endDate,
    initialCapital
  );

  bot.prepare();
  bot.run();
}
