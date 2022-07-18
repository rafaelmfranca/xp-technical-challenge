export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthContextData = {
  isAuthenticated: boolean;
  error: string;
  handleLogin: (payload: LoginPayload) => Promise<void>;
};

export type AccountHistory = {
  historyId: string;
  createdAt: string;
  type: string;
  amount: string;
  clientId?: string;
};

export type DepositPayload = {
  amount: number;
  type: 'DEPOSIT';
};

export type WithdrawalPayload = {
  amount: number;
  type: 'WITHDRAWAL';
};

export type AccountContextData = {
  accountHistory: AccountHistory[];
  balance: number;
  handleAddDeposit: (depositPayload: DepositPayload) => Promise<void>;
  handleAddWithdrawal: (withdrawalPayload: WithdrawalPayload) => Promise<void>;
};
