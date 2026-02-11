-- CANCUN SAILING FLEET - UNIVERSAL LOAD (JSONB)
-- This script uses the new dynamic containers for pricing and pax logic.

INSERT INTO vessels (
    vessel_name, 
    vessel_type, 
    provider_name, 
    zone_base, 
    pricing_data, 
    pax_logic, 
    media_assets, 
    features_en, 
    inclusions_en
)
VALUES 
(
    '4 Vents', 
    'Sailing Catamaran', 
    'Cancun Sailing', 
    'Cancun', 
    '{"4h": 30060, "7h": 41760, "extra_hour": 7020, "isla_mujeres_surcharge": 7020}', 
    '{"max_capacity": 35, "dock_fee_per_pax": 360}', 
    '{"main_photo": "https://example.com/4vents.jpg"}', 
    ARRAY['Spacious Deck', 'Stereo System', 'Trampolines'], 
    ARRAY['National Open Bar', 'Snorkel Gear', 'Bilingual Crew']
),
(
    'Oh La La', 
    'Sailing Catamaran', 
    'Cancun Sailing', 
    'Cancun', 
    '{"4h": 21330, "7h": 26460, "extra_hour": 5040, "isla_mujeres_surcharge": 5040}', 
    '{"max_capacity": 25, "dock_fee_per_pax": 360}', 
    '{"main_photo": "https://example.com/ohlala.jpg"}', 
    ARRAY['Shaded Area', 'Safety Netting', 'Ice Box'], 
    ARRAY['National Open Bar', 'Snorkel Gear', 'Bilingual Crew']
),
(
    'Nal Gone', 
    'Sailing Catamaran', 
    'Cancun Sailing', 
    'Cancun', 
    '{"4h": 13050, "7h": 22320, "extra_hour": 4320, "isla_mujeres_surcharge": 4320}', 
    '{"max_capacity": 13, "dock_fee_per_pax": 360}', 
    '{"main_photo": "https://example.com/nalgone.jpg"}', 
    ARRAY['Compact & Fast', 'Comfortable Seating'], 
    ARRAY['National Open Bar', 'Snorkel Gear', 'Bilingual Crew']
);
