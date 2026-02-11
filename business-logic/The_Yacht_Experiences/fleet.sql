-- THE YACHT EXPERIENCES - DYNAMIC LOAD (FIXED)
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
    '45ft Sea Ray', 
    'Yacht', 
    'The Yacht Experiences', 
    'Puerto Aventuras', 
    '{"4h": 32400, "5h_pizza": 37800, "9h": 61200, "extra_hour": 7200}', 
    '{"max_capacity": 15, "pax_included": 10, "extra_pax_cost": 1800, "dock_fee_usd": 20}', 
    '{"main_photo": "https://example.com/tye_45searay.jpg", "menu_pdf": "PENDING"}', 
    ARRAY['Air Conditioning', 'Premium Sound System', 'Onboard Chef'], 
    ARRAY['Gourmet Menu', 'Premium Open Bar', 'Snorkel Gear', 'Towels']
),
(
    '51ft Leopard', 
    'Power Catamaran', 
    'The Yacht Experiences', 
    'Puerto Aventuras', 
    '{"4h": 46800, "5h_pizza": 55800, "9h": 91800, "extra_hour": 10800}', 
    '{"max_capacity": 20, "pax_included": 15, "extra_pax_cost": 1800, "dock_fee_usd": 20}', 
    '{"main_photo": "https://example.com/tye_51leopard.jpg", "menu_pdf": "PENDING"}', 
    ARRAY['Wide Cockpit', 'Sunbathing Deck', 'Onboard Chef'], 
    ARRAY['Gourmet Menu', 'Premium Open Bar', 'Snorkeling', 'Paddleboards']
);
