-- ═══════════════════════════════════════════════════════════════
--  Base de données pour « Progrès — suivi CrossFit »
--  À coller dans Supabase → SQL Editor → Run
-- ═══════════════════════════════════════════════════════════════

-- Une ligne par utilisateur, contenant l'ensemble de ses données.
create table if not exists public.app_state (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Sécurité au niveau des lignes : chacun ne voit et ne modifie que la sienne.
alter table public.app_state enable row level security;

drop policy if exists "lecture de sa propre ligne"     on public.app_state;
drop policy if exists "création de sa propre ligne"    on public.app_state;
drop policy if exists "mise à jour de sa propre ligne" on public.app_state;
drop policy if exists "suppression de sa propre ligne" on public.app_state;

create policy "lecture de sa propre ligne"
  on public.app_state for select using (auth.uid() = user_id);

create policy "création de sa propre ligne"
  on public.app_state for insert with check (auth.uid() = user_id);

create policy "mise à jour de sa propre ligne"
  on public.app_state for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "suppression de sa propre ligne"
  on public.app_state for delete using (auth.uid() = user_id);
