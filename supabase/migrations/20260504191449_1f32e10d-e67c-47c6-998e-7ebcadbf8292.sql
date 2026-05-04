DROP POLICY "Anyone can insert waitlist signups" ON public.waitlist_signups;

CREATE POLICY "Anyone can insert waitlist signups"
ON public.waitlist_signups
FOR INSERT
TO anon, authenticated
WITH CHECK (
  email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND length(email) <= 255
  AND (source IS NULL OR length(source) <= 50)
);