alter table public.gallery
add column sort_order integer not null default 0,
add column is_active boolean not null default true,
add column updated_at timestamptz not null default now();

update public.gallery
set title = 'Gallery'
where title is null;