create extension if not exists "pgcrypto";

create table if not exists public.site_settings (
    id uuid primary key default gen_random_uuid(),

    hero_badge text null,
    hero_title text not null,
    hero_subtitle text,

    whatsapp text,
    instagram text,
    address text,

    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create table if not exists public.menus (
    id uuid primary key default gen_random_uuid(),

    name text not null,
    description text,

    price integer not null,

    image_url text,

    is_active boolean not null default true,

    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create table if not exists public.gallery (
    id uuid primary key default gen_random_uuid(),

    title text,

    image_url text not null,

    created_at timestamptz not null default now()
);

insert into public.site_settings (
    hero_title,
    hero_subtitle,
    whatsapp,
    instagram,
    address
)
values (
    'Pempek Cesi',
    'Pempek Palembang Asli',
    '628123456789',
    '@pempekcesi',
    'Bandar Lampung'
);

insert into public.menus (
    name,
    description,
    price
)
values
(
    'Pempek Kapal Selam',
    'Pempek isi telur',
    35000
),
(
    'Pempek Lenjer',
    'Pempek lenjer gurih',
    18000
),
(
    'Pempek Adaan',
    'Pempek adaan khas',
    20000
);