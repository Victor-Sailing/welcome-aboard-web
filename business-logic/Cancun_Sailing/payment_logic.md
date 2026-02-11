# Global Payment & Financial Rules

## 1. Currency & Exchange Rate
- Base Currency: MXN (Mexican Pesos).
- Exchange Rate for Calculation: 1.00 USD = 18.00 MXN.
- Display: The App shows approximate USD, but charges the exact MXN amount.

## 2. Fees & Commissions (Proprietary Rules)
- Booking Fee: 6% (Fixed & Non-refundable).
- Purpose: Covers payment gateway (Stripe/PayPal) commissions.
- Dock Fee: $20 USD per person (Fixed at $360 MXN).

## 3. Provider Specific: Cancun Sailing
- Reservation Deposit: 20% of Charter Price.
- Formula: (Charter Price * 0.20) + (Booking Fee Total).
- Gratuities: 15% suggested (not included in price).

## 4. Special Logic: Isla Mujeres "6 for 7" Rule
- If Departure = 'Isla Mujeres':
    - Display Duration to User: "6 Hours".
    - Price to Charge: Use the 7-hour rate (price_7h_mxn).
- Strategy: Pay provider for 7h, customer sails 6h, maintains competitive pricing.

## 5. Sunset Toggle Logic (Cancun & Playa Mujeres)
- Threshold: Tours starting at or after 17:30.
- Durations Available: 3h, 4h, 5h.
- App Behavior: When Sunset Toggle is ON, the system must fetch 'price_Xh_sunset_mxn' columns.
