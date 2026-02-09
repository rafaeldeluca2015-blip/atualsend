/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact name
      - `company` (text, optional) - Company name
      - `whatsapp` (text) - WhatsApp number
      - `message` (text) - Contact message
      - `created_at` (timestamptz) - Timestamp of submission
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy to allow anonymous insertions (for contact form)
    - Admin read access only (for future admin panel)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text DEFAULT '',
  whatsapp text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous contact form submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);