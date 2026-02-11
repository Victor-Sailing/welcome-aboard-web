-- ==========================================================
-- DYNAMIC UNIVERSAL STRUCTURE (V2 - EXCELLENCE)
-- ==========================================================

DROP TABLE IF EXISTS vessels CASCADE;

CREATE TABLE vessels (
    id SERIAL PRIMARY KEY,
    vessel_name TEXT NOT NULL,
    provider_name TEXT NOT NULL,    -- Key identifier for folder logic
    zone_base TEXT,                -- Departure location
    vessel_type TEXT,              -- Yacht, Catamaran, etc.
    
    -- DYNAMIC CONTAINERS (JSONB)
    -- Flexible storage for any duration and price without new columns.
    pricing_data JSONB,            -- e.g., {"4h": 15000, "7h": 22000, "sunset": 12000}
    
    -- Flexible passenger and extra cost rules.
    pax_logic JSONB,               -- e.g., {"included": 10, "extra_cost": 1500}
    
    -- Consolidated media assets (Photos, videos, menus).
    media_assets JSONB,            -- e.g., {"main": "url", "gallery": ["url1"], "menu": "url"}

    -- FEATURES AND DESCRIPTIONS
    features_en TEXT[],            -- Tags: ["AC", "WiFi", "Chef"]
    inclusions_en TEXT[],          -- Service inclusions
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- AGENT NOTE:
-- This table is agnostic. Interpretation of 'pricing_data' and 'pax_logic' 
-- follows the rules defined in the .txt files within each provider folder.
