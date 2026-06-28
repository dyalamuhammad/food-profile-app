-- ==========================================
-- GALLERY
-- ==========================================

INSERT INTO public.gallery (
    title,
    image_url,
    sort_order,
    is_active
) VALUES
(
    'Interior Cafe',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    1,
    true
),
(
    'Coffee Bar',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    2,
    true
),
(
    'Latte Art',
    'https://images.unsplash.com/photo-1511920170033-f8396924c348',
    3,
    true
),
(
    'Outdoor Seating',
    'https://images.unsplash.com/photo-1521017432531-fbd92d768814',
    4,
    true
),
(
    'Signature Coffee',
    'https://images.unsplash.com/photo-1497636577773-f1231844b336',
    5,
    true
),
(
    'Fresh Pastry',
    'https://images.unsplash.com/photo-1509440159596-0249088772ff',
    6,
    true
),
(
    'Coffee Beans',
    'https://images.unsplash.com/photo-1447933601403-0c6688de566e',
    7,
    true
),
(
    'Dessert Corner',
    'https://images.unsplash.com/photo-1551024601-bec78aea704b',
    8,
    true
),
(
    'Evening Atmosphere',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    9,
    false
),
(
    'Weekend Crowd',
    'https://images.unsplash.com/photo-1463797221720-6b07e6426c24',
    10,
    true
);



-- ==========================================
-- MENUS
-- ==========================================

INSERT INTO public.menus (
    name,
    description,
    price,
    image_url,
    is_active
) VALUES
(
    'Espresso',
    'Single shot espresso with rich aroma.',
    18000,
    'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a',
    true
),
(
    'Americano',
    'Espresso blended with hot water.',
    22000,
    'https://images.unsplash.com/photo-1494314671902-399b18174975',
    true
),
(
    'Cappuccino',
    'Espresso with steamed milk and foam.',
    28000,
    'https://images.unsplash.com/photo-1534778101976-62847782c213',
    true
),
(
    'Cafe Latte',
    'Creamy latte with fresh milk.',
    30000,
    'https://images.unsplash.com/photo-1521302080371-d9d07de31f2d',
    true
),
(
    'Mocha',
    'Coffee mixed with chocolate.',
    32000,
    'https://images.unsplash.com/photo-1572441713132-51c75654db73',
    true
),
(
    'Caramel Latte',
    'Latte topped with caramel syrup.',
    34000,
    'https://images.unsplash.com/photo-1512568400610-62da28bc8a13',
    true
),
(
    'Vanilla Latte',
    'Smooth vanilla flavored latte.',
    34000,
    'https://images.unsplash.com/photo-1461023058943-07fcbe16d735',
    true
),
(
    'Matcha Latte',
    'Premium Japanese matcha latte.',
    35000,
    'https://images.unsplash.com/photo-1515823064-d6e0c04616a7',
    true
),
(
    'Hot Chocolate',
    'Rich and creamy chocolate drink.',
    27000,
    'https://images.unsplash.com/photo-1542990253-0d0f5be5f2a2',
    false
),
(
    'Butter Croissant',
    'Fresh baked buttery croissant.',
    20000,
    'https://images.unsplash.com/photo-1509440159596-0249088772ff',
    true
);