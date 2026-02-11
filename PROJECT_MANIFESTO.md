# PROJECT MANIFESTO: DYNAMIC VESSEL CATALOG (V2)
**Standard:** Professional English | Excellence-Driven Architecture

## 1. ARCHITECTURAL VISION
To move away from rigid database structures and implement an **Organic Dynamic System**. We use a single universal table where provider-specific logic is handled via JSON containers.

## 2. THE DATABASE SOURCE OF TRUTH (Supabase)
- **Table Name:** `vessels`
- **Dynamic Columns (JSONB):**
    - `pricing_data`: Stores variable rates (e.g., {"4h": 30000, "7h": 45000}).
    - `pax_logic`: Stores capacity and extra costs (e.g., {"included": 10, "extra_pax_mxn": 1800}).
    - `media_assets`: Stores URLs for photos, videos, and menus.
- **Strict Rule:** No new columns should be created for specific provider features. Use the JSONB containers.

## 3. FILE SYSTEM HIERARCHY
The project is organized into standardized folders. Each provider folder MUST contain:
- `fleet.sql`: The data insertion script using the JSONB format.
- `payment_logic.txt`: Taxes, fees (e.g., TYE 10% fee), and currency rules.
- `vessel_descriptions.txt`: Marketing copy and sales tone.
- `multimedia_links.txt`: Source links for visual assets.
- `cancellation_policies.txt`: Specific terms and conditions.

## 4. PROVIDER SPECIFICS
- **Cancun Sailing:** Standard/Luxury fleet. Focus on "Isla Mujeres Surcharges" and fixed durations.
- **The Yacht Experiences (TYE):** Ultra-High-End. Focus on "Extra Pax" fees and a mandatory 10% Service Fee/Tax calculation.

## 5. AGENT GUIDELINES
- All code, comments, and documentation must be in **English**.
- When calculating quotes, the Agent must cross-reference `fleet.sql` with `payment_logic.txt`.
