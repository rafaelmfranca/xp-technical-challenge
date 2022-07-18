import accountHistory from './accountHistory';

const contextValue = {
  accountHistory,
  balance: 510,
  handleAddDeposit: () => jest.fn(),
  handleAddWithdrawal: () => jest.fn(),
} as any;

export default contextValue;
