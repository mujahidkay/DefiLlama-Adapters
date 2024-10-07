# Agoric Inter Protocol Stable Token (IST) Adapter

This adapter tracks the Total Value Locked (TVL) for the Inter Protocol Stable Token (IST) on the Agoric chain.

## Overview
- **Chain**: Agoric
- **Token**: IST (Inter Protocol Stable Token)
- **Website**: https://info.inter.trade/?chain=mainnet&range=day
- **CoinGecko ID**: inter-stable-token

## Functionality
This adapter calculates the TVL for IST by:

1. Querying data from the Agoric Subquery API (https://api.subquery.network/sq/agoric-labs/agoric-mainnet-v2).
2. Fetching information about:
   - Vault manager metrics
   - Oracle prices
   - Board auxiliaries (for decimal places)
   - Vault manager governances
   - Active vaults
   - Oracle price dailies
3. Calculating the total collateral value across different asset types.
4. Adjusting the collateral values based on oracle prices and decimal places.
5. Summing up the adjusted collateral values to get the total TVL.
