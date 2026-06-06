create table public.about_us (
    id uuid primary key default gen_random_uuid(),

    title text not null,

    description text not null,

    image_url text,

    created_at timestamptz default now(),

    updated_at timestamptz default now()
);

insert into public.about_us (
    title,
    description
)
values (
    'Tentang Pempek Cesi',
    'Pempek Cesi menghadirkan cita rasa pempek Palembang dengan bahan berkualitas dan resep pilihan.'
);