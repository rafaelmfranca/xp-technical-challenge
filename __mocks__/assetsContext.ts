import availableAssets from './availableAssets';
import investments from './investments';

const contextValue = {
  availableAssets,
  investments,
  handleAssetPurchase: () => jest.fn(),
} as any;

export default contextValue;
