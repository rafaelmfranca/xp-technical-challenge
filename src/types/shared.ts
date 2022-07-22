export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthContextData = {
  email: string;
  clientId: string;
  error: string;
  handleLogin: (payload: LoginPayload) => Promise<void>;
  handleLogout: () => void;
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

export type AssetPurchasePayload = {
  assetId: string;
  purchaseQuantity: number;
};

export type AssetSalePayload = {
  assetId: string;
  saleQuantity: number;
};

export type Asset = {
  assetId: string;
  ticker: string;
  variation: string;
  amount: number;
  unitPrice: string;
};

export type AssetsContextData = {
  availableAssets: Asset[];
  investments: Asset[];
  handleAssetPurchase: (purchasePayload: AssetPurchasePayload) => Promise<void>;
  handleAssetSale: (salePayload: AssetSalePayload) => Promise<void>;
};
